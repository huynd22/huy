"use server";

import { NextRequest, NextResponse } from "next/server";

const googleScriptURL =
  "https://script.google.com/macros/s/AKfycbx60XP1tT5FbDClyHCOkJqMIjxiDt8Jr1PkxPFH26l3p87gIuV_qD1YeoyVbhzuhMbP/exec";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const res = await fetch(googleScriptURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: name,
        email,
        message,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to submit to Google Sheets");
    }

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}
