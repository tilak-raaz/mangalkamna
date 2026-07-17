import { NextRequest, NextResponse } from "next/server";
import {
  createServicePageItem,
  deleteServicePageItem,
  listServicesPageItems,
  updateServicePageItem,
} from "@/lib/sitePageData";

function parsePoints(value: unknown) {
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
    name: typeof payload.name === "string" ? payload.name.trim() : "",
    points: parsePoints(payload.points),
  };
}

export async function GET() {
  try {
    const services = await listServicesPageItems();
    return NextResponse.json({ services });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to load services.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const payload = parsePayload(await request.json());

    if (!payload.name || payload.points.length === 0) {
      return NextResponse.json(
        { error: "name and at least one point are required." },
        { status: 400 },
      );
    }

    const service = await createServicePageItem(payload);
    return NextResponse.json({ service }, { status: 201 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to create service.";
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

    if (!payload.name || payload.points.length === 0) {
      return NextResponse.json(
        { error: "name and at least one point are required." },
        { status: 400 },
      );
    }

    const service = await updateServicePageItem(id, payload);
    return NextResponse.json({ service });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to update service.";
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

    await deleteServicePageItem(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to delete service.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
