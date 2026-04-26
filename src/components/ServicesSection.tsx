"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Urology",
    description:
      "Comprehensive medical and surgical management of genitourinary disorders. Subspecialities: Endourology, Laparoscopic & Minimally Invasive Urology, Oncourology, Reconstructive Urology, Andrology & Male Infertility. We focus on organ preservation, minimal blood loss, faster recovery, and long-term functional outcomes.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2680&auto=format&fit=crop",
  },
  {
    title: "Nephrology",
    description:
      "Comprehensive kidney care, from early diagnosis to advanced renal replacement therapy. Services Include: CKD & AKI Treatment, Hemodialysis, Hypertension Clinic, Diabetic Kidney Disease, Glomerular Disease, and Pre/Post-Transplant Care.",
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2671&auto=format&fit=crop",
  },
  {
    title: "Plastic & Reconstructive Surgery",
    description:
      "Advanced surgical procedures for reconstruction, aesthetics, and functional restoration. Our experienced surgeons provide customized solutions for trauma, burn injuries, and reconstructive needs.",
    image:
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=987&auto=format&fit=crop",
  },
  {
    title: "Pain Management Clinic",
    description:
      "Specialized center for managing acute and chronic pain through multimodal approaches. Services include interventional pain procedures, medication management, and rehabilitation.",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=2670",
  },
  {
    title: "Diabetes Management",
    description:
      "Comprehensive diabetes care program including diagnosis, treatment, education, and management of complications. Our endocrinologists provide personalized treatment plans.",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2670",
  },
  {
    title: "Infertility Care",
    description:
      "Advanced fertility treatments and reproductive medicine services. We offer comprehensive evaluation and treatment options for couples struggling with infertility.",
    image:
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=987&auto=format&fit=crop",
  },
  {
    title: "Sexual Issue Management",
    description:
      "Specialized clinic for management of sexual dysfunction and related conditions. Our experts provide confidential, comprehensive care.",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=2670",
  },
  {
    title: "Critical Care & ICU",
    description:
      "Advanced ICU and HDU equipped with Ventilators, Multiparameter Monitors, and Isolation Facilities. We manage post-operative patients, cardiac emergencies, renal failure, sepsis, trauma & multi-organ dysfunction with a Trained Critical Care Team.",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2670",
  },
  {
    title: "Dietitian Services",
    description:
      "Personalized nutritional counseling and meal planning for various medical conditions. Our registered dietitians work with patients to optimize their nutritional health.",
    image:
      "https://images.unsplash.com/photo-1512621539247-4600259cb1da?auto=format&fit=crop&q=80&w=2670",
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
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-slate-900 leading-[1.1] tracking-tight max-w-2xl mb-4">
                Excellence in <br className="hidden md:block" />
                <span className="text-[#681412]">Medical Services</span>
              </h2>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-xl lg:pb-2">
                We offer leading-edge treatments across diverse medical
                specialties, bringing you comprehensive healthcare under one
                roof.
              </p>
            </div>
            <div className="lg:pb-2">
              <Link
                href="/departments"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#681412] text-white font-bold rounded-full hover:bg-[#cb1b1a] hover:shadow-[0_10px_20px_-10px_rgba(203,27,26,0.5)] transition-all duration-300 group"
              >
                View All Departments
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
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
