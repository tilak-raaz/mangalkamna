import "server-only";

import { ID, Query } from "appwrite";
import { getServerDatabases } from "@/lib/appwriteServer";

const appwriteDatabaseId = process.env.APPWRITE_DATABASE_ID || "";
const appwritePagesCollectionId = process.env.APPWRITE_PAGE_COLLECTION_ID || "";

interface AppwritePageDocument {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImageUrl: string;
  metaTitle: string;
  metaDescription: string;
  isPublished: boolean;
}

export interface PageRecord {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImageUrl: string;
  metaTitle: string;
  metaDescription: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PageInput {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImageUrl: string;
  metaTitle: string;
  metaDescription: string;
  isPublished: boolean;
}

function mapPageDocument(document: AppwritePageDocument): PageRecord {
  return {
    id: document.$id,
    title: document.title,
    slug: document.slug,
    excerpt: document.excerpt,
    content: document.content,
    coverImageUrl: document.coverImageUrl,
    metaTitle: document.metaTitle,
    metaDescription: document.metaDescription,
    isPublished: document.isPublished,
    createdAt: document.$createdAt,
    updatedAt: document.$updatedAt,
  };
}

function assertPageConfig() {
  if (!appwriteDatabaseId) {
    throw new Error(
      "Missing APPWRITE_DATABASE_ID. Use the database ID from Appwrite console, not the database name.",
    );
  }

  if (!appwritePagesCollectionId) {
    throw new Error(
      "Missing APPWRITE_PAGE_COLLECTION_ID. Set it to the pages table/collection ID.",
    );
  }
}

export function normalizePageSlug(slug: string) {
  return slug
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function listPages() {
  assertPageConfig();
  const databases = getServerDatabases();

  const response = await databases.listDocuments(
    appwriteDatabaseId,
    appwritePagesCollectionId,
    [Query.orderDesc("$updatedAt"), Query.limit(200)],
  );

  return response.documents.map((document) =>
    mapPageDocument(document as unknown as AppwritePageDocument),
  );
}

export async function listPublishedPages() {
  assertPageConfig();
  const databases = getServerDatabases();

  const response = await databases.listDocuments(
    appwriteDatabaseId,
    appwritePagesCollectionId,
    [Query.equal("isPublished", true), Query.orderDesc("$updatedAt")],
  );

  return response.documents.map((document) =>
    mapPageDocument(document as unknown as AppwritePageDocument),
  );
}

export async function getPageBySlug(slug: string) {
  assertPageConfig();
  const databases = getServerDatabases();

  const response = await databases.listDocuments(
    appwriteDatabaseId,
    appwritePagesCollectionId,
    [Query.equal("slug", slug), Query.limit(1)],
  );

  const document = response.documents[0] as unknown as
    | AppwritePageDocument
    | undefined;
  return document ? mapPageDocument(document) : null;
}

export async function createPage(input: PageInput) {
  assertPageConfig();
  const databases = getServerDatabases();

  const response = await databases.createDocument(
    appwriteDatabaseId,
    appwritePagesCollectionId,
    ID.unique(),
    input,
  );

  return mapPageDocument(response as unknown as AppwritePageDocument);
}

export async function updatePage(id: string, input: PageInput) {
  assertPageConfig();
  const databases = getServerDatabases();

  const response = await databases.updateDocument(
    appwriteDatabaseId,
    appwritePagesCollectionId,
    id,
    input,
  );

  return mapPageDocument(response as unknown as AppwritePageDocument);
}

export async function deletePage(id: string) {
  assertPageConfig();
  const databases = getServerDatabases();

  await databases.deleteDocument(
    appwriteDatabaseId,
    appwritePagesCollectionId,
    id,
  );
}
