import { NextRequest, NextResponse } from "next/server";
import { getServerDatabases } from "@/lib/appwriteServer";
import { Query } from "appwrite";

const DATABASE_ID =
  process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "6a3d9eb6002096f75ef1";
const COLLECTION_ID = "seo_details";

export async function GET() {
  try {
    const databases = getServerDatabases();

    // Get the SEO settings document (should be only one global settings doc)
    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.limit(1),
    ]);

    if (response.documents.length === 0) {
      // Return default SEO settings if none exist
      return NextResponse.json({
        success: true,
        seoSettings: {
          id: null,
          pageTitle: "Mangalkamna Hospital",
          metaDescription:
            "Leading healthcare provider offering comprehensive medical services.",
          metaKeywords: "hospital, healthcare, medical services",
          updatedAt: null,
        },
      });
    }

    return NextResponse.json({
      success: true,
      seoSettings: {
        id: response.documents[0].$id,
        pageTitle: response.documents[0].pageTitle,
        metaDescription: response.documents[0].metaDescription,
        metaKeywords: response.documents[0].metaKeywords,
        updatedAt: response.documents[0].$updatedAt,
      },
    });
  } catch (error) {
    console.error("Error fetching SEO settings:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch SEO settings" },
      { status: 500 },
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const databases = getServerDatabases();
    const data = await request.json();

    // Get existing document
    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.limit(1),
    ]);

    let documentId = data.id;

    const seoData = {
      pageTitle: data.pageTitle || "Mangalkamna Hospital",
      metaDescription: data.metaDescription || "",
      metaKeywords: data.metaKeywords || "",
    };

    if (response.documents.length === 0) {
      // Create new document
      const newDoc = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        "unique()",
        seoData,
      );
      return NextResponse.json({
        success: true,
        message: "SEO settings created successfully",
        seoSettings: {
          id: newDoc.$id,
          pageTitle: newDoc.pageTitle,
          metaDescription: newDoc.metaDescription,
          metaKeywords: newDoc.metaKeywords,
          updatedAt: newDoc.$updatedAt,
        },
      });
    } else {
      // Update existing document
      documentId = response.documents[0].$id;
      const updatedDoc = await databases.updateDocument(
        DATABASE_ID,
        COLLECTION_ID,
        documentId,
        seoData,
      );
      return NextResponse.json({
        success: true,
        message: "SEO settings updated successfully",
        seoSettings: {
          id: updatedDoc.$id,
          pageTitle: updatedDoc.pageTitle,
          metaDescription: updatedDoc.metaDescription,
          metaKeywords: updatedDoc.metaKeywords,
          updatedAt: updatedDoc.$updatedAt,
        },
      });
    }
  } catch (error) {
    console.error("Error updating SEO settings:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update SEO settings" },
      { status: 500 },
    );
  }
}
