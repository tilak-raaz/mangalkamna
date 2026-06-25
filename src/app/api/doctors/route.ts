import { NextRequest, NextResponse } from "next/server";
import { createDoctor, deleteDoctor, listDoctors, updateDoctor } from "@/lib/doctorData";

function validateDoctorPayload(body: unknown) {
  const payload = body as Record<string, unknown>;

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const speciality =
    typeof payload.speciality === "string" ? payload.speciality.trim() : "";
  const doctorImage =
    typeof payload.doctorImage === "string" ? payload.doctorImage.trim() : "";
  const experience =
    typeof payload.experience === "string" ? payload.experience.trim() : "";
  const description =
    typeof payload.description === "string" ? payload.description.trim() : "";

  return { name, speciality, doctorImage, experience, description };
}

export async function GET() {
  try {
    const doctors = await listDoctors();
    return NextResponse.json({ doctors });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to load doctors.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const payload = validateDoctorPayload(await request.json());

    if (!payload.name || !payload.speciality || !payload.doctorImage || !payload.experience || !payload.description) {
      return NextResponse.json(
        { error: "All doctor fields are required." },
        { status: 400 },
      );
    }

    try {
      new URL(payload.doctorImage);
    } catch {
      return NextResponse.json(
        { error: "doctorImage must be a valid URL." },
        { status: 400 },
      );
    }

    const doctor = await createDoctor(payload);
    return NextResponse.json({ doctor }, { status: 201 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to save doctor.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const id = typeof body?.id === "string" ? body.id : "";
    const payload = validateDoctorPayload(body);

    if (!id) {
      return NextResponse.json({ error: "id is required." }, { status: 400 });
    }

    if (!payload.name || !payload.speciality || !payload.doctorImage || !payload.experience || !payload.description) {
      return NextResponse.json(
        { error: "All doctor fields are required." },
        { status: 400 },
      );
    }

    try {
      new URL(payload.doctorImage);
    } catch {
      return NextResponse.json(
        { error: "doctorImage must be a valid URL." },
        { status: 400 },
      );
    }

    const doctor = await updateDoctor(id, payload);
    return NextResponse.json({ doctor });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to update doctor.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    const id = typeof body?.id === "string" ? body.id : "";

    if (!id) {
      return NextResponse.json({ error: "id is required." }, { status: 400 });
    }

    await deleteDoctor(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to delete doctor.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
