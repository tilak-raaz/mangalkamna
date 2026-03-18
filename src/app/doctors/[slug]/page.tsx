import { notFound } from "next/navigation";
import { doctorsData, getDoctorBySlug } from "@/data/doctorsData";
import DoctorProfileHero from "@/components/doctors/DoctorProfileHero";
import DoctorProfileDetails from "@/components/doctors/DoctorProfileDetails";
import DoctorReviews from "@/components/doctors/DoctorReviews";
import AppointmentSection from "@/components/AppointmentSection";

export function generateStaticParams() {
  return doctorsData.map((doc) => ({
    slug: doc.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolvedParams = await params;
  const doctor = getDoctorBySlug(resolvedParams.slug);

  if (!doctor) {
    return {
      title: "Doctor Not Found",
    };
  }

  return {
    title: `${doctor.name} - ${doctor.specialization} | Mangalkamna Hospital`,
    description: `Book an appointment with ${doctor.name}, ${doctor.designation} at Mangalkamna Hospital.`,
  };
}

export default async function DoctorProfilePage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolvedParams = await params;
  const doctor = getDoctorBySlug(resolvedParams.slug);

  if (!doctor) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <DoctorProfileHero doctor={doctor} />
      <DoctorProfileDetails doctor={doctor} />
      <DoctorReviews doctor={doctor} />
      <AppointmentSection />
    </div>
  );
}
