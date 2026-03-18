import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function DoctorsHero() {
  return (
    <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 bg-slate-50 overflow-hidden border-b border-slate-200">
      {/* Background aesthetics */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(#cb1b1a_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] -z-10 rounded-full blur-xl -translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#cb1b1a]/5 to-transparent rounded-full -z-10 blur-3xl translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-4xl">
          {/* Breadcrumb Navigation - Generously Padded */}
          <nav className="flex items-center flex-wrap gap-2 text-sm font-semibold text-slate-500 mb-10 md:mb-12">
            <Link href="/" className="hover:text-[#cb1b1a] transition-colors">
              Home
            </Link>
            <ChevronRight size={14} className="shrink-0 text-slate-400" />
            <span className="text-[#cb1b1a]">Doctors & Medical Team</span>
          </nav>

          {/* Hero Content Area */}
          <div className="flex flex-col mb-8">
            <span className="inline-block self-start px-3 py-1 bg-[#cb1b1a]/10 text-[#cb1b1a] text-xs font-bold tracking-wider uppercase rounded-full mb-4">
              Our Medical Experts
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.05] tracking-tight text-slate-900 mb-6">
              Meet Our <br className="hidden md:block" />
              <span className="text-[#681412] inline-block mt-1 md:mt-2">
                Expert Specialists
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-2xl">
              Our team of 200+ highly qualified and experienced doctors brings
              global expertise to your doorstep. From diagnosis to treatment,
              they are dedicated to your well-being.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
