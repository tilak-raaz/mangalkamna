import { Camera } from "lucide-react";
import type { PageRecord } from "@/lib/pageData";

export default function GalleryHero({ page }: { page?: PageRecord | null }) {
  const title = page?.title || "Gallery & Virtual Tour";
  const description =
    page?.excerpt ||
    "Explore our world-class facilities, state-of-the-art infrastructure, dedicated healthcare professionals, and memorable hospital milestones.";

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#cb1b1a]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#cb1b1a]/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-red-50 rounded-2xl mb-6 text-[#cb1b1a]">
          <Camera className="w-8 h-8" />
        </div>

        <span className="flex items-center justify-center gap-3 text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-sm mb-6">
          <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
          {title}
          <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight max-w-4xl mx-auto">
          {title} <br className="hidden md:block" />
          <span className="text-[#cb1b1a]">Mangalkamna Hospital</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
}
