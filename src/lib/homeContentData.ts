import "server-only";

import { ID, Query } from "appwrite";
import { getServerDatabases } from "@/lib/appwriteServer";
import { departmentsData } from "@/data/departmentsData";

const appwriteDatabaseId = process.env.APPWRITE_DATABASE_ID || "";
const appwriteHomePageCollectionId =
  process.env.APPWRITE_HOME_PAGE_COLLECTION_ID || "home_page";
const appwriteTestimonialsCollectionId =
  process.env.APPWRITE_TESTIMONIALS_COLLECTION_ID || "testimonials_page";
const appwriteDepartmentCollectionId =
  process.env.APPWRITE_DEPARTMENT_COLLECTION_ID || "department";

interface AppwriteHomePageDocument {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  title?: string;
  heroimage?: string | string[];
  aboutUsText?: string;
  whyChooseUsText?: string;
  [key: string]: unknown;
}

interface AppwriteTestimonialDocument {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  name?: string;
  deptConcerned?: string;
  reviewText?: string;
}

interface AppwriteDepartmentDocument {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  deptName?: string;
  deptDesc?: string;
}

export interface HomePageRecord {
  id: string;
  title: string;
  heroImages: string[];
  aboutUsText: string;
  whyChooseUsText: string;
  createdAt: string;
  updatedAt: string;
}

export interface TestimonialRecord {
  id: string;
  name: string;
  deptConcerned: string;
  reviewText: string;
  createdAt: string;
  updatedAt: string;
}

export interface DepartmentRecord {
  id: string;
  deptName: string;
  deptDesc: string;
  createdAt: string;
  updatedAt: string;
}

export interface PublicDepartmentRecord {
  slug: string;
  name: string;
  iconName: string;
  intro: string;
  conditions: string[];
  procedures: string[];
  doctors: Array<{ name: string; role: string; image: string }>;
}

function assertDbConfig() {
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
    return [value];
  }

  return [];
}

