"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Cardiology",
    description:
      "Heart Health & Cardiac Surgery. Expert care for your heart with state-of-the-art diagnostic and treatment facilities.",
    image:
    "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   },
  {
    title: "Orthopedics",
    description:
      "Bone, Joint & Spine Care. Advanced treatment for bones, ligaments, tendons, and muscles to help you regain mobility.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2680&auto=format&fit=crop",
  },
  {
    title: "Neurology",
    description:
      "Brain & Nervous System. Comprehensive care for disorders of the nervous system and spinal cord using advanced therapeutic tools.",
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2671&auto=format&fit=crop",
  },
  {
    title: "Gynaecology & Obstetrics",
    description:
      "Women's Health & Maternity. Dedicated maternal care, family planning, and complete women's health services.",
    image:
 "https://images.pexels.com/photos/7108391/pexels-photo-7108391.jpeg"  },
  {
    title: "Oncology",
    description:
      "Cancer Diagnosis & Treatment. Cutting-edge radiation, chemotherapy, and surgical oncology treatments tailored to you.",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=2670",
  },
  {
    title: "Paediatrics",
    description:
      "Child Healthcare. Complete medical care for infants, children, and adolescents focusing on emotional and physical developmental needs.",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Ophthalmology",
    description:
      "Eye Care. Precision vision correction, cataract surgeries, and comprehensive treatments for various eye diseases.",
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=2680",
  },
  {
    title: "Radiology & Imaging",
    description:
      "Diagnostics & Scans. High-resolution MRI, CT, X-ray and ultrasound imaging providing highly accurate diagnostic foundations.",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2670",
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(services.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const displayedServices = services.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
      setActiveIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
      setActiveIndex(startIndex - itemsPerPage);
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-50 relative">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#cb1b1a]/5 rounded-full blur-3xl -z-10 -translate-x-1/2"></div>

      <div className="max-w-[85rem] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="mb-16 md:mb-20 pl-2 md:pl-4 border-l-4 border-[#cb1b1a]">
          <span className="text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Our Departments
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12">
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-slate-900 leading-[1.1] tracking-tight max-w-2xl">
              Excellence in <br className="hidden md:block" />
              <span className="text-[#681412]">Medical Services</span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-xl lg:pb-2">
              We offer leading-edge treatments across diverse medical
              specialties, bringing you comprehensive healthcare under one roof.
            </p>
          </div>
        </div>

        <div className="bg-[#681412] text-white rounded-[2rem] overflow-hidden flex flex-col lg:flex-row shadow-[0_20px_50px_rgba(104,20,18,0.15)] relative">
          <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 bg-red-300 rounded-full animate-pulse"></div>
              <span className="text-red-200 font-semibold tracking-[0.2em] uppercase text-xs">
                Our Departments
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-[1.15] tracking-tight shrink-0">
              Caring for your health <br /> with every service
            </h2>

            <button className="self-start shrink-0 px-8 py-3.5 bg-white text-[#681412] text-sm font-bold rounded-full mb-12 hover:bg-red-50 transition-all hover:scale-105 shadow-lg shadow-black/10">
              Book an appointment
            </button>

            {/* Adjusted min-height prevents layout jumping between pages */}
            <div className="flex flex-col mb-8 min-h-[380px]">
              {displayedServices.map((service, index) => {
                const actualIndex = startIndex + index;
                const isActive = actualIndex === activeIndex;
                const number = `(0${actualIndex + 1})`;

                return (
                  <div
                    key={actualIndex}
                    onClick={() => setActiveIndex(actualIndex)}
                    className={`group border-b border-white/10 last:border-b-0 py-5 cursor-pointer transition-all duration-300 ${
                      isActive ? "opacity-100" : "opacity-50 hover:opacity-80"
                    }`}
                  >
                    <div className="flex items-start gap-6">
                      <span className="text-sm font-mono tracking-widest mt-1 font-medium text-red-200/60">
                        {number}
                      </span>
                      <div className="flex-1">
                        <h3
                          className={`text-xl md:text-2xl transition-all duration-300 ${isActive ? "text-white font-bold mb-2" : "text-red-100 font-medium"}`}
                        >
                          {service.title}
                        </h3>
                        <div
                          className={`grid transition-all duration-500 ease-in-out ${
                            isActive
                              ? "grid-rows-[1fr] opacity-100 mt-2"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="text-red-100/90 text-sm md:text-base leading-relaxed pr-6 pb-2">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentPage(idx);
                      setActiveIndex(idx * itemsPerPage);
                    }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                      currentPage === idx
                        ? "bg-white text-[#681412] shadow-lg scale-110"
                        : "bg-white/10 text-white/80 hover:bg-white/20"
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 0}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-black/10 hover:bg-black/20 disabled:opacity-30 disabled:hover:bg-black/10 text-white transition-all"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages - 1}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-black/10 hover:bg-black/20 disabled:opacity-30 disabled:hover:bg-black/10 text-white transition-all"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 relative min-h-[400px] lg:min-h-auto m-4 lg:m-6 lg:ml-0 rounded-3xl overflow-hidden">
            {services.map((service, index) => (
              <div
                key={index}
                className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out ${
                  index === activeIndex
                    ? "opacity-100 z-10 scale-100"
                    : "opacity-0 z-0 scale-105"
                }`}
                style={{ backgroundImage: `url('${service.image}')` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
