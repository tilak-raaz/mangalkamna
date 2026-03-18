import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PatientInfoHero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-slate-50">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(#cb1b1a_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] -z-10 rounded-full blur-2xl translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#cb1b1a]/5 to-transparent rounded-full -z-10 blur-3xl -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 font-medium mb-10 w-fit">
          <Link
            href="/"
            className="hover:text-[#cb1b1a] transition-colors hover:underline underline-offset-4"
          >
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-slate-400" />
          <span className="text-[#cb1b1a] font-bold">Patient Information</span>
        </nav>

        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-3 text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-sm mb-6 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
            <span className="w-2 h-2 rounded-full bg-[#cb1b1a] animate-pulse"></span>
            Patient First
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-8">
            Important Information <br className="hidden md:block" />
            <span className="text-[#681412] relative inline-block mt-2">
              For Our Patients
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-[#cb1b1a]/20 translate-y-2"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="transparent"
                />
              </svg>
            </span>
          </h1>

          <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium mb-10">
            Everything you need to know about admissions, discharge, insurance,
            patient rights, and visiting guidelines to ensure a smooth and
            comfortable stay.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#admissions"
              className="px-8 py-4 bg-[#681412] text-white font-bold rounded-full hover:bg-[#cb1b1a] hover:shadow-lg hover:shadow-[#cb1b1a]/20 transition-all duration-300"
            >
              Admission Process
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
