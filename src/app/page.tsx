import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import ServicesSection from "../components/ServicesSection";
import DoctorsSection from "../components/DoctorsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import NewsSection from "../components/NewsSection";
import AppointmentSection from "../components/AppointmentSection";
import type { Metadata } from "next";
import { getPageBySlug } from "@/lib/pageData";
import { getSeoSettings } from "@/lib/seoData";
import PageCmsContent from "@/components/PageCmsContent";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("home");

  if (page?.isPublished) {
    return {
      title: page.metaTitle || page.title,
      description: page.metaDescription || page.excerpt,
      keywords: page.metaKeywords,
    } as Metadata;
  }

  const seoSettings = await getSeoSettings();

  return {
    title: seoSettings.pageTitle,
    description: seoSettings.metaDescription,
    keywords: seoSettings.metaKeywords,
  };
}

export default async function Home() {
  const page = await getPageBySlug("home");
  const editablePage = page?.isPublished ? page : null;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <HeroSection />
      <PageCmsContent page={editablePage} title="Home Page Content" />
      <div className="w-full">
        <AboutSection />
        <WhyChooseUsSection />
        <ServicesSection />
        <DoctorsSection />
        <TestimonialsSection />
        <NewsSection />
        <AppointmentSection />
      </div>
    </div>
  );
}
