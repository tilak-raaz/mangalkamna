import { NextRequest, NextResponse } from "next/server";
import {
  createDepartment,
  deleteDepartment,
  listDepartments,
  updateDepartment,
} from "@/lib/homeContentData";

function parsePayload(body: unknown) {
  const payload = body as Record<string, unknown>;

  return {
    deptName:
      typeof payload.deptName === "string" ? payload.deptName.trim() : "",
    deptDesc:
      typeof payload.deptDesc === "string" ? payload.deptDesc.trim() : "",
  };
}

export async function GET() {
  try {
    const departments = await listDepartments();
    return NextResponse.json({ departments });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to load departments.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const payload = parsePayload(await request.json());

    if (!payload.deptName || !payload.deptDesc) {
      return NextResponse.json(
        { error: "deptName and deptDesc are required." },
        { status: 400 },
      );
    }

    const department = await createDepartment(payload);
    return NextResponse.json({ department }, { status: 201 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to create department.";

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

    if (!payload.deptName || !payload.deptDesc) {
      return NextResponse.json(
        { error: "deptName and deptDesc are required." },
        { status: 400 },
      );
    }

    const department = await updateDepartment(id, payload);
    return NextResponse.json({ department });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to update department.";

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

    await deleteDepartment(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to delete department.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
