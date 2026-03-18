import Link from "next/link";
import { ChevronRight } from "lucide-react";
import * as Icons from "lucide-react";

type DepartmentDetailHeroProps = {
  name: string;
  iconName: string;
  intro: string;
};

export default function DepartmentDetailHero({
  name,
  iconName,
  intro,
}: DepartmentDetailHeroProps) {
  // @ts-expect-error - dynamic lucide icon access
  const IconComponent = Icons[iconName] || Icons.Stethoscope;

  return (
    <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 bg-slate-50 overflow-hidden border-b border-slate-200">
      {/* Background aesthetics */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(#cb1b1a_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] -z-10 rounded-full blur-xl translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#cb1b1a]/5 to-transparent rounded-full -z-10 blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-4xl">
          {/* Breadcrumb Navigation - Generously Padded */}
          <nav className="flex items-center flex-wrap gap-2 text-sm font-semibold text-slate-500 mb-10 md:mb-12">
            <Link href="/" className="hover:text-[#cb1b1a] transition-colors">
              Home
            </Link>
            <ChevronRight size={14} className="shrink-0 text-slate-400" />
            <Link
              href="/departments"
              className="hover:text-[#cb1b1a] transition-colors"
            >
              Departments
            </Link>
            <ChevronRight size={14} className="shrink-0 text-slate-400" />
            <span className="text-[#cb1b1a]">{name}</span>
          </nav>

          {/* Department Content Area */}
          <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8 mb-8">
            {/* Huge Floating Icon */}
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white shrink-0 rounded-2xl md:rounded-3xl flex items-center justify-center text-[#cb1b1a] border border-slate-100 shadow-[0_15px_30px_-10px_rgba(203,27,26,0.15)]">
              <IconComponent
                size={40}
                strokeWidth={1.5}
                className="md:w-12 md:h-12"
              />
            </div>

            <div className="flex-1">
              <span className="inline-block px-3 py-1 bg-[#cb1b1a]/10 text-[#cb1b1a] text-xs font-bold tracking-wider uppercase rounded-full mb-4">
                Specialized Department
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight text-slate-900 mb-6">
                Department of <br className="hidden md:block" />
                <span className="text-[#681412] inline-block mt-1 md:mt-2">
                  {name}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-2xl">
                {intro}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
