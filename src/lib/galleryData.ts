import "server-only";

import { ID, Query } from "appwrite";
import { getServerDatabases } from "@/lib/appwriteServer";

const appwriteDatabaseId = process.env.APPWRITE_DATABASE_ID || "";
const appwriteGalleryCollectionId =
  process.env.APPWRITE_GALLERY_COLLECTION_ID || "";

interface AppwriteGalleryDocument {
  $id: string;
  $createdAt: string;
  imageURL: string;
}

export interface GalleryImage {
  id: string;
  imageURL: string;
  createdAt: string;
}

function mapGalleryDocument(document: AppwriteGalleryDocument): GalleryImage {
  return {
    id: document.$id,
    imageURL: document.imageURL,
    createdAt: document.$createdAt,
  };
}

function assertGalleryConfig() {
  if (!appwriteDatabaseId) {
    throw new Error(
      "Missing APPWRITE_DATABASE_ID. Use the Database ID from Appwrite console, not the database name.",
    );
  }

  if (!appwriteGalleryCollectionId) {
    throw new Error(
      "Missing APPWRITE_GALLERY_COLLECTION_ID. Use the Table/Collection ID from Appwrite console, not the display name.",
    );
  }
}

export async function listGalleryImages() {
  assertGalleryConfig();
  const databases = getServerDatabases();

  const response = await databases.listDocuments(
    appwriteDatabaseId,
    appwriteGalleryCollectionId,
    [Query.orderDesc("$createdAt"), Query.limit(200)],
  );

  return response.documents.map((document) =>
    mapGalleryDocument(document as unknown as AppwriteGalleryDocument),
  );
}

export async function createGalleryImage(imageURL: string) {
  assertGalleryConfig();
  const databases = getServerDatabases();

  const response = await databases.createDocument(
    appwriteDatabaseId,
    appwriteGalleryCollectionId,
    ID.unique(),
    { imageURL },
  );

  return mapGalleryDocument(response as unknown as AppwriteGalleryDocument);
}

export async function deleteGalleryImage(id: string) {
  assertGalleryConfig();
  const databases = getServerDatabases();

  await databases.deleteDocument(
    appwriteDatabaseId,
    appwriteGalleryCollectionId,
    id,
  );
}
