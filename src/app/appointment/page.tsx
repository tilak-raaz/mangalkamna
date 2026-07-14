import type { Metadata } from "next";
import { getPageBySlug } from "@/lib/pageData";
import PageCmsContent from "@/components/PageCmsContent";
import AppointmentHero from "@/components/appointment/AppointmentHero";
import AppointmentSection from "@/components/AppointmentSection";
import OtherBookingChannels from "@/components/appointment/OtherBookingChannels";
import OpdSchedule from "@/components/appointment/OpdSchedule";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("appointment");

  return {
    title:
      page?.metaTitle ||
      page?.title ||
      "Book Appointment | Mangalkamna Hospital",
    description:
      page?.metaDescription ||
      page?.excerpt ||
      "Book your consultation with our medical specialists online.",
  };
}

export default async function AppointmentPage() {
  const page = await getPageBySlug("appointment");
  const editablePage = page?.isPublished ? page : null;

  return (
    <>
      <AppointmentHero />
      <PageCmsContent page={editablePage} title="Appointment Page Content" />
      <AppointmentSection />
      <OtherBookingChannels />
      <OpdSchedule />
    </>
  );
}
