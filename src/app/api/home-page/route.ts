import { NextRequest, NextResponse } from "next/server";
import {
  createHomePageContent,
  getHomePageContent,
  updateHomePageContent,
} from "@/lib/homeContentData";

function parseHomePagePayload(body: unknown) {
  const payload = body as Record<string, unknown>;

  const title = typeof payload.title === "string" ? payload.title.trim() : "";
  const aboutUsText =
    typeof payload.aboutUsText === "string" ? payload.aboutUsText.trim() : "";
  const whyChooseUsText =
    typeof payload.whyChooseUsText === "string"
      ? payload.whyChooseUsText.trim()
      : "";

  const heroImages = Array.isArray(payload.heroImages)
    ? payload.heroImages.filter(
        (item): item is string => typeof item === "string" && item.trim().length > 0,
      )
    : [];

  return {
    title,
    aboutUsText,
    whyChooseUsText,
    heroImages,
  };
}

function validateUrls(urls: string[]) {
  for (const url of urls) {
    try {
      new URL(url);
    } catch {
      return false;
    }
  }

  return true;
}

export async function GET() {
  try {
    const homePage = await getHomePageContent();
    return NextResponse.json({ homePage });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to load home page.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const payload = parseHomePagePayload(await request.json());

    if (!payload.title) {
      return NextResponse.json({ error: "title is required." }, { status: 400 });
    }

    if (!validateUrls(payload.heroImages)) {
      return NextResponse.json(
        { error: "Each hero image must be a valid URL." },
        { status: 400 },
      );
    }

    const homePage = await createHomePageContent(payload);
    return NextResponse.json({ homePage }, { status: 201 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to create home page.";

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

    const payload = parseHomePagePayload(body);

    if (!payload.title) {
      return NextResponse.json({ error: "title is required." }, { status: 400 });
    }

    if (!validateUrls(payload.heroImages)) {
      return NextResponse.json(
        { error: "Each hero image must be a valid URL." },
        { status: 400 },
      );
    }

    const homePage = await updateHomePageContent(id, payload);
    return NextResponse.json({ homePage });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to update home page.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
