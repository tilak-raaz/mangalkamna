import GalleryHero from "@/components/gallery/GalleryHero";
import ImageGallery from "@/components/gallery/ImageGallery";
import VideoGallery from "@/components/gallery/VideoGallery";
import { listGalleryImages } from "@/lib/galleryData";

export const metadata = {
  title: "Gallery & Virtual Tour | Mangalkamna Hospital",
  description:
    "Explore our world-class facilities, state-of-the-art infrastructure, equipment, and milestones.",
};

export default async function GalleryPage() {
  let images: Awaited<ReturnType<typeof listGalleryImages>> = [];

  try {
    images = await listGalleryImages();
  } catch {
    images = [];
  }

  return (
    <>
      <GalleryHero />
      <ImageGallery images={images} />
    </>
  );
}
