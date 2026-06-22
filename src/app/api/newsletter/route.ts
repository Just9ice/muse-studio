import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // In a real app, you would save this to a database or send it to an email provider (Mailchimp, Resend, etc.)
    // For now, we just simulate a successful subscription and log it.
    console.log(`[Newsletter API] New subscription from: ${email}`);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json(
      { success: true, message: "Successfully subscribed!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Newsletter API] Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