export function slugifyDepartmentName(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getDepartmentIconName(name: string) {
  const normalized = name.toLowerCase();

  if (normalized.includes("urology")) {
    return "Activity";
  }

  if (normalized.includes("critical care") || normalized.includes("anesthesia")) {
    return "HeartPulse";
  }

  return "Stethoscope";
}

function mapHomePageDocument(document: AppwriteHomePageDocument): HomePageRecord {
  const heroSource =
    document.heroimage ?? (document["heroimage[]"] as unknown) ?? [];

  return {
    id: document.$id,
    title: toStringValue(document.title),
    heroImages: toStringArray(heroSource),
    aboutUsText: toStringValue(document.aboutUsText),
    whyChooseUsText: toStringValue(document.whyChooseUsText),
    createdAt: document.$createdAt,
    updatedAt: document.$updatedAt,
  };
}

function mapTestimonialDocument(
  document: AppwriteTestimonialDocument,
): TestimonialRecord {
  return {
    id: document.$id,
    name: toStringValue(document.name),
    deptConcerned: toStringValue(document.deptConcerned),
    reviewText: toStringValue(document.reviewText),
    createdAt: document.$createdAt,
    updatedAt: document.$updatedAt,
  };
}

function mapDepartmentDocument(
  document: AppwriteDepartmentDocument,
): DepartmentRecord {
  return {
    id: document.$id,
    deptName: toStringValue(document.deptName),
    deptDesc: toStringValue(document.deptDesc),
    createdAt: document.$createdAt,
    updatedAt: document.$updatedAt,
  };
}

export async function getHomePageContent() {
  assertDbConfig();
  const databases = getServerDatabases();

  const response = await databases.listDocuments(
    appwriteDatabaseId,
    appwriteHomePageCollectionId,
    [Query.orderDesc("$updatedAt"), Query.limit(1)],
  );

  const first = response.documents[0] as unknown as
    | AppwriteHomePageDocument
    | undefined;

  return first ? mapHomePageDocument(first) : null;
}

export async function createHomePageContent(
  input: Omit<HomePageRecord, "id" | "createdAt" | "updatedAt">,
) {
  assertDbConfig();
  const databases = getServerDatabases();

  const response = await databases.createDocument(
    appwriteDatabaseId,
    appwriteHomePageCollectionId,
    ID.unique(),
    {
      title: input.title,
      heroimage: input.heroImages,
      aboutUsText: input.aboutUsText,
      whyChooseUsText: input.whyChooseUsText,
    },
  );

  return mapHomePageDocument(response as unknown as AppwriteHomePageDocument);
}

export async function updateHomePageContent(
  id: string,
  input: Omit<HomePageRecord, "id" | "createdAt" | "updatedAt">,
) {
  assertDbConfig();
  const databases = getServerDatabases();

  const response = await databases.updateDocument(
    appwriteDatabaseId,
    appwriteHomePageCollectionId,
    id,
    {
      title: input.title,
      heroimage: input.heroImages,
      aboutUsText: input.aboutUsText,
      whyChooseUsText: input.whyChooseUsText,
    },
  );

  return mapHomePageDocument(response as unknown as AppwriteHomePageDocument);
}

export async function listTestimonials() {
  assertDbConfig();
  const databases = getServerDatabases();

  const response = await databases.listDocuments(
    appwriteDatabaseId,
    appwriteTestimonialsCollectionId,
    [Query.orderDesc("$updatedAt"), Query.limit(100)],
  );

  return response.documents.map((document) =>
    mapTestimonialDocument(document as unknown as AppwriteTestimonialDocument),
  );
}

export async function createTestimonial(
  input: Omit<TestimonialRecord, "id" | "createdAt" | "updatedAt">,
) {
  assertDbConfig();
  const databases = getServerDatabases();

  const response = await databases.createDocument(
    appwriteDatabaseId,
    appwriteTestimonialsCollectionId,
    ID.unique(),
    {
      name: input.name,
      deptConcerned: input.deptConcerned,
      reviewText: input.reviewText,
    },
  );

  return mapTestimonialDocument(
    response as unknown as AppwriteTestimonialDocument,
  );
}

export async function updateTestimonial(
  id: string,
  input: Omit<TestimonialRecord, "id" | "createdAt" | "updatedAt">,
) {
  assertDbConfig();
  const databases = getServerDatabases();

  const response = await databases.updateDocument(
    appwriteDatabaseId,
    appwriteTestimonialsCollectionId,
    id,
    {
      name: input.name,
      deptConcerned: input.deptConcerned,
      reviewText: input.reviewText,
    },
  );

  return mapTestimonialDocument(
    response as unknown as AppwriteTestimonialDocument,
  );
}

export async function deleteTestimonial(id: string) {
  assertDbConfig();
  const databases = getServerDatabases();

  await databases.deleteDocument(
    appwriteDatabaseId,
    appwriteTestimonialsCollectionId,
    id,
  );
}

export async function listDepartments() {
  assertDbConfig();
  const databases = getServerDatabases();

  const response = await databases.listDocuments(
    appwriteDatabaseId,
    appwriteDepartmentCollectionId,
    [Query.orderAsc("$createdAt"), Query.limit(100)],
  );

  return response.documents.map((document) =>
    mapDepartmentDocument(document as unknown as AppwriteDepartmentDocument),
  );
}

export async function createDepartment(
  input: Omit<DepartmentRecord, "id" | "createdAt" | "updatedAt">,
) {
  assertDbConfig();
  const databases = getServerDatabases();

  const response = await databases.createDocument(
    appwriteDatabaseId,
    appwriteDepartmentCollectionId,
    ID.unique(),
    {
      deptName: input.deptName,
      deptDesc: input.deptDesc,
    },
  );

  return mapDepartmentDocument(response as unknown as AppwriteDepartmentDocument);
}

export async function updateDepartment(
  id: string,
  input: Omit<DepartmentRecord, "id" | "createdAt" | "updatedAt">,
) {
  assertDbConfig();
  const databases = getServerDatabases();

  const response = await databases.updateDocument(
    appwriteDatabaseId,
    appwriteDepartmentCollectionId,
    id,
    {
      deptName: input.deptName,
      deptDesc: input.deptDesc,
    },
  );

  return mapDepartmentDocument(response as unknown as AppwriteDepartmentDocument);
}

export async function deleteDepartment(id: string) {
  assertDbConfig();
  const databases = getServerDatabases();

  await databases.deleteDocument(appwriteDatabaseId, appwriteDepartmentCollectionId, id);
}

export async function getPublicHomePageContent() {
  try {
    const dbContent = await getHomePageContent();

    if (dbContent) {
      return dbContent;
    }
  } catch {
    // Fall through to defaults if DB is unavailable.
  }

  return {
    id: "static-home-page",
    title: "Advanced Medical and Surgical Super-Speciality Hospital",
    heroImages: [
      "https://res.cloudinary.com/du5qoczcn/image/upload/v1773571642/WhatsApp_Image_2026-03-15_at_16.17.01_mft9qc.jpg",
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2828&auto=format&fit=crop",
    ],
    aboutUsText:
      "Welcome to Mangalkamna Hospital — an advanced and new institution with highly experienced super specialists. We combine cutting-edge medical technology with a dedicated team of specialists to provide world-class treatment across all major disciplines. Whether you need routine check-ups, advanced surgical procedures, or critical emergency care, we are here for you — every step of the way.",
    whyChooseUsText:
      "We combine medical excellence with a deeply compassionate approach. Our commitment to cutting-edge technology and patient-first care makes us the leading choice for thousands of families worldwide.",
    createdAt: "",
    updatedAt: "",
  };
}

export async function listPublicTestimonials() {
  try {
    const dbTestimonials = await listTestimonials();

    if (dbTestimonials.length > 0) {
      return dbTestimonials;
    }
  } catch {
    // Fall through to defaults if DB is unavailable.
  }

  return [
    {
      id: "static-1",
      name: "Shivam Patel",
      deptConcerned: "Pediatric Care",
      reviewText:
        "As a parent of a child who recently underwent surgery at this hospital, I cannot express enough gratitude for the exceptional care we received.",
      createdAt: "",
      updatedAt: "",
    },
    {
      id: "static-2",
      name: "Sonia Verma",
      deptConcerned: "Specialist Consultation",
      reviewText:
        "The doctor was highly skilled and took time to listen to my concerns. The staff was courteous and efficient throughout.",
      createdAt: "",
      updatedAt: "",
    },
    {
      id: "static-3",
      name: "Sumit Sharma",
      deptConcerned: "Urology",
      reviewText:
        "Experienced doctors and top-notch medical infrastructure. I had a very positive treatment experience.",
      createdAt: "",
      updatedAt: "",
    },
  ];
}

export async function listPublicDepartments(): Promise<PublicDepartmentRecord[]> {
  try {
    const dbDepartments = await listDepartments();

    if (dbDepartments.length > 0) {
      return dbDepartments.map((department) => ({
        slug: slugifyDepartmentName(department.deptName),
        name: department.deptName,
        iconName: getDepartmentIconName(department.deptName),
        intro: department.deptDesc,
        conditions: [],
        procedures: [],
        doctors: [],
      }));
    }
  } catch {
    // Fall through to defaults if DB is unavailable.
  }

  return departmentsData.map((department, index) => ({
    slug: department.slug,
    name: department.name,
    iconName: department.iconName,
    intro: department.intro,
    conditions: department.conditions,
    procedures: department.procedures,
    doctors: department.doctors,
  }));
}

export async function getPublicDepartmentBySlug(slug: string) {
  const publicDepartments = await listPublicDepartments();
  return publicDepartments.find((department) => department.slug === slug);
}
