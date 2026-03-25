import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { createCheckoutSession } from "@/lib/stripe";

export async function POST(request: Request) {
  try {
    const session = await getSession();

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { priceId } = await request.json();

    if (!priceId) {
      return NextResponse.json(
        { error: "Price ID is required" },
        { status: 400 }
      );
    }

    const origin = new URL(request.url).origin;

    const checkoutSession = await createCheckoutSession({
      priceId,
      customerId: session.id.toString(),
      successUrl: `${origin}/dashboard?checkout=success`,
      cancelUrl: `${origin}/pricing?checkout=canceled`,
    });

    return NextResponse.json({ url: checkoutSession.url });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
