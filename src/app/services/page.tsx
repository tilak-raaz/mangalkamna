import ServicesHero from "@/components/services/ServicesHero";
import MedicalServices from "@/components/services/MedicalServices";
import SupportServices from "@/components/services/SupportServices";

export const metadata = {
  title: "Services & Treatments | Mangalkamna Hospital",
  description:
    "Comprehensive healthcare services for every need. Offering complete spectrum of medical, surgical, diagnostic, and rehabilitative services.",
};

export default function ServicesTreatmentsPage() {
  return (
    <>
      <ServicesHero />
      <MedicalServices />
      <SupportServices />
    </>
  );
}
