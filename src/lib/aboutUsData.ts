import "server-only";

import { ID, Query } from "appwrite";
import { getServerDatabases } from "@/lib/appwriteServer";

const appwriteDatabaseId = process.env.APPWRITE_DATABASE_ID || "";
const appwriteAboutUsCollectionId =
  process.env.APPWRITE_ABOUT_US_COLLECTION_ID || "about_us_page";

interface AppwriteAboutUsDocument {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  OurStoryText?: string;
  image?: string;
  leaderName?: string;
  leaderDept?: string;
  leaderDesc?: string;
  leaderImg?: string;
}

export interface AboutUsLeaderRecord {
  id: string;
  leaderName: string;
  leaderDept: string;
  leaderDesc: string;
  leaderImg: string;
  createdAt: string;
  updatedAt: string;
}

export interface AboutUsContentRecord {
  contentId: string;
  OurStoryText: string;
  image: string;
}

function assertAboutUsConfig() {
  if (!appwriteDatabaseId) {
    throw new Error(
      "Missing APPWRITE_DATABASE_ID. Use the database ID from Appwrite console.",
    );
  }
}

function toStringValue(value: unknown) {
  return typeof value === "string" ? value : "";
}

function mapLeaderDocument(
  document: AppwriteAboutUsDocument,
): AboutUsLeaderRecord {
  return {
    id: document.$id,
    leaderName: toStringValue(document.leaderName),
    leaderDept: toStringValue(document.leaderDept),
    leaderDesc: toStringValue(document.leaderDesc),
    leaderImg: toStringValue(document.leaderImg),
    createdAt: document.$createdAt,
    updatedAt: document.$updatedAt,
  };
}

export async function listAboutUsDocuments() {
  assertAboutUsConfig();
  const databases = getServerDatabases();

  const response = await databases.listDocuments(
    appwriteDatabaseId,
    appwriteAboutUsCollectionId,
    [Query.orderDesc("$updatedAt"), Query.limit(200)],
  );

  return response.documents as unknown as AppwriteAboutUsDocument[];
}

export async function getAboutUsPageContent() {
  const documents = await listAboutUsDocuments();

  const contentDocument = documents.find(
    (document) =>
      toStringValue(document.OurStoryText) || toStringValue(document.image),
  );

  const leaders = documents
    .filter((document) => toStringValue(document.leaderName).trim().length > 0)
    .map(mapLeaderDocument)
    .sort((a, b) =>
      new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    );

  return {
    content: {
      contentId: contentDocument?.$id || "",
      OurStoryText: toStringValue(contentDocument?.OurStoryText),
      image: toStringValue(contentDocument?.image),
    },
    leaders,
  };
}

export async function createAboutUsContent(
  input: Omit<AboutUsContentRecord, "contentId">,
) {
  assertAboutUsConfig();
  const databases = getServerDatabases();

  const response = await databases.createDocument(
    appwriteDatabaseId,
    appwriteAboutUsCollectionId,
    ID.unique(),
    {
      OurStoryText: input.OurStoryText,
      image: input.image,
      leaderName: "",
      leaderDept: "",
      leaderDesc: "",
      leaderImg: "",
    },
  );

  const mapped = response as unknown as AppwriteAboutUsDocument;

  return {
    contentId: mapped.$id,
    OurStoryText: toStringValue(mapped.OurStoryText),
    image: toStringValue(mapped.image),
  };
}

export async function updateAboutUsContent(
  contentId: string,
  input: Omit<AboutUsContentRecord, "contentId">,
) {
  assertAboutUsConfig();
  const databases = getServerDatabases();

  const response = await databases.updateDocument(
    appwriteDatabaseId,
    appwriteAboutUsCollectionId,
    contentId,
    {
      OurStoryText: input.OurStoryText,
      image: input.image,
    },
  );

  const mapped = response as unknown as AppwriteAboutUsDocument;

  return {
    contentId: mapped.$id,
    OurStoryText: toStringValue(mapped.OurStoryText),
    image: toStringValue(mapped.image),
  };
}

