import type { Metadata } from "next";
import { getPageBySlug } from "@/lib/pageData";
import PageCmsContent from "@/components/PageCmsContent";
import GalleryHero from "@/components/gallery/GalleryHero";
import ImageGallery from "@/components/gallery/ImageGallery";
import VideoGallery from "@/components/gallery/VideoGallery";
import { listGalleryImages } from "@/lib/galleryData";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("gallery");

  return {
    title:
      page?.metaTitle ||
      page?.title ||
      "Gallery & Virtual Tour | Mangalkamna Hospital",
    description:
      page?.metaDescription ||
      page?.excerpt ||
      "Explore our world-class facilities, state-of-the-art infrastructure, equipment, and milestones.",
  };
}

export default async function GalleryPage() {
  const page = await getPageBySlug("gallery");
  const editablePage = page?.isPublished ? page : null;
  let images = [];

  try {
    images = await listGalleryImages();
  } catch {
    images = [];
  }

  return (
    <>
      <GalleryHero />
      <PageCmsContent page={editablePage} title="Gallery Page Content" />
      <ImageGallery images={images} />
    </>
  );
}
