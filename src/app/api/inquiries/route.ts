import { NextRequest, NextResponse } from "next/server";
import { sendFormInquiryEmail } from "@/lib/formMailer";

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const type = asString(body?.type);

    if (type === "appointment") {
      const payload = {
        type: "appointment" as const,
        name: asString(body?.name),
        phone: asString(body?.phone),
        email: asString(body?.email),
        date: asString(body?.date),
        service: asString(body?.service),
        notes: asString(body?.notes),
      };

      if (
        !payload.name ||
        !payload.phone ||
        !payload.email ||
        !payload.date ||
        !payload.service
      ) {
        return NextResponse.json(
          { error: "All appointment fields are required." },
          { status: 400 },
        );
      }

      if (!isValidEmail(payload.email)) {
        return NextResponse.json(
          { error: "A valid email address is required." },
          { status: 400 },
        );
      }

      const result = await sendFormInquiryEmail(payload);
      return NextResponse.json({ success: true, ...result }, { status: 201 });
    }

    if (type === "contact") {
      const payload = {
        type: "contact" as const,
        fullName: asString(body?.fullName),
        email: asString(body?.email),
        phone: asString(body?.phone),
        subject: asString(body?.subject),
        message: asString(body?.message),
      };

      if (
        !payload.fullName ||
        !payload.email ||
        !payload.phone ||
        !payload.subject ||
        !payload.message
      ) {
        return NextResponse.json(
          { error: "All contact fields are required." },
          { status: 400 },
        );
      }

      if (!isValidEmail(payload.email)) {
        return NextResponse.json(
          { error: "A valid email address is required." },
          { status: 400 },
        );
      }

      const result = await sendFormInquiryEmail(payload);
      return NextResponse.json({ success: true, ...result }, { status: 201 });
    }

    return NextResponse.json(
      { error: "type must be either contact or appointment." },
      { status: 400 },
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to send email.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
