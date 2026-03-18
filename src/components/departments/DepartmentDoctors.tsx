import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Doctor = {
  name: string;
  role: string;
  image: string;
};

type DepartmentDoctorsProps = {
  doctors: Doctor[];
  departmentName: string;
};

export default function DepartmentDoctors({
  doctors,
  departmentName,
}: DepartmentDoctorsProps) {
  if (!doctors || doctors.length === 0) return null;

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="mb-12 border-l-4 border-[#cb1b1a] pl-4">
          <span className="text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-sm mb-2 block">
            Meet Our Specialists
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            {departmentName} Experts
          </h2>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-[0_20px_40px_-15px_rgba(104,20,18,0.15)] hover:border-[#cb1b1a]/20 transition-all duration-300 flex flex-col"
            >
              {/* Doctor Image Container */}
              <div className="relative h-72 w-full bg-slate-200 overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient overlay to make text readable if placed on bottom, or just for aesthetic */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Doctor Info */}
              <div className="p-6 relative flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#681412] transition-colors">
                  {doctor.name}
                </h3>
                <p className="text-[#cb1b1a] font-medium text-sm mb-6">
                  {doctor.role}
                </p>

                <div className="mt-auto">
                  <Link
                    href="#appointment"
                    className="inline-flex items-center gap-2 text-slate-600 font-bold text-sm tracking-wide hover:text-[#681412] transition-colors"
                  >
                    BOOK CONSULTATION
                    <ArrowUpRight
                      size={18}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
