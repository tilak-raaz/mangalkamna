import { NextRequest, NextResponse } from "next/server";
import {
  createPage,
  deletePage,
  getPageBySlug,
  listPages,
  normalizePageSlug,
  updatePage,
} from "@/lib/pageData";

function parsePagePayload(body: unknown) {
  const payload = body as Record<string, unknown>;

  const title = typeof payload.title === "string" ? payload.title.trim() : "";
  const slugInput = typeof payload.slug === "string" ? payload.slug.trim() : "";
  const excerpt =
    typeof payload.excerpt === "string" ? payload.excerpt.trim() : "";
  const content =
    typeof payload.content === "string" ? payload.content.trim() : "";
  const coverImageUrl =
    typeof payload.coverImageUrl === "string"
      ? payload.coverImageUrl.trim()
      : "";
  const metaTitle =
    typeof payload.metaTitle === "string" ? payload.metaTitle.trim() : "";
  const metaDescription =
    typeof payload.metaDescription === "string"
      ? payload.metaDescription.trim()
      : "";
  const isPublished = Boolean(payload.isPublished);

  return {
    title,
    slug: normalizePageSlug(slugInput || title),
    excerpt,
    content,
    coverImageUrl,
    metaTitle,
    metaDescription,
    isPublished,
  };
}

async function assertUniqueSlug(slug: string, id?: string) {
  const page = await getPageBySlug(slug);

  if (page && page.id !== id) {
    throw new Error("A page with this slug already exists.");
  }
}

export async function GET() {
  try {
    const pages = await listPages();
    return NextResponse.json({ pages });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to load pages.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const payload = parsePagePayload(await request.json());

    if (!payload.title || !payload.slug || !payload.content) {
      return NextResponse.json(
        { error: "Title, slug, and content are required." },
        { status: 400 },
      );
    }

    await assertUniqueSlug(payload.slug);

    const page = await createPage(payload);
    return NextResponse.json({ page }, { status: 201 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to save page.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const id = typeof body?.id === "string" ? body.id : "";
    const payload = parsePagePayload(body);

    if (!id) {
      return NextResponse.json({ error: "id is required." }, { status: 400 });
    }

    if (!payload.title || !payload.slug || !payload.content) {
      return NextResponse.json(
        { error: "Title, slug, and content are required." },
        { status: 400 },
      );
    }

    await assertUniqueSlug(payload.slug, id);

    const page = await updatePage(id, payload);
    return NextResponse.json({ page });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to update page.";

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

    await deletePage(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to delete page.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
