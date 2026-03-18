import AppointmentHero from "@/components/appointment/AppointmentHero";
import AppointmentSection from "@/components/AppointmentSection";
import OtherBookingChannels from "@/components/appointment/OtherBookingChannels";
import OpdSchedule from "@/components/appointment/OpdSchedule";

export const metadata = {
  title: "Book Appointment | Mangalkamna Hospital",
  description: "Book your consultation with our medical specialists online.",
};

export default function AppointmentPage() {
  return (
    <>
      <AppointmentHero />
      <AppointmentSection />
      <OtherBookingChannels />
      <OpdSchedule />
    </>
  );
}
