import AdmissionsProcess from "@/components/patient-information/AdmissionsProcess";
import RoomCategories from "@/components/patient-information/RoomCategories";
import PatientInfoHero from "@/components/patient-information/PatientInfoHero";
import InsuranceAndBilling from "@/components/patient-information/InsuranceAndBilling";
import PatientRights from "@/components/patient-information/PatientRights";
import VisitorGuidelines from "@/components/patient-information/VisitorGuidelines";

export const metadata = {
  title: "Patient Information | Mangalkamna Hospital",
  description:
    "Information regarding admissions, discharge, insurance, rights, and visiting guidelines at Mangalkamna Hospital.",
};

export default function PatientInformationPage() {
  return (
    <>
      <PatientInfoHero />
      <AdmissionsProcess />
      <RoomCategories />
      <InsuranceAndBilling />
      <PatientRights />
      <VisitorGuidelines />
    </>
  );
}
