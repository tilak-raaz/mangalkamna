import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { PageRecord } from "@/lib/pageData";

export default function AboutHero({ page }: { page?: PageRecord | null }) {
  const title = page?.title || "About Mangalkamna Hospital";
  const description =
    page?.excerpt ||
    "A legacy of healing built on trust, clinical expertise, and compassionate care.";

  return (
    <>
      {/* SECTION 1 — PAGE HERO BANNER */}
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
              <span className="text-[#681412] font-bold">{title}</span>
            </nav>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold leading-[1.15] tracking-tight text-[#681412]">
              {title} <br className="hidden lg:block" /> Hospital —{" "}
              <br className="hidden md:block lg:hidden" />
              <span className="text-[#cb1b1a]">A Legacy of Healing</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-3xl">
              {description}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
