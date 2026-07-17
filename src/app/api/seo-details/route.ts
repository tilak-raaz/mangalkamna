import { NextRequest, NextResponse } from "next/server";
import {
  createSeoDetail,
  deleteSeoDetail,
  listSeoDetails,
  updateSeoDetail,
} from "@/lib/seoData";

function parsePayload(body: unknown) {
  const payload = body as Record<string, unknown>;

  const seoScoreRaw = payload.seoScore;
  const seoScore =
    typeof seoScoreRaw === "number"
      ? seoScoreRaw
      : typeof seoScoreRaw === "string" && seoScoreRaw.trim()
        ? Number(seoScoreRaw)
        : 0;

  return {
    pageTitle:
      typeof payload.pageTitle === "string" ? payload.pageTitle.trim() : "",
    metaDescription:
      typeof payload.metaDescription === "string"
        ? payload.metaDescription.trim()
        : "",
    metaKeywords:
      typeof payload.metaKeywords === "string"
        ? payload.metaKeywords.trim()
        : "",
    seoScore: Number.isFinite(seoScore)
      ? Math.min(100, Math.max(0, Math.round(seoScore)))
      : 0,
  };
}

export async function GET() {
  try {
    const seoDetails = await listSeoDetails();
    return NextResponse.json({ seoDetails });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to load SEO details.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const payload = parsePayload(await request.json());

    if (!payload.pageTitle || !payload.metaDescription || !payload.metaKeywords) {
      return NextResponse.json(
        { error: "pageTitle, metaDescription, and metaKeywords are required." },
        { status: 400 },
      );
    }

    const seoDetail = await createSeoDetail(payload);
    return NextResponse.json({ seoDetail }, { status: 201 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to create SEO detail.";
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

    if (!payload.pageTitle || !payload.metaDescription || !payload.metaKeywords) {
      return NextResponse.json(
        { error: "pageTitle, metaDescription, and metaKeywords are required." },
        { status: 400 },
      );
    }

    const seoDetail = await updateSeoDetail(id, payload);
    return NextResponse.json({ seoDetail });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to update SEO detail.";
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

    await deleteSeoDetail(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to delete SEO detail.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
