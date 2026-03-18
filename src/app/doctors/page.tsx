export const metadata = {
  title: "Doctors & Medical Team | Mangalkamna Hospital",
  description:
    "Meet our team of 200+ highly qualified and experienced doctors dedicated to your well-being.",
};

import DoctorsHero from "@/components/doctors/DoctorsHero";
import DoctorsDirectory from "@/components/doctors/DoctorsDirectory";
import AppointmentSection from "@/components/AppointmentSection";

export default function DoctorsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <DoctorsHero />
      <DoctorsDirectory />
      <AppointmentSection />
    </div>
  );
}
