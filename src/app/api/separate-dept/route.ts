import { NextRequest, NextResponse } from "next/server";
import {
  createDepartmentDetail,
  deleteDepartmentDetail,
  listDepartmentDetails,
  updateDepartmentDetail,
} from "@/lib/departmentDetailData";

function parseListField(value: unknown) {
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
    deptName: typeof payload.deptName === "string" ? payload.deptName.trim() : "",
    deptDesc: typeof payload.deptDesc === "string" ? payload.deptDesc.trim() : "",
    conditionsTreated: parseListField(payload.conditionsTreated),
    keyProcedures: parseListField(payload.keyProcedures),
    doctorName:
      typeof payload.doctorName === "string" ? payload.doctorName.trim() : "",
    doctorDesc:
      typeof payload.doctorDesc === "string" ? payload.doctorDesc.trim() : "",
  };
}

export async function GET() {
  try {
    const departmentDetails = await listDepartmentDetails();
    return NextResponse.json({ departmentDetails });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to load department details.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const payload = parsePayload(await request.json());

    if (!payload.deptName) {
      return NextResponse.json(
        { error: "deptName is required." },
        { status: 400 },
      );
    }

    const departmentDetail = await createDepartmentDetail(payload);
    return NextResponse.json({ departmentDetail }, { status: 201 });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to create department detail.";
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

    if (!payload.deptName) {
      return NextResponse.json(
        { error: "deptName is required." },
        { status: 400 },
      );
    }

    const departmentDetail = await updateDepartmentDetail(id, payload);
    return NextResponse.json({ departmentDetail });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to update department detail.";
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

    await deleteDepartmentDetail(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to delete department detail.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
