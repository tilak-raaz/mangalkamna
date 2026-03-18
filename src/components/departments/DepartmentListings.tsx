import Link from "next/link";
import {
  Heart,
  Bone,
  Brain,
  Baby,
  Activity,
  Eye,
  Stethoscope,
  Smile,
  Radiation,
  Droplets,
  Wind,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

const departments = [
  {
    name: "Cardiology",
    icon: Heart,
    slug: "cardiology",
    description: "Heart failure, CAD, arrhythmias, valve disorders",
  },
  {
    name: "Orthopedics",
    icon: Bone,
    slug: "orthopedics",
    description: "Joint replacement, spine surgery, sports injuries",
  },
  {
    name: "Neurology",
    icon: Brain,
    slug: "neurology",
    description: "Stroke, epilepsy, Parkinson's, headache disorders",
  },
  {
    name: "Paediatrics",
    icon: Baby,
    slug: "paediatrics",
    description: "Child wellness, vaccinations, neonatal care",
  },
  {
    name: "Oncology",
    icon: Activity,
    slug: "oncology",
    description: "Cancer surgery, chemotherapy, radiation therapy",
  },
  {
    name: "Ophthalmology",
    icon: Eye,
    slug: "ophthalmology",
    description: "Cataract, LASIK, retina, glaucoma treatment",
  },
  {
    name: "Gynaecology",
    icon: Stethoscope,
    slug: "gynaecology",
    description: "Maternity, fertility, laparoscopy, menopause",
  },
  {
    name: "Dental Care",
    icon: Smile,
    slug: "dental-care",
    description: "Orthodontics, implants, root canal, cosmetic dentistry",
  },
  {
    name: "Radiology",
    icon: Radiation,
    slug: "radiology",
    description: "MRI, CT, X-Ray, ultrasound, PET scan",
  },
  {
    name: "Nephrology",
    icon: Droplets,
    slug: "nephrology",
    description: "Kidney disease, dialysis, transplant care",
  },
  {
    name: "Pulmonology",
    icon: Wind,
    slug: "pulmonology",
    description: "Asthma, COPD, sleep disorders, lung infections",
  },
  {
    name: "Physiotherapy",
    icon: CheckCircle2,
    slug: "physiotherapy",
    description: "Rehabilitation, sports therapy, post-surgical recovery",
  },
];

export default function DepartmentListings() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-[0_20px_40px_-15px_rgba(203,27,26,0.12)] hover:border-[#cb1b1a]/20 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden"
              >
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(#cb1b1a_1px,transparent_1px)] [background-size:12px_12px] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-full translate-x-4 -translate-y-4"></div>

                <div className="w-14 h-14 bg-slate-50 text-[#cb1b1a] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#cb1b1a] group-hover:text-white transition-colors duration-300 relative z-10">
                  <Icon size={28} strokeWidth={2} />
                </div>

                <h3 className="text-xl font-bold text-[#681412] mb-3 relative z-10">
                  {dept.name}
                </h3>

                <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-grow relative z-10">
                  {dept.description}
                </p>

                <div className="mt-auto relative z-10 pt-4 border-t border-slate-50">
                  <Link
                    href={`/departments/${dept.slug}`}
                    className="inline-flex items-center text-[#cb1b1a] font-bold group-hover:text-[#681412] transition-colors text-sm uppercase tracking-wide"
                  >
                    Explore Department
                    <ChevronRight
                      size={16}
                      className="ml-1 group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
