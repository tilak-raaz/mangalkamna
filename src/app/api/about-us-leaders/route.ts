import { NextRequest, NextResponse } from "next/server";
import {
  createAboutUsLeader,
  deleteAboutUsLeader,
  getAboutUsPageContent,
  updateAboutUsLeader,
} from "@/lib/aboutUsData";

function parsePayload(body: unknown) {
  const payload = body as Record<string, unknown>;

  return {
    leaderName:
      typeof payload.leaderName === "string" ? payload.leaderName.trim() : "",
    leaderDept:
      typeof payload.leaderDept === "string" ? payload.leaderDept.trim() : "",
    leaderDesc:
      typeof payload.leaderDesc === "string" ? payload.leaderDesc.trim() : "",
    leaderImg:
      typeof payload.leaderImg === "string" ? payload.leaderImg.trim() : "",
  };
}

function validateImageUrl(url: string) {
  if (!url) {
    return true;
  }

  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export async function GET() {
  try {
    const aboutUs = await getAboutUsPageContent();
    return NextResponse.json({ leaders: aboutUs.leaders });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to load leaders.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const payload = parsePayload(await request.json());

    if (!payload.leaderName || !payload.leaderDept || !payload.leaderDesc) {
      return NextResponse.json(
        { error: "leaderName, leaderDept, and leaderDesc are required." },
        { status: 400 },
      );
    }

    if (!validateImageUrl(payload.leaderImg)) {
      return NextResponse.json(
        { error: "leaderImg must be a valid URL." },
        { status: 400 },
      );
    }

    const leader = await createAboutUsLeader(payload);
    return NextResponse.json({ leader }, { status: 201 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to create leader.";

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

    if (!payload.leaderName || !payload.leaderDept || !payload.leaderDesc) {
      return NextResponse.json(
        { error: "leaderName, leaderDept, and leaderDesc are required." },
        { status: 400 },
      );
    }

    if (!validateImageUrl(payload.leaderImg)) {
      return NextResponse.json(
        { error: "leaderImg must be a valid URL." },
        { status: 400 },
      );
    }

    const leader = await updateAboutUsLeader(id, payload);
    return NextResponse.json({ leader });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to update leader.";

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

    await deleteAboutUsLeader(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to delete leader.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
