import { Calendar } from "lucide-react";
import Link from "next/link";
import { doctorsData } from "@/data/doctorsData";

export default function DoctorsSection() {
  const featuredDoctors = doctorsData.slice(0, 3);

  return (
    <section id="doctors" className="py-24 bg-white relative">
      <div className="max-w-[85rem] mx-auto px-4 md:px-8 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="flex items-center gap-3 text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-sm mb-4">
              <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
              Meet Our Specialists
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Top Doctors <span className="text-[#681412]">Worldwide</span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl mt-6 leading-relaxed">
              Consult with top-rated medical experts from the comfort of your
              home. Our doctors are highly experienced and board-certified.
            </p>
          </div>
          <Link
            href="/doctors"
            className="whitespace-nowrap px-8 py-4 bg-white border border-slate-200 rounded-full font-bold text-[#681412] hover:border-[#681412] hover:bg-slate-50 transition-all shadow-sm"
          >
            View All Doctors
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {featuredDoctors.map((doctor, index) => (
            <div
              key={index}
              className="group flex flex-col rounded-[2rem] overflow-hidden bg-white border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-[0_20px_50px_rgba(30,58,138,0.08)] hover:-translate-y-2 transition-all duration-500"
            >
              {/* Doctor Image */}
              <div className="aspect-[4/3] md:aspect-[5/4] xl:aspect-[4/3] relative overflow-hidden bg-slate-100">
                <div
                  className="absolute inset-0 bg-cover bg-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  style={{ backgroundImage: `url('${doctor.photo}')` }}
                ></div>
                {/* Floating Specialty Badge */}
                <div className="absolute top-5 left-5 bg-white text-[#681412] text-xs font-bold px-4 py-2 rounded-full shadow-md tracking-wide">
                  {doctor.specialization}
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-1 p-8">
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2 tracking-tight">
                  <Link
                    href={`/doctors/${doctor.slug}`}
                    className="hover:text-[#cb1b1a] transition-colors"
                  >
                    {doctor.name}
                  </Link>
                </h3>
                <p className="text-slate-500 font-medium mb-8">
                  {doctor.designation}
                </p>

                {/* CTA Button */}
                <Link
                  href={`/doctors/${doctor.slug}`}
                  className="mt-auto w-full flex items-center justify-center gap-2 py-4 px-4 bg-slate-50 text-[#681412] text-[15px] font-bold rounded-xl border border-slate-100 group-hover:bg-[#681412] group-hover:text-white group-hover:border-[#681412] transition-all duration-300"
                >
                  <Calendar size={18} strokeWidth={2.5} />
                  Book Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
