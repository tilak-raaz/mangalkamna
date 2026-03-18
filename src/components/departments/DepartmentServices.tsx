import { Activity, ShieldCheck, CheckCircle2 } from "lucide-react";

type DepartmentServicesProps = {
  conditions: string[];
  procedures: string[];
};

export default function DepartmentServices({
  conditions,
  procedures,
}: DepartmentServicesProps) {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Conditions Treated Column */}
          <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100 relative overflow-hidden group hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(#681412_1px,transparent_1px)] [background-size:16px_16px] opacity-5 rounded-bl-full"></div>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm text-[#681412] flex items-center justify-center">
                <ShieldCheck size={24} strokeWidth={2.5} />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                Conditions Treated
              </h2>
            </div>

            <ul className="space-y-4">
              {conditions.map((condition, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-slate-600 font-medium"
                >
                  <span className="text-[#cb1b1a] mt-1 shrink-0">
                    <CheckCircle2 size={18} strokeWidth={2.5} />
                  </span>
                  <span className="leading-relaxed">{condition}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Procedures Column */}
          <div className="bg-[#681412] rounded-3xl p-8 md:p-10 border border-[#681412] relative overflow-hidden group hover:shadow-[0_20px_40px_-15px_rgba(104,20,18,0.3)] hover:-translate-y-1 transition-all duration-300">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#cb1b1a]/20 to-transparent mix-blend-overlay"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:16px_16px] opacity-10 rounded-tl-full"></div>

            <div className="relative z-10 flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-white/10 rounded-xl text-white flex items-center justify-center">
                <Activity size={24} strokeWidth={2.5} />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                Key Procedures
              </h2>
            </div>

            <ul className="space-y-4 relative z-10">
              {procedures.map((procedure, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-white/90 font-medium"
                >
                  <span className="text-white shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full border-2 border-white/30 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </span>
                  <span className="leading-relaxed">{procedure}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
