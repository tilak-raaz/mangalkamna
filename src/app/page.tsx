import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import ServicesSection from "../components/ServicesSection";
import DoctorsSection from "../components/DoctorsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import NewsSection from "../components/NewsSection";
import AppointmentSection from "../components/AppointmentSection";
import {
  getPublicHomePageContent,
  listPublicDepartments,
  listPublicTestimonials,
} from "@/lib/homeContentData";

export default async function Home() {
  const [homeContent, testimonials, departments] = await Promise.all([
    getPublicHomePageContent(),
    listPublicTestimonials(),
    listPublicDepartments(),
  ]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <HeroSection
        title={homeContent.title}
        heroImages={homeContent.heroImages}
      />
      <div className="w-full">
        <AboutSection aboutUsText={homeContent.aboutUsText} />
        <WhyChooseUsSection whyChooseUsText={homeContent.whyChooseUsText} />
        <ServicesSection
          departments={departments.map((dept) => ({
            id: dept.slug,
            deptName: dept.name,
            deptDesc: (dept as { intro?: string }).intro ?? (dept as { description?: string }).description ?? "",
          }))}
        />
        <DoctorsSection />
        <TestimonialsSection testimonials={testimonials} />
        <NewsSection />
        <AppointmentSection />
      </div>
    </div>
  );
}
