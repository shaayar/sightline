import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || !body.name || !body.email || !body.subject || !body.message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  // Placeholder for email or ticketing integration.
  return NextResponse.json({ success: true, message: "Contact request received." });
}
