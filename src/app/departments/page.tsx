import DepartmentsHero from "@/components/departments/DepartmentsHero";
import DepartmentListings from "@/components/departments/DepartmentListings";

export const metadata = {
  title: "Departments & Specialties | Mangalkamna Hospital",
  description:
    "Explore our 30+ medical departments, equipped with the latest technology and led by experienced specialists.",
};

export default function DepartmentsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <DepartmentsHero />
      <DepartmentListings />
    </div>
  );
}
