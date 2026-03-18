import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  CalendarCheck,
  GraduationCap,
  Award,
  Stethoscope,
} from "lucide-react";
import type { Doctor } from "@/data/doctorsData";

type DoctorProfileHeroProps = {
  doctor: Doctor;
};

export default function DoctorProfileHero({ doctor }: DoctorProfileHeroProps) {
  return (
    <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 bg-slate-50 overflow-hidden border-b border-slate-200">
      {/* Background aesthetics */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(#cb1b1a_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] -z-10 rounded-full blur-xl translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#cb1b1a]/5 to-transparent rounded-full -z-10 blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center flex-wrap gap-2 text-sm font-semibold text-slate-500 mb-10 md:mb-12">
            <Link href="/" className="hover:text-[#cb1b1a] transition-colors">
              Home
            </Link>
            <ChevronRight size={14} className="shrink-0 text-slate-400" />
            <Link
              href="/doctors"
              className="hover:text-[#cb1b1a] transition-colors"
            >
              Doctors
            </Link>
            <ChevronRight size={14} className="shrink-0 text-slate-400" />
            <span className="text-[#cb1b1a]">{doctor.name}</span>
          </nav>

          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 bg-white rounded-3xl p-6 md:p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100">
            {/* Image Container */}
            <div className="w-full md:w-1/3 lg:w-1/4 shrink-0 relative">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src={doctor.photo}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {doctor.isAvailableToday && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-max inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/90 backdrop-blur-md text-white text-xs font-bold rounded-full shadow-lg">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                    Available Today
                  </div>
                )}
              </div>
            </div>

            {/* General Info Container */}
            <div className="flex-1 flex flex-col justify-center">
              <span className="inline-flex items-center gap-1.5 text-[#cb1b1a] font-bold text-sm tracking-wider uppercase mb-3">
                <Stethoscope size={16} />
                {doctor.specialization}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-2">
                {doctor.name}
              </h1>

              <p className="text-lg text-slate-600 font-medium mb-6">
                {doctor.designation}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl">
                  <div className="w-10 h-10 rounded-full bg-white text-[#681412] flex items-center justify-center shrink-0 shadow-sm border border-slate-100">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Qualifications
                    </p>
                    <p className="text-sm font-semibold text-slate-800 leading-tight">
                      {doctor.qualifications}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl">
                  <div className="w-10 h-10 rounded-full bg-white text-[#681412] flex items-center justify-center shrink-0 shadow-sm border border-slate-100">
                    <Award size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Experience
                    </p>
                    <p className="text-sm font-semibold text-slate-800 leading-tight">
                      {doctor.experience}+ Years
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto flex flex-wrap gap-4">
                <Link
                  href="#appointment"
                  className="inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-[#681412] text-white font-bold rounded-full hover:bg-[#cb1b1a] hover:shadow-[0_10px_20px_-10px_rgba(203,27,26,0.4)] transition-all duration-300 w-full sm:w-auto"
                >
                  <CalendarCheck size={18} />
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
