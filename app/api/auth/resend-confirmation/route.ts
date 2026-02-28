import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export const runtime = "nodejs";

type Body = {
  email?: string;
  next?: string;
};

export async function POST(req: Request) {
  try {
    const { origin } = new URL(req.url);
    const body = (await req.json()) as Body;

    const email = (body.email ?? "").trim().toLowerCase();
    const next = body.next ?? "/dashboard";

    if (!email) {
      return NextResponse.json({ error: "Missing email" }, { status: 400 });
    }

    const supabase = await createClient();

    const emailRedirectTo = `${origin}/api/auth/confirm?next=${encodeURIComponent(
      next
    )}`;

    const { error } = await supabase.auth.resend({
      type: "signup",
      email,
      options: { emailRedirectTo },
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}