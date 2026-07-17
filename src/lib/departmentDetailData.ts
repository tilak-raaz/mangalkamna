import "server-only";

import { ID, Query } from "appwrite";
import { getServerDatabases } from "@/lib/appwriteServer";
import { slugifyDepartmentName } from "@/lib/homeContentData";

const appwriteDatabaseId = process.env.APPWRITE_DATABASE_ID || "";
const appwriteSeparateDeptCollectionId =
  process.env.APPWRITE_SEPARATE_DEPT_COLLECTION_ID || "separate_dept";

export interface DepartmentDetailRecord {
  id: string;
  deptName: string;
  deptDesc: string;
  conditionsTreated: string[];
  keyProcedures: string[];
  doctorName: string;
  doctorDesc: string;
  createdAt: string;
  updatedAt: string;
}

interface AppwriteSeparateDeptDocument {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  DeptName?: string;
  DeptDesc?: string;
  conditionsTreated?: string[] | string;
  keyProcedures?: string[] | string;
  doctorName?: string;
  doctorDesc?: string;
}

function assertConfig() {
  if (!appwriteDatabaseId) {
    throw new Error(
      "Missing APPWRITE_DATABASE_ID. Use the database ID from Appwrite console.",
    );
  }
}

function toStringValue(value: unknown) {
  return typeof value === "string" ? value : "";
}

function toStringArray(value: unknown) {
  if (Array.isArray(value)) {
    return value.filter((item): item is string => typeof item === "string");
  }

  if (typeof value === "string" && value.trim()) {
    return value
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}

function mapDepartmentDetailDocument(
  document: AppwriteSeparateDeptDocument,
): DepartmentDetailRecord {
  return {
    id: document.$id,
    deptName: toStringValue(document.DeptName),
    deptDesc: toStringValue(document.DeptDesc),
    conditionsTreated: toStringArray(document.conditionsTreated),
    keyProcedures: toStringArray(document.keyProcedures),
    doctorName: toStringValue(document.doctorName),
    doctorDesc: toStringValue(document.doctorDesc),
    createdAt: document.$createdAt,
    updatedAt: document.$updatedAt,
  };
}

export async function listDepartmentDetails() {
  assertConfig();
  const databases = getServerDatabases();

  const response = await databases.listDocuments(
    appwriteDatabaseId,
    appwriteSeparateDeptCollectionId,
    [Query.orderAsc("$createdAt"), Query.limit(100)],
  );

  return response.documents.map((document) =>
    mapDepartmentDetailDocument(
      document as unknown as AppwriteSeparateDeptDocument,
    ),
  );
}

export async function createDepartmentDetail(
  input: Omit<DepartmentDetailRecord, "id" | "createdAt" | "updatedAt">,
) {
  assertConfig();
  const databases = getServerDatabases();

  const response = await databases.createDocument(
    appwriteDatabaseId,
    appwriteSeparateDeptCollectionId,
    ID.unique(),
    {
      DeptName: input.deptName,
      DeptDesc: input.deptDesc,
      conditionsTreated: input.conditionsTreated,
      keyProcedures: input.keyProcedures,
      doctorName: input.doctorName,
      doctorDesc: input.doctorDesc,
    },
  );

  return mapDepartmentDetailDocument(
    response as unknown as AppwriteSeparateDeptDocument,
  );
}

export async function updateDepartmentDetail(
  id: string,
  input: Omit<DepartmentDetailRecord, "id" | "createdAt" | "updatedAt">,
) {
  assertConfig();
  const databases = getServerDatabases();

  const response = await databases.updateDocument(
    appwriteDatabaseId,
    appwriteSeparateDeptCollectionId,
    id,
    {
      DeptName: input.deptName,
      DeptDesc: input.deptDesc,
      conditionsTreated: input.conditionsTreated,
      keyProcedures: input.keyProcedures,
      doctorName: input.doctorName,
      doctorDesc: input.doctorDesc,
    },
  );

  return mapDepartmentDetailDocument(
    response as unknown as AppwriteSeparateDeptDocument,
  );
}

export async function deleteDepartmentDetail(id: string) {
  assertConfig();
  const databases = getServerDatabases();

  await databases.deleteDocument(
    appwriteDatabaseId,
    appwriteSeparateDeptCollectionId,
    id,
  );
}

export async function getPublicDepartmentDetailBySlug(slug: string) {
  try {
    const details = await listDepartmentDetails();
    return (
      details.find((detail) => slugifyDepartmentName(detail.deptName) === slug) ||
      null
    );
  } catch {
    return null;
  }
}
