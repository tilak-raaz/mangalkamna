import type { Doctor } from "@/data/doctorsData";
import { CheckCircle2 } from "lucide-react";

type DoctorProfileDetailsProps = {
  doctor: Doctor;
};

export default function DoctorProfileDetails({
  doctor,
}: DoctorProfileDetailsProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column (Main details) */}
            <div className="lg:col-span-2 space-y-12">
              {/* Special Interests */}
              {doctor.specialInterests.length > 0 && (
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-6 border-b border-slate-100 pb-4">
                    Special Interests
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {doctor.specialInterests.map((interest, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2
                          size={20}
                          className="text-[#cb1b1a] shrink-0 mt-0.5"
                        />
                        <span className="text-slate-700 font-medium">
                          {interest}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Publications */}
              {doctor.publications && (
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-6 border-b border-slate-100 pb-4">
                    Publications & Research
                  </h3>
                  <p className="text-slate-700 font-medium leading-relaxed bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    {doctor.publications}
                  </p>
                </div>
              )}

              {/* Memberships */}
              {doctor.memberships && (
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-6 border-b border-slate-100 pb-4">
                    Professional Memberships
                  </h3>
                  <p className="text-slate-700 font-medium leading-relaxed bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    {doctor.memberships}
                  </p>
                </div>
              )}
            </div>

            {/* Right Column (Sidebar Timings & Language) */}
            <div className="space-y-6">
              <div className="bg-[#681412] rounded-3xl p-8 relative overflow-hidden text-white shadow-xl shadow-[#681412]/20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:12px_12px] opacity-10 rounded-bl-full translate-x-4 -translate-y-4"></div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  OPD Schedule
                </h3>

                <div className="space-y-6 relative z-10">
                  <div>
                    <p className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-1">
                      Consultation Days
                    </p>
                    <p className="font-bold text-lg">{doctor.opdDays}</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-1">
                      Timings
                    </p>
                    <p className="font-bold text-lg">{doctor.opdTimings}</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Languages Spoken
                </h3>
                <div className="flex flex-wrap gap-2">
                  {doctor.languages.map((lang, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-medium text-sm rounded-full"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
