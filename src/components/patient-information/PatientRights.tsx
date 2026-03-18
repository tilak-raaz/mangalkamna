import { CheckCircle2, AlertCircle } from "lucide-react";

export default function PatientRights() {
  const patientRights = [
    "Right to respectful care",
    "Right to information about treatment",
    "Right to privacy & confidentiality",
    "Right to refuse treatment",
    "Right to a second opinion",
    "Right to access medical records",
  ];

  const patientResponsibilities = [
    "Provide accurate medical history",
    "Follow prescribed treatment plan",
    "Respect hospital rules & other patients",
    "Settle bills on time",
    "Notify staff of any changes in condition",
    "Maintain hospital property",
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="flex items-center justify-center gap-3 text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-sm mb-4">
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
            Mutual Trust
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Rights & Responsibilities
          </h2>
          <p className="text-slate-600 font-medium text-lg leading-relaxed">
            We believe in building a foundation of mutual trust and respect.
            Understanding your rights and responsibilities helps us serve you
            better.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Patient Rights */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-emerald-100 shadow-sm hover:shadow-[0_20px_50px_-15px_rgba(16,185,129,0.1)] transition-all duration-500 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>

            <div className="w-14 h-14 bg-emerald-100/50 rounded-2xl flex items-center justify-center mb-8 border border-emerald-100">
              <CheckCircle2 className="w-7 h-7 text-emerald-600" />
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 mb-8">
              Patient Rights
            </h3>

            <ul className="space-y-5">
              {patientRights.map((right, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
                  <span className="text-slate-700 font-medium leading-relaxed">
                    {right}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Responsibilities */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-amber-100 shadow-sm hover:shadow-[0_20px_50px_-15px_rgba(245,158,11,0.1)] transition-all duration-500 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>

            <div className="w-14 h-14 bg-amber-100/50 rounded-2xl flex items-center justify-center mb-8 border border-amber-100">
              <AlertCircle className="w-7 h-7 text-amber-600" />
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 mb-8">
              Patient Responsibilities
            </h3>

            <ul className="space-y-5">
              {patientResponsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0 shadow-[0_0_8px_rgba(245,158,11,0.6)]"></span>
                  <span className="text-slate-700 font-medium leading-relaxed">
                    {responsibility}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
