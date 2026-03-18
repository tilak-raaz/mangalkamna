import { Target, Telescope, Gem } from "lucide-react";

export default function MissionVision() {
  return (
    <>
      {/* SECTION 3 — MISSION, VISION & VALUES */}
      <section className="relative w-full py-16 lg:py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <span className="flex items-center justify-center gap-4 text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
              <span className="w-8 h-0.5 bg-[#cb1b1a]/50"></span>
              Our Core Principles
              <span className="w-8 h-0.5 bg-[#cb1b1a]/50"></span>
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.2] tracking-tight mt-4">
              Mission, Vision <span className="text-[#681412]">& Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission Card */}
            <div className="flex flex-col items-center justify-center p-8 lg:p-10 rounded-3xl bg-white border border-slate-100 hover:border-[#cb1b1a]/20 hover:shadow-[0_20px_40px_-15px_rgba(203,27,26,0.1)] transition-all duration-300 group text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(#cb1b1a_1px,transparent_1px)] [background-size:16px_16px] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-full"></div>
              <div className="w-16 h-16 bg-[#cb1b1a]/10 rounded-2xl flex items-center justify-center text-[#cb1b1a] mb-6 group-hover:scale-110 group-hover:bg-[#cb1b1a] group-hover:text-white transition-all duration-300">
                <Target size={32} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Our Mission
              </h3>
              <p className="text-slate-600 text-[1rem] leading-relaxed font-medium">
                To deliver compassionate, high-quality healthcare that improves
                health outcomes and enriches the lives of every patient we
                serve.
              </p>
            </div>

            {/* Vision Card - Highlighted */}
            <div className="flex flex-col items-center justify-center p-8 lg:p-10 rounded-3xl bg-[#681412] border border-[#681412] hover:shadow-[0_20px_40px_-15px_rgba(104,20,18,0.4)] hover:-translate-y-2 transition-all duration-300 group text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#cb1b1a]/20 to-transparent mix-blend-overlay"></div>
              <div className="absolute top-0 left-0 w-32 h-32 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:16px_16px] opacity-10 rounded-br-full"></div>
              <div className="relative z-10 w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-white group-hover:text-[#681412] transition-all duration-300">
                <Telescope size={32} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                Our Vision
              </h3>
              <p className="text-white/80 text-[1rem] leading-relaxed font-medium relative z-10">
                To be the region&apos;s most trusted and innovative healthcare
                institution — a beacon of healing, hope, and medical excellence.
              </p>
            </div>

            {/* Values Card */}
            <div className="flex flex-col items-center justify-start p-8 lg:p-10 rounded-3xl bg-white border border-slate-100 hover:border-[#cb1b1a]/20 hover:shadow-[0_20px_40px_-15px_rgba(203,27,26,0.1)] transition-all duration-300 group text-center relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[radial-gradient(#cb1b1a_1px,transparent_1px)] [background-size:16px_16px] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-tr-full"></div>
              <div className="w-16 h-16 bg-[#cb1b1a]/10 rounded-2xl flex items-center justify-center text-[#cb1b1a] mb-6 group-hover:scale-110 group-hover:bg-[#cb1b1a] group-hover:text-white transition-all duration-300">
                <Gem size={32} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-5">
                Our Values
              </h3>
              <div className="flex flex-wrap justify-center gap-2.5 relative z-10">
                {[
                  "Compassion",
                  "Integrity",
                  "Excellence",
                  "Innovation",
                  "Teamwork",
                  "Respect",
                ].map((value, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-slate-50 border border-slate-100 text-xs md:text-sm font-bold text-slate-700 group-hover:border-[#cb1b1a]/20 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#cb1b1a] mr-2"></span>
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
