import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function DepartmentsHero() {
  return (
    <>
      {/* SECTION 1 — PAGE INTRO */}
      <section className="relative w-full py-12 md:py-20 bg-slate-50 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(#cb1b1a_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] -z-10 rounded-full blur-2xl translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#cb1b1a]/5 to-transparent rounded-full -z-10 blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="space-y-4 md:space-y-6 max-w-4xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-4 md:mb-8">
              <Link href="/" className="hover:text-[#cb1b1a] transition-colors">
                Home
              </Link>
              <ChevronRight size={14} />
              <span className="text-[#681412] font-bold">
                Departments & Specialties
              </span>
            </nav>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold leading-[1.15] tracking-tight text-[#681412] mb-6">
              World-Class Specialties
              <br className="hidden md:block lg:hidden" />
              <span className="text-[#cb1b1a]"> Under One Roof</span>
            </h1>

            {/* Sub-text */}
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-3xl">
              30+ Departments — from Preventive Care to Complex Surgical
              Intervention. Our institution is equipped with the latest
              technology, led by experienced super specialists and specialists.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
