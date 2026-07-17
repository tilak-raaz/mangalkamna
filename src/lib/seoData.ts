import "server-only";

import { ID, Query } from "appwrite";
import { getServerDatabases } from "@/lib/appwriteServer";

const appwriteDatabaseId = process.env.APPWRITE_DATABASE_ID || "";
const appwriteSeoDetailsCollectionId =
  process.env.APPWRITE_SEO_DETAILS_COLLECTION_ID || "seo_details";

export interface SeoDetailRecord {
  id: string;
  pageTitle: string;
  metaDescription: string;
  metaKeywords: string;
  seoScore: number;
  lastCrawled: string;
  createdAt: string;
  updatedAt: string;
}

interface AppwriteSeoDetailDocument {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  pageTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  seoScore?: number;
  lastCrawled?: string;
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

function mapSeoDetailDocument(
  document: AppwriteSeoDetailDocument,
): SeoDetailRecord {
  return {
    id: document.$id,
    pageTitle: toStringValue(document.pageTitle),
    metaDescription: toStringValue(document.metaDescription),
    metaKeywords: toStringValue(document.metaKeywords),
    seoScore: typeof document.seoScore === "number" ? document.seoScore : 0,
    lastCrawled: toStringValue(document.lastCrawled),
    createdAt: document.$createdAt,
    updatedAt: document.$updatedAt,
  };
}

export async function listSeoDetails() {
  assertConfig();
  const databases = getServerDatabases();

  const response = await databases.listDocuments(
    appwriteDatabaseId,
    appwriteSeoDetailsCollectionId,
    [Query.orderAsc("pageTitle"), Query.limit(200)],
  );

  return response.documents.map((document) =>
    mapSeoDetailDocument(document as unknown as AppwriteSeoDetailDocument),
  );
}

export async function createSeoDetail(
  input: Omit<
    SeoDetailRecord,
    "id" | "createdAt" | "updatedAt" | "lastCrawled"
  >,
) {
  assertConfig();
  const databases = getServerDatabases();

  const response = await databases.createDocument(
    appwriteDatabaseId,
    appwriteSeoDetailsCollectionId,
    ID.unique(),
    {
      pageTitle: input.pageTitle,
      metaDescription: input.metaDescription,
      metaKeywords: input.metaKeywords,
      seoScore: input.seoScore,
      lastCrawled: new Date().toISOString(),
    },
  );

  return mapSeoDetailDocument(response as unknown as AppwriteSeoDetailDocument);
}

export async function updateSeoDetail(
  id: string,
  input: Omit<
    SeoDetailRecord,
    "id" | "createdAt" | "updatedAt" | "lastCrawled"
  >,
) {
  assertConfig();
  const databases = getServerDatabases();

  const response = await databases.updateDocument(
    appwriteDatabaseId,
    appwriteSeoDetailsCollectionId,
    id,
    {
      pageTitle: input.pageTitle,
      metaDescription: input.metaDescription,
      metaKeywords: input.metaKeywords,
      seoScore: input.seoScore,
      lastCrawled: new Date().toISOString(),
    },
  );

  return mapSeoDetailDocument(response as unknown as AppwriteSeoDetailDocument);
}

export async function deleteSeoDetail(id: string) {
  assertConfig();
  const databases = getServerDatabases();

  await databases.deleteDocument(
    appwriteDatabaseId,
    appwriteSeoDetailsCollectionId,
    id,
  );
}

export async function getPublicSeoDetailByPageTitle(pageTitle: string) {
  try {
    const databases = getServerDatabases();
    assertConfig();

    const response = await databases.listDocuments(
      appwriteDatabaseId,
      appwriteSeoDetailsCollectionId,
      [Query.equal("pageTitle", pageTitle), Query.limit(1)],
    );

    const first = response.documents[0] as unknown as
      | AppwriteSeoDetailDocument
      | undefined;

    return first ? mapSeoDetailDocument(first) : null;
  } catch {
    return null;
  }
}