export async function createAboutUsLeader(
  input: Omit<AboutUsLeaderRecord, "id" | "createdAt" | "updatedAt">,
) {
  assertAboutUsConfig();
  const databases = getServerDatabases();

  const response = await databases.createDocument(
    appwriteDatabaseId,
    appwriteAboutUsCollectionId,
    ID.unique(),
    {
      leaderName: input.leaderName,
      leaderDept: input.leaderDept,
      leaderDesc: input.leaderDesc,
      leaderImg: input.leaderImg,
      OurStoryText: "",
      image: "",
    },
  );

  return mapLeaderDocument(response as unknown as AppwriteAboutUsDocument);
}

export async function updateAboutUsLeader(
  id: string,
  input: Omit<AboutUsLeaderRecord, "id" | "createdAt" | "updatedAt">,
) {
  assertAboutUsConfig();
  const databases = getServerDatabases();

  const response = await databases.updateDocument(
    appwriteDatabaseId,
    appwriteAboutUsCollectionId,
    id,
    {
      leaderName: input.leaderName,
      leaderDept: input.leaderDept,
      leaderDesc: input.leaderDesc,
      leaderImg: input.leaderImg,
    },
  );

  return mapLeaderDocument(response as unknown as AppwriteAboutUsDocument);
}

export async function deleteAboutUsLeader(id: string) {
  assertAboutUsConfig();
  const databases = getServerDatabases();

  await databases.deleteDocument(appwriteDatabaseId, appwriteAboutUsCollectionId, id);
}

export async function getPublicAboutUsPageContent() {
  try {
    const aboutUs = await getAboutUsPageContent();

    if (aboutUs.content.OurStoryText || aboutUs.content.image || aboutUs.leaders.length) {
      return aboutUs;
    }
  } catch {
    // Fall back to static content when Appwrite is unavailable.
  }

  return {
    content: {
      contentId: "static-about-content",
      OurStoryText:
        "Founded in 2026, Mangalkamna Hospital began as a modest clinic with a singular vision: to bring compassionate, accessible, and affordable healthcare to our community. Over the decades, we have grown into a multi-specialty hospital - a centre of excellence housing state-of-the-art infrastructure, renowned specialists, and a patient-first philosophy that touches every corner of our work.\n\nToday, we proudly serve thousands of patients each year, from routine wellness check-ups to complex surgeries. Our journey is defined not by the buildings we have built, but by the lives we have transformed.",
      image:
        "https://res.cloudinary.com/du5qoczcn/image/upload/v1776351564/0D5A8773_fwziak.jpg",
    },
    leaders: [
      {
        id: "static-leader-1",
        leaderName: "Dr. Shekhar Vajpeyi",
        leaderDept: "Senior Consultant - Urology, Andrology & Uro-Oncology",
        leaderDesc:
          "M.S., M.Ch (Urology) | Expert in laser prostate surgery, stone surgery, minimally invasive uro-oncology, endourology and reconstructive urology with extensive surgical experience.",
        leaderImg:
          "https://res.cloudinary.com/du5qoczcn/image/upload/a_-90/ar_1:1,c_auto/0D5A8851_a6tvgn.jpg",
        createdAt: "",
        updatedAt: "",
      },
      {
        id: "static-leader-2",
        leaderName: "Dr. Vinayak Vajpeyi",
        leaderDept: "Consultant - Urology & Minimally Invasive Surgery",
        leaderDesc:
          "M.S., M.Ch (Urology) | Specializing in advanced endourology, laparoscopic procedures and modern prostate treatments.",
        leaderImg:
          "https://res.cloudinary.com/du5qoczcn/image/upload/a_-90/ar_1:1,c_auto/0D5A8848_wp5brx.jpg",
        createdAt: "",
        updatedAt: "",
      },
    ],
  };
}
