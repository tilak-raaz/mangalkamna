import "server-only";

import { Query } from "appwrite";
import { getServerDatabases } from "@/lib/appwriteServer";

const DATABASE_ID =
  process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "6a3d9eb6002096f75ef1";
const COLLECTION_ID = "seo_details";

export interface SeoSettings {
  id: string | null;
  pageTitle: string;
  metaDescription: string;
  metaKeywords: string;
}

export async function getSeoSettings(): Promise<SeoSettings> {
  const databases = getServerDatabases();
  const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
    Query.limit(1),
  ]);

  const document = response.documents[0] as
    | {
        $id: string;
        pageTitle?: string;
        metaDescription?: string;
        metaKeywords?: string;
      }
    | undefined;

  if (!document) {
    return {
      id: null,
      pageTitle: "Mangalkamna Hospital",
      metaDescription:
        "Leading healthcare provider offering comprehensive medical services.",
      metaKeywords: "hospital, healthcare, medical services",
    };
  }

  return {
    id: document.$id,
    pageTitle: document.pageTitle || "Mangalkamna Hospital",
    metaDescription:
      document.metaDescription ||
      "Leading healthcare provider offering comprehensive medical services.",
    metaKeywords:
      document.metaKeywords || "hospital, healthcare, medical services",
  };
}
