import { NextRequest, NextResponse } from "next/server";
import {
  createTestimonial,
  deleteTestimonial,
  listTestimonials,
  updateTestimonial,
} from "@/lib/homeContentData";

function parsePayload(body: unknown) {
  const payload = body as Record<string, unknown>;

  return {
    name: typeof payload.name === "string" ? payload.name.trim() : "",
    deptConcerned:
      typeof payload.deptConcerned === "string"
        ? payload.deptConcerned.trim()
        : "",
    reviewText:
      typeof payload.reviewText === "string" ? payload.reviewText.trim() : "",
  };
}

export async function GET() {
  try {
    const testimonials = await listTestimonials();
    return NextResponse.json({ testimonials });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to load testimonials.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const payload = parsePayload(await request.json());

    if (!payload.name || !payload.reviewText) {
      return NextResponse.json(
        { error: "name and reviewText are required." },
        { status: 400 },
      );
    }

    const testimonial = await createTestimonial(payload);
    return NextResponse.json({ testimonial }, { status: 201 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to create testimonial.";

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

    if (!payload.name || !payload.reviewText) {
      return NextResponse.json(
        { error: "name and reviewText are required." },
        { status: 400 },
      );
    }

    const testimonial = await updateTestimonial(id, payload);
    return NextResponse.json({ testimonial });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to update testimonial.";

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

    await deleteTestimonial(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to delete testimonial.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
