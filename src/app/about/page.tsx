import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import Accreditations from "@/components/about/Accreditations";
import Leadership from "@/components/about/Leadership";
import { getPublicAboutUsPageContent } from "@/lib/aboutUsData";

export const metadata = {
  title: "About Us | Mangalkamna Hospital",
  description: "Learn about Mangalkamna Hospital's legacy, mission, and commitment to excellence in medical care.",
};

export default async function AboutPage() {
  const aboutUsData = await getPublicAboutUsPageContent();

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <AboutHero />
      <OurStory
        ourStoryText={aboutUsData.content.OurStoryText}
        image={aboutUsData.content.image}
      />
      <MissionVision />
      {/* <Milestones /> */}
      <Accreditations />
      <Leadership leaders={aboutUsData.leaders} />
    </div>
  );
}
