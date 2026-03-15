import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import ServicesSection from "../components/ServicesSection";
import DoctorsSection from "../components/DoctorsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import NewsSection from "../components/NewsSection";
import AppointmentSection from "../components/AppointmentSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <HeroSection />
      <div className="w-full">
        <AboutSection />
        <WhyChooseUsSection />
        <ServicesSection />
        <DoctorsSection />
        <TestimonialsSection />
        <NewsSection />
        <AppointmentSection />
        <Footer />
      </div>
    </div>
  );
}
