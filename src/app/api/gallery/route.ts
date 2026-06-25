import { NextRequest, NextResponse } from "next/server";
import {
  createGalleryImage,
  deleteGalleryImage,
  listGalleryImages,
} from "@/lib/galleryData";

export async function GET() {
  try {
    const images = await listGalleryImages();
    return NextResponse.json({ images });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to load gallery images.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const imageURL = typeof body?.imageURL === "string" ? body.imageURL : "";

    if (!imageURL) {
      return NextResponse.json(
        { error: "imageURL is required." },
        { status: 400 },
      );
    }

    try {
      new URL(imageURL);
    } catch {
      return NextResponse.json(
        { error: "imageURL must be a valid URL." },
        { status: 400 },
      );
    }

    const image = await createGalleryImage(imageURL);
    return NextResponse.json({ image }, { status: 201 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to save gallery image.";

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

    await deleteGalleryImage(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to delete gallery image.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
