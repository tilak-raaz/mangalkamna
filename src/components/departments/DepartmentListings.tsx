import Link from "next/link";
import {
  Activity,
  Droplets,
  Heart,
  HeartPulse,
  Stethoscope,
  ChevronRight,
} from "lucide-react";

const departments = [
  {
    name: "Urology",
    icon: Activity,
    slug: "urology",
    description: "Endourology, Oncourology, Reconstructive Urology, Andrology",
  },
  {
    name: "Nephrology",
    icon: Droplets,
    slug: "nephrology",
    description: "Hemodialysis, CKD, AKI, Post-Transplant Care",
  },
  {
    name: "Cardiology",
    icon: Heart,
    slug: "cardiology",
    description: "ECG, 2D Echo, Angioplasty, Heart Failure Management",
  },
  {
    name: "Cardiac Surgery",
    icon: HeartPulse,
    slug: "cardiac-surgery",
    description: "CABG, Valve Repair, Congenital Cardiac Surgery",
  },
  {
    name: "Critical Care & ICU",
    icon: Stethoscope,
    slug: "critical-care-icu",
    description: "Advanced Ventilation, Cardiac Emergencies, Sepsis, Trauma",
  }
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
