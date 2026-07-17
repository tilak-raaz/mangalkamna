import { notFound } from "next/navigation";
import { getDepartmentBySlug, departmentsData } from "@/data/departmentsData";
import DepartmentDetailHero from "@/components/departments/DepartmentDetailHero";
import DepartmentServices from "@/components/departments/DepartmentServices";
import DepartmentDoctors from "@/components/departments/DepartmentDoctors";
import AppointmentSection from "@/components/AppointmentSection";
import { getPublicDepartmentBySlug } from "@/lib/homeContentData";
import { getPublicDepartmentDetailBySlug } from "@/lib/departmentDetailData";

export async function generateStaticParams() {
  return departmentsData.map((dept) => ({
    slug: dept.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  // Handle async params for Next 15+ or sync for older versions
  const resolvedParams = await params;
  const department = getDepartmentBySlug(resolvedParams.slug) || (await getPublicDepartmentBySlug(resolvedParams.slug));

  if (!department) {
    return {
      title: "Department Not Found",
    };
  }

  return {
    title: `${department.name} | Mangalkamna Hospital`,
    description: department.intro,
  };
}

export default async function DepartmentPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  // Handle async params for Next 15+ correctly
  const resolvedParams = await params;
  const department = getDepartmentBySlug(resolvedParams.slug) || (await getPublicDepartmentBySlug(resolvedParams.slug));

  if (!department) {
    notFound();
  }

  const detail = await getPublicDepartmentDetailBySlug(resolvedParams.slug);

  const conditions = detail && detail.conditionsTreated.length > 0
    ? detail.conditionsTreated
    : department.conditions;
  const procedures = detail && detail.keyProcedures.length > 0
    ? detail.keyProcedures
    : department.procedures;
  const doctors = detail && detail.doctorName
    ? [{ name: detail.doctorName, role: detail.doctorDesc, image: "" }]
    : department.doctors;

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <DepartmentDetailHero
        name={department.name}
        iconName={department.iconName}
        intro={detail?.deptDesc || department.intro}
      />
      <DepartmentServices
        conditions={conditions}
        procedures={procedures}
      />
      <DepartmentDoctors
        doctors={doctors}
        departmentName={department.name}
      />
      <AppointmentSection />
    </div>
  );
}
