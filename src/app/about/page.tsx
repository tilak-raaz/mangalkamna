import type { Metadata } from "next";
import { getPageBySlug } from "@/lib/pageData";
import PageCmsContent from "@/components/PageCmsContent";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import Milestones from "@/components/about/Milestones";
import Accreditations from "@/components/about/Accreditations";
import Leadership from "@/components/about/Leadership";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("about");

  return {
    title: page?.metaTitle || page?.title || "About Us | Mangalkamna Hospital",
    description:
      page?.metaDescription ||
      page?.excerpt ||
      "Learn about Mangalkamna Hospital's legacy, mission, and commitment to excellence in medical care.",
  };
}

export default async function AboutPage() {
  const page = await getPageBySlug("about");
  const editablePage = page?.isPublished ? page : null;

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <AboutHero />
      <PageCmsContent page={editablePage} title="About Page Content" />
      <OurStory />
      <MissionVision />
      {/* <Milestones /> */}
      <Accreditations />
      <Leadership />
    </div>
  );
}
