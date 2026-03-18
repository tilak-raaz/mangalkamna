import { ShieldCheck, Activity, Target, Gem, Award } from "lucide-react";

export default function Accreditations() {
  return (
    <>
      {/* SECTION 5 — ACCREDITATIONS & CERTIFICATIONS */}
      <section className="relative w-full py-20 lg:py-32 bg-slate-50 border-t border-slate-200 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#cb1b1a]/5 via-transparent to-transparent opacity-50"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="text-center mb-16 lg:mb-24">
            <span className="flex items-center justify-center gap-4 text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
              <span className="w-8 h-0.5 bg-[#cb1b1a]/50"></span>
              Excellence Recognized
              <span className="w-8 h-0.5 bg-[#cb1b1a]/50"></span>
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.2] tracking-tight mt-4">
              Accreditations &{" "}
              <span className="text-[#cb1b1a]">Certifications</span>
            </h2>
            <p className="mt-6 text-slate-600 text-[1.05rem] leading-relaxed max-w-2xl mx-auto font-medium">
              We uphold the highest global standards in healthcare quality and
              patient safety, as recognized by leading medical accreditation
              bodies.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 relative z-10">
            {/* Accreditation Cards */}
            {[
              {
                title: "NABH",
                desc: "National Accreditation Board for Hospitals & Healthcare Providers",
                icon: (
                  <ShieldCheck
                    size={36}
                    className="text-[#cb1b1a] group-hover:text-white transition-colors duration-300"
                  />
                ),
              },
              {
                title: "NABL",
                desc: "National Accreditation Board for Testing & Calibration Laboratories",
                icon: (
                  <Activity
                    size={36}
                    className="text-[#cb1b1a] group-hover:text-white transition-colors duration-300"
                  />
                ),
              },
              {
                title: "ISO 9001:2015",
                desc: "Certified for maintaining top-tier quality management systems.",
                icon: (
                  <Gem
                    size={36}
                    className="text-[#cb1b1a] group-hover:text-white transition-colors duration-300"
                  />
                ),
              },
              {
                title: "JCI Accreditation",
                desc: "Recognized for Joint Commission International standards globally.",
                icon: (
                  <Target
                    size={36}
                    className="text-[#cb1b1a] group-hover:text-white transition-colors duration-300"
                  />
                ),
              },
              {
                title: "Govt. Recognition",
                desc: "Awarded by State Government for outstanding medical services.",
                icon: (
                  <Award
                    size={36}
                    className="text-[#cb1b1a] group-hover:text-white transition-colors duration-300"
                  />
                ),
              },
            ].map((cert, idx) => (
              <div
                key={idx}
                className="group relative w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(203,27,26,0.15)] hover:border-[#cb1b1a]/20 transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#cb1b1a]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <div className="relative w-20 h-20 bg-slate-50 group-hover:bg-[#cb1b1a] rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-all duration-300 transform group-hover:-translate-y-1 z-10">
                  {cert.icon}
                </div>
                <h3 className="relative text-xl font-bold text-slate-900 mb-3 group-hover:text-[#cb1b1a] transition-colors z-10">
                  {cert.title}
                </h3>
                <p className="relative text-slate-600 font-medium text-sm leading-relaxed z-10">
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
