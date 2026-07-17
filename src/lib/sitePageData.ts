import "server-only";

import { ID, Query } from "appwrite";
import { getServerDatabases } from "@/lib/appwriteServer";

const appwriteDatabaseId = process.env.APPWRITE_DATABASE_ID || "";
const appwriteServicesCollectionId =
  process.env.APPWRITE_SERVICES_COLLECTION_ID || "services_page";
const appwritePatientCollectionId =
  process.env.APPWRITE_PATIENT_COLLECTION_ID || "patient_page";

export interface ServicePageRecord {
  id: string;
  name: string;
  points: string[];
  createdAt: string;
  updatedAt: string;
}

export interface PatientRoomCategoryRecord {
  id: string;
  roomType: string;
  amenities: string;
  occupancy: string;
  insuranceDetails: string[];
  createdAt: string;
  updatedAt: string;
}

interface AppwriteServiceDocument {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  name?: string;
  points?: string[] | string;
}

interface AppwritePatientDocument {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  roomType?: string;
  amenities?: string;
  occupancy?: string;
  insuranceDetails?: string[] | string;
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

function mapServiceDocument(document: AppwriteServiceDocument): ServicePageRecord {
  return {
    id: document.$id,
    name: toStringValue(document.name),
    points: toStringArray(document.points),
    createdAt: document.$createdAt,
    updatedAt: document.$updatedAt,
  };
}

function mapPatientDocument(
  document: AppwritePatientDocument,
): PatientRoomCategoryRecord {
  return {
    id: document.$id,
    roomType: toStringValue(document.roomType),
    amenities: toStringValue(document.amenities),
    occupancy: toStringValue(document.occupancy),
    insuranceDetails: toStringArray(document.insuranceDetails),
    createdAt: document.$createdAt,
    updatedAt: document.$updatedAt,
  };
}

export async function listServicesPageItems() {
  assertConfig();
  const databases = getServerDatabases();

  const response = await databases.listDocuments(
    appwriteDatabaseId,
    appwriteServicesCollectionId,
    [Query.orderAsc("$createdAt"), Query.limit(100)],
  );

  return response.documents.map((document) =>
    mapServiceDocument(document as unknown as AppwriteServiceDocument),
  );
}

export async function createServicePageItem(
  input: Omit<ServicePageRecord, "id" | "createdAt" | "updatedAt">,
) {
  assertConfig();
  const databases = getServerDatabases();

  const response = await databases.createDocument(
    appwriteDatabaseId,
    appwriteServicesCollectionId,
    ID.unique(),
    {
      name: input.name,
      points: input.points,
    },
  );

  return mapServiceDocument(response as unknown as AppwriteServiceDocument);
}

export async function updateServicePageItem(
  id: string,
  input: Omit<ServicePageRecord, "id" | "createdAt" | "updatedAt">,
) {
  assertConfig();
  const databases = getServerDatabases();

  const response = await databases.updateDocument(
    appwriteDatabaseId,
    appwriteServicesCollectionId,
    id,
    {
      name: input.name,
      points: input.points,
    },
  );

  return mapServiceDocument(response as unknown as AppwriteServiceDocument);
}

export async function deleteServicePageItem(id: string) {
  assertConfig();
  const databases = getServerDatabases();

  await databases.deleteDocument(
    appwriteDatabaseId,
    appwriteServicesCollectionId,
    id,
  );
}

export async function listPatientRoomCategories() {
  assertConfig();
  const databases = getServerDatabases();

  const response = await databases.listDocuments(
    appwriteDatabaseId,
    appwritePatientCollectionId,
    [Query.orderAsc("$createdAt"), Query.limit(100)],
  );

  return response.documents.map((document) =>
    mapPatientDocument(document as unknown as AppwritePatientDocument),
  );
}

export async function createPatientRoomCategory(
  input: Omit<PatientRoomCategoryRecord, "id" | "createdAt" | "updatedAt">,
) {
  assertConfig();
  const databases = getServerDatabases();

  const response = await databases.createDocument(
    appwriteDatabaseId,
    appwritePatientCollectionId,
    ID.unique(),
    {
      roomType: input.roomType,
      amenities: input.amenities,
      occupancy: input.occupancy,
      insuranceDetails: input.insuranceDetails,
    },
  );

  return mapPatientDocument(response as unknown as AppwritePatientDocument);
}

export async function updatePatientRoomCategory(
  id: string,
  input: Omit<PatientRoomCategoryRecord, "id" | "createdAt" | "updatedAt">,
) {
  assertConfig();
  const databases = getServerDatabases();

  const response = await databases.updateDocument(
    appwriteDatabaseId,
    appwritePatientCollectionId,
    id,
    {
      roomType: input.roomType,
      amenities: input.amenities,
      occupancy: input.occupancy,
      insuranceDetails: input.insuranceDetails,
    },
  );

  return mapPatientDocument(response as unknown as AppwritePatientDocument);
}

export async function deletePatientRoomCategory(id: string) {
  assertConfig();
  const databases = getServerDatabases();

  await databases.deleteDocument(
    appwriteDatabaseId,
    appwritePatientCollectionId,
    id,
  );
}

export async function getPublicServicesPageItems() {
  try {
    const services = await listServicesPageItems();
    if (services.length > 0) {
      return services;
    }
  } catch {
    // fall back to static in component
  }

  return [] as ServicePageRecord[];
}

export async function getPublicPatientRoomCategories() {
  try {
    const rooms = await listPatientRoomCategories();
    if (rooms.length > 0) {
      return rooms;
    }
  } catch {
    // fall back to static in component
  }

  return [] as PatientRoomCategoryRecord[];
}
