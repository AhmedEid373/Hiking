import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { createPortalSession } from "@/lib/stripe";

export async function POST(request: Request) {
  try {
    const session = await getSession();

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const origin = new URL(request.url).origin;

    const portalSession = await createPortalSession(
      session.id.toString(),
      `${origin}/dashboard`
    );

    return NextResponse.json({ url: portalSession.url });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
