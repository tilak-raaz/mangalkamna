import type { Metadata } from "next";
import { getPageBySlug } from "@/lib/pageData";
import PageCmsContent from "@/components/PageCmsContent";
import ServicesHero from "@/components/services/ServicesHero";
import MedicalServices from "@/components/services/MedicalServices";
import SupportServices from "@/components/services/SupportServices";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("services");

  return {
    title:
      page?.metaTitle ||
      page?.title ||
      "Services & Treatments | Mangalkamna Hospital",
    description:
      page?.metaDescription ||
      page?.excerpt ||
      "Comprehensive healthcare services for every need. Offering complete spectrum of medical, surgical, diagnostic, and rehabilitative services.",
  };
}

export default async function ServicesTreatmentsPage() {
  const page = await getPageBySlug("services");
  const editablePage = page?.isPublished ? page : null;

  return (
    <>
      <ServicesHero />
      <PageCmsContent page={editablePage} title="Services Page Content" />
      <MedicalServices />
      <SupportServices />
    </>
  );
}
