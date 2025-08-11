import { NextRequest, NextResponse } from "next/server";

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

    // Google Sheets Web App URL - REPLACE WITH YOUR ACTUAL WEB APP URL
    const GOOGLE_SHEETS_URL =
      "https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID_HERE/exec";

    // Prepare data for Google Sheets
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("timestamp", new Date().toISOString());

    // Send to Google Sheets
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      console.log("Response status:", response.status);
      console.log("Response statusText:", response.statusText);
      throw new Error("Failed to submit to Google Sheets");
    }

    const result = await response.text();
    console.log("Google Sheets response:", result);

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
