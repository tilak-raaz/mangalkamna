import { Flag, Building, ShieldCheck, PlusSquare, Activity, Cpu, Users } from "lucide-react";

export default function Milestones() {
  return (
    <>
      {/* SECTION 4 — MILESTONES & ACHIEVEMENTS */}
      <section className="relative w-full py-20 lg:py-32 bg-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-40 left-0 w-72 h-72 bg-[#cb1b1a]/5 rounded-full blur-3xl -translate-x-1/2"></div>
        <div className="absolute bottom-40 right-0 w-96 h-96 bg-[#681412]/5 rounded-full blur-3xl translate-x-1/2"></div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="text-center mb-16 lg:mb-24">
            <span className="flex items-center justify-center gap-4 text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
              <span className="w-8 h-0.5 bg-[#cb1b1a]/50"></span>
              Our Journey
              <span className="w-8 h-0.5 bg-[#cb1b1a]/50"></span>
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.2] tracking-tight mt-4">
              Milestones & <span className="text-[#cb1b1a]">Achievements</span>
            </h2>
            <p className="mt-6 text-slate-600 text-[1.05rem] leading-relaxed max-w-2xl mx-auto font-medium">
              Driven by a commitment to excellence, our hospital has
              continuously evolved, setting new benchmarks in medical care and
              infrastructure.
            </p>
          </div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-[32px] md:left-1/2 top-4 bottom-4 w-1 bg-slate-100 transform -translate-x-1/2 rounded-full"></div>

            <div className="space-y-12 md:space-y-24">
              {[
                {
                  year: "2009",
                  title: "Year Founded",
                  desc: "Established as a single-specialty clinic.",
                  icon: <Flag size={24} />,
                },
                {
                  year: "2013",
                  title: "First Expansion",
                  desc: "Expanded to multi-specialty hospital, added 100 beds.",
                  icon: <Building size={24} />,
                },
                {
                  year: "2015",
                  title: "Accreditation",
                  desc: "Received NABH Accreditation.",
                  icon: <ShieldCheck size={24} />,
                },
                {
                  year: "2018",
                  title: "New Wing",
                  desc: "Launched Cancer & Oncology Centre.",
                  icon: <PlusSquare size={24} />,
                },
                {
                  year: "2020",
                  title: "ICU Upgrade",
                  desc: "Opened 50-bed state-of-the-art ICU.",
                  icon: <Activity size={24} />,
                },
                {
                  year: "2023",
                  title: "Robotic Surgery",
                  desc: "Introduced Robotic-Assisted Surgery program.",
                  icon: <Cpu size={24} />,
                },
                {
                  year: "2026",
                  title: "Patients Served",
                  desc: "1,00,000+ patients treated successfully to date.",
                  icon: <Users size={24} />,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-center justify-between group ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Space filler for the opposite side on desktop */}
                  <div className="hidden md:block w-[45%]"></div>

                  {/* Center Node / Icon */}
                  <div className="absolute left-[32px] md:left-1/2 w-16 h-16 md:w-20 md:h-20 bg-white border-4 border-slate-100 rounded-full flex items-center justify-center transform -translate-x-1/2 z-10 group-hover:border-[#cb1b1a]/30 group-hover:scale-110 shadow-sm group-hover:shadow-[0_10px_20px_-10px_rgba(203,27,26,0.3)] transition-all duration-300">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-slate-50 group-hover:bg-[#cb1b1a] rounded-full flex items-center justify-center text-[#681412] group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                  </div>

                  {/* Content Block */}
                  <div
                    className={`w-full md:w-[45%] pl-[80px] md:pl-0 ${idx % 2 === 0 ? "md:text-right md:pr-12 md:pl-0" : "md:text-left md:pl-12"}`}
                  >
                    <div
                      className={`bg-slate-50 md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none border border-slate-100 md:border-none group-hover:bg-white md:group-hover:bg-transparent group-hover:shadow-[0_20px_40px_-15px_rgba(203,27,26,0.1)] md:group-hover:shadow-none transition-all duration-300 flex flex-col justify-center h-full`}
                    >
                      <div
                        className={`mb-3 flex ${idx % 2 === 0 ? "md:justify-end" : ""}`}
                      >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#cb1b1a]/10 text-[#cb1b1a] text-sm font-bold uppercase tracking-wider">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 group-hover:text-[#cb1b1a] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
