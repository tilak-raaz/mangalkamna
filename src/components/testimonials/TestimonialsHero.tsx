import { HeartHandshake } from "lucide-react";

export default function TestimonialsHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#cb1b1a]/5 -z-10 rounded-bl-[100px] hidden lg:block"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#cb1b1a]/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-red-50 rounded-2xl mb-6 text-[#cb1b1a]">
          <HeartHandshake className="w-8 h-8" />
        </div>

        <span className="flex items-center justify-center gap-3 text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-sm mb-6">
          <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
          Patient Success Stories
          <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 leading-[1.2] mb-6 tracking-tight max-w-4xl mx-auto">
          Stories of Healing — <br className="hidden md:block" />
          <span className="text-[#cb1b1a]">Told by Our Patients</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Thousands of patients have trusted us with their health journey. Here
          are some of their stories — in their own words.
        </p>
      </div>
    </section>
  );
}
