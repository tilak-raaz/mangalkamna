"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import AchievementsBar from "./AchievementsBar";

const images = [
  "https://res.cloudinary.com/du5qoczcn/image/upload/v1773571642/WhatsApp_Image_2026-03-15_at_16.17.01_mft9qc.jpg",
  "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2828&auto=format&fit=crop",
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-105px)] flex items-center py-12 md:py-20 overflow-hidden bg-white">
      {/* Carousel Background */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${img}')` }}
        />
      ))}

      {/* Light Overlay so the dark text is readable */}
      <div className="absolute inset-0 z-0 bg-white/40 md:bg-white/20"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-t md:bg-gradient-to-r from-white/95 via-white/80 md:via-white/70 to-transparent"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="w-full flex justify-between items-end">
          <div className="max-w-2xl space-y-6 md:space-y-8">
            <AchievementsBar />

            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-[#cb1b1a]/20 px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-sm">
              <div className="w-2 md:w-2.5 h-2 md:h-2.5 bg-[#cb1b1a] rounded-full animate-pulse"></div>
              <span className="text-xs md:text-sm font-bold text-[#681412] tracking-wide">
                24/7 Online Hospital
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.3rem] font-bold leading-[1.2] md:leading-[1.15] tracking-tight text-[#681412]">
              Advanced Medical and Surgical <br className="hidden sm:block" />
              <span className="text-[#cb1b1a] font-extrabold relative block sm:inline">
                Super-Speciality Hospital
              </span>
            </h1>

            <p className="text-sm md:text-base text-[#681412]/70 font-medium mb-6">
              by Dr Shekhar Bajpei
            </p>

            <p className="text-xs sm:text-sm md:text-base text-[#681412]/75 font-medium mb-6 leading-relaxed">
              24*7 Emergency Care • Advanced Diagonostic Services • Expert
              Doctors and Specialists • Modern Operation Theatres
            </p>

            <p className="text-base sm:text-lg md:text-xl text-[#681412]/80 max-w-2xl leading-relaxed font-medium">
              State-of-the-art healthcare services delivered with compassion,
              precision, and a patient first approach.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-4 md:pt-6">
              <button className="w-full sm:w-auto bg-[#cb1b1a] text-white px-8 py-3.5 md:py-4 rounded-full font-bold hover:bg-[#a51615] transition-colors shadow-lg shadow-[#cb1b1a]/30 text-center text-sm md:text-base">
                Our Departments
              </button>
              <button className="w-full sm:w-auto bg-white/90 backdrop-blur-md text-[#681412] border-2 border-[#681412]/20 px-8 py-3.5 md:py-4 rounded-full font-bold hover:bg-white hover:border-[#681412]/40 transition-colors text-center shadow-sm text-sm md:text-base">
                Our Services
              </button>
            </div>
          </div>

          {/* Navigation arrows (aligned entirely to the right edge) */}
          <div className="hidden lg:flex items-center gap-4 mb-4">
            <button
              onClick={goToPrev}
              className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-[#681412] hover:bg-slate-50 border border-[#681412]/10 hover:border-[#681412]/30 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:-translate-x-0.5"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} strokeWidth={2} className="mr-0.5" />
            </button>
            <button
              onClick={goToNext}
              className="w-14 h-14 flex items-center justify-center rounded-full bg-[#681412] text-white hover:bg-[#4a0e0d] transition-all duration-300 shadow-[0_4px_20px_rgba(104,20,18,0.3)] hover:translate-x-0.5"
              aria-label="Next slide"
            >
              <ChevronRight size={24} strokeWidth={2} className="ml-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
