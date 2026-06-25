import { NextResponse } from "next/server";
import { listPublicDoctors } from "@/lib/doctorData";

export async function GET() {
  try {
    const doctors = await listPublicDoctors();
    return NextResponse.json({ doctors });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to load doctors.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
