import GalleryHero from "@/components/gallery/GalleryHero";
import ImageGallery from "@/components/gallery/ImageGallery";
import VideoGallery from "@/components/gallery/VideoGallery";

export const metadata = {
  title: "Gallery & Virtual Tour | Mangalkamna Hospital",
  description:
    "Explore our world-class facilities, state-of-the-art infrastructure, equipment, and milestones.",
};

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <ImageGallery />
 
    </>
  );
}
