import { NextRequest, NextResponse } from "next/server";
import {
  createPatientRoomCategory,
  deletePatientRoomCategory,
  listPatientRoomCategories,
  updatePatientRoomCategory,
} from "@/lib/sitePageData";

function parseInsuranceDetails(value: unknown) {
  if (Array.isArray(value)) {
    return value
      .filter((item): item is string => typeof item === "string")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  if (typeof value === "string") {
    return value
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}

function parsePayload(body: unknown) {
  const payload = body as Record<string, unknown>;

  return {
    roomType:
      typeof payload.roomType === "string" ? payload.roomType.trim() : "",
    amenities:
      typeof payload.amenities === "string" ? payload.amenities.trim() : "",
    occupancy:
      typeof payload.occupancy === "string" ? payload.occupancy.trim() : "",
    insuranceDetails: parseInsuranceDetails(payload.insuranceDetails),
  };
}

export async function GET() {
  try {
    const rooms = await listPatientRoomCategories();
    return NextResponse.json({ rooms });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to load room categories.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const payload = parsePayload(await request.json());

    if (!payload.roomType || !payload.amenities || !payload.occupancy) {
      return NextResponse.json(
        { error: "roomType, amenities, and occupancy are required." },
        { status: 400 },
      );
    }

    const room = await createPatientRoomCategory(payload);
    return NextResponse.json({ room }, { status: 201 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to create room category.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const id = typeof body?.id === "string" ? body.id : "";

    if (!id) {
      return NextResponse.json({ error: "id is required." }, { status: 400 });
    }

    const payload = parsePayload(body);

    if (!payload.roomType || !payload.amenities || !payload.occupancy) {
      return NextResponse.json(
        { error: "roomType, amenities, and occupancy are required." },
        { status: 400 },
      );
    }

    const room = await updatePatientRoomCategory(id, payload);
    return NextResponse.json({ room });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to update room category.";
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

    await deletePatientRoomCategory(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to delete room category.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
