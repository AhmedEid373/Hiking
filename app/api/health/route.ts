import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { sql } from "drizzle-orm";

export async function GET() {
  const health: Record<string, unknown> = {
    status: "ok",
    timestamp: new Date().toISOString(),
    database: "unknown",
  };

  try {
    const result = await db.execute(sql`SELECT 1 as connected`);
    if (result) {
      health.database = "connected";
    }
  } catch (error) {
    health.status = "degraded";
    health.database = "disconnected";
    health.databaseError = error instanceof Error ? error.message : String(error);
  }

  const statusCode = health.status === "ok" ? 200 : 503;
  return NextResponse.json(health, { status: statusCode });
}
