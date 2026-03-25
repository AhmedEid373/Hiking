import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { tickets } from "@/drizzle/schema";
import { getSession } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getSession();

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    let result;

    if (session.role === "admin") {
      result = await db.select().from(tickets);
    } else {
      result = await db
        .select()
        .from(tickets)
        .where(eq(tickets.userId, session.id));
    }

    return NextResponse.json({ tickets: result });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await getSession();

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { subject, description, priority } = await request.json();

    if (!subject || !description) {
      return NextResponse.json(
        { error: "Subject and description are required" },
        { status: 400 }
      );
    }

    const [ticket] = await db
      .insert(tickets)
      .values({
        userId: session.id,
        subject,
        description,
        priority: priority || "medium",
      })
      .returning();

    return NextResponse.json({ ticket }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
