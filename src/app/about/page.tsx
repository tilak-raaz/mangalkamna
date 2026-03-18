import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import Milestones from "@/components/about/Milestones";
import Accreditations from "@/components/about/Accreditations";
import Leadership from "@/components/about/Leadership";

export const metadata = {
  title: "About Us | Mangalkamna Hospital",
  description: "Learn about Mangalkamna Hospital's legacy, mission, and commitment to excellence in medical care.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <AboutHero />
      <OurStory />
      <MissionVision />
      <Milestones />
      <Accreditations />
      <Leadership />
    </div>
  );
}
