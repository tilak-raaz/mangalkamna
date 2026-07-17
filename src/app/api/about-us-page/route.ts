import { NextRequest, NextResponse } from "next/server";
import {
  createAboutUsContent,
  getAboutUsPageContent,
  updateAboutUsContent,
} from "@/lib/aboutUsData";

function parsePayload(body: unknown) {
  const payload = body as Record<string, unknown>;

  return {
    OurStoryText:
      typeof payload.OurStoryText === "string" ? payload.OurStoryText.trim() : "",
    image: typeof payload.image === "string" ? payload.image.trim() : "",
  };
}

export async function GET() {
  try {
    const aboutUs = await getAboutUsPageContent();
    return NextResponse.json({ aboutUs });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to load about us page.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const payload = parsePayload(await request.json());

    if (!payload.OurStoryText) {
      return NextResponse.json(
        { error: "OurStoryText is required." },
        { status: 400 },
      );
    }

    if (payload.image) {
      try {
        new URL(payload.image);
      } catch {
        return NextResponse.json(
          { error: "image must be a valid URL." },
          { status: 400 },
        );
      }
    }

    const content = await createAboutUsContent(payload);
    return NextResponse.json({ content }, { status: 201 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to create about us data.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const contentId = typeof body?.contentId === "string" ? body.contentId : "";

    if (!contentId) {
      return NextResponse.json(
        { error: "contentId is required." },
        { status: 400 },
      );
    }

    const payload = parsePayload(body);

    if (!payload.OurStoryText) {
      return NextResponse.json(
        { error: "OurStoryText is required." },
        { status: 400 },
      );
    }

    if (payload.image) {
      try {
        new URL(payload.image);
      } catch {
        return NextResponse.json(
          { error: "image must be a valid URL." },
          { status: 400 },
        );
      }
    }

    const content = await updateAboutUsContent(contentId, payload);
    return NextResponse.json({ content });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to update about us data.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
