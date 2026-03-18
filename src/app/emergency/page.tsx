import EmergencyHero from "@/components/emergency/EmergencyHero";
import EmergencyServices from "@/components/emergency/EmergencyServices";
import EmergencyInfrastructure from "@/components/emergency/EmergencyInfrastructure";
import AmbulanceServices from "@/components/emergency/AmbulanceServices";

export const metadata = {
  title: "Emergency & Urgent Care | Mangalkamna Hospital",
  description:
    "24/7 emergency services, trauma, ambulance, and protocols at Mangalkamna Hospital.",
};

export default function EmergencyPage() {
  return (
    <>
      <EmergencyHero />
      <EmergencyServices />
      <EmergencyInfrastructure />
      <AmbulanceServices />
    </>
  );
}
