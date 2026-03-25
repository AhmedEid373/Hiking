import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { stripe } from "@/lib/stripe";
import { db } from "@/lib/db";
import { users, subscriptions, invoices } from "@/drizzle/schema";
import Stripe from "stripe";

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: Request) {
  try {
    const body = await request.text();
    const signature = request.headers.get("stripe-signature");

    if (!signature) {
      return NextResponse.json(
        { error: "Missing stripe-signature header" },
        { status: 400 }
      );
    }

    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch {
      return NextResponse.json(
        { error: "Invalid webhook signature" },
        { status: 400 }
      );
    }

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const customerId = session.customer as string;
        const subscriptionId = session.subscription as string;

        const [user] = await db
          .select()
          .from(users)
          .where(eq(users.stripeCustomerId, customerId));

        if (user && subscriptionId) {
          await db.insert(subscriptions).values({
            userId: user.id,
            planId: 1,
            stripeSubscriptionId: subscriptionId,
            status: "active",
          });
        }
        break;
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;
        const subId = subscription.id;

        const statusMap: Record<
          string,
          "active" | "past_due" | "canceled" | "trialing"
        > = {
          active: "active",
          past_due: "past_due",
          canceled: "canceled",
          trialing: "trialing",
        };

        const mappedStatus = statusMap[subscription.status] || "active";

        await db
          .update(subscriptions)
          .set({
            status: mappedStatus,
            updatedAt: new Date(),
          })
          .where(eq(subscriptions.stripeSubscriptionId, subId));
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        const subId = subscription.id;

        await db
          .update(subscriptions)
          .set({
            status: "canceled",
            canceledAt: new Date(),
            updatedAt: new Date(),
          })
          .where(eq(subscriptions.stripeSubscriptionId, subId));
        break;
      }

      case "invoice.payment_succeeded": {
        const invoice = event.data.object as Stripe.Invoice;
        const customerId = invoice.customer as string;

        const [user] = await db
          .select()
          .from(users)
          .where(eq(users.stripeCustomerId, customerId));

        if (user) {
          await db.insert(invoices).values({
            userId: user.id,
            stripeInvoiceId: invoice.id,
            amountPaid: invoice.amount_paid ?? 0,
            currency: invoice.currency ?? "usd",
            status: "paid",
            paidAt: new Date(),
            invoiceUrl: invoice.hosted_invoice_url,
          });
        }
        break;
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        const customerId = invoice.customer as string;

        const [user] = await db
          .select()
          .from(users)
          .where(eq(users.stripeCustomerId, customerId));

        if (user) {
          await db.insert(invoices).values({
            userId: user.id,
            stripeInvoiceId: invoice.id,
            amountPaid: invoice.amount_paid ?? 0,
            currency: invoice.currency ?? "usd",
            status: "failed",
            invoiceUrl: invoice.hosted_invoice_url,
          });
        }
        break;
      }
    }

    return NextResponse.json({ received: true });
  } catch {
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }
}
