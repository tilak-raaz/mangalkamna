"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageGallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })],
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const galleryItems = [
    {
      id: 3,
      title: "Advanced Equipment",
      category: "Equipment",
      url: "https://res.cloudinary.com/du5qoczcn/image/upload/v1776522226/0D5A8872-2_y1nwyr.jpg",
      alt: "Advanced Equipment",
    },
    {
      id: 4,
      title: "Operation Theatre",
      category: "Patient Care",
      url: "https://res.cloudinary.com/du5qoczcn/image/upload/v1776522550/0D5A8865_ucncgl.jpg",
      alt: "Recovery Rooms",
    },
    {
      id: 5,
      title: "Recovery Rooms",
      category: "Infrastructure",
      url: "https://res.cloudinary.com/du5qoczcn/image/upload/v1776522223/0D5A8868-2_npgr6g.jpg",
      alt: "Operation Theatre",
    },

    {
      id: 7,
      title: "Hospital Facilities",
      category: "Infrastructure",
      url: "https://res.cloudinary.com/du5qoczcn/image/upload/v1780135274/0D5A8830_wyyhxe.jpg",
      alt: "Hospital Facilities",
    },
    {
      id: 8,
      title: "Hospital Premises",
      category: "Infrastructure",
      url: "https://res.cloudinary.com/du5qoczcn/image/upload/v1780135279/0D5A8753_lzzsba.jpg",
      alt: "Hospital Premises",
    },
    {
      id: 9,
      title: "Patient Care",
      category: "Patient Services",
      url: "https://res.cloudinary.com/du5qoczcn/image/upload/a_-90/0D5A8848_cdxvlk.jpg",
      alt: "Patient Care",
    },
    {
      id: 10,
      title: "Care & Support",
      category: "Patient Services",
      url: "https://res.cloudinary.com/du5qoczcn/image/upload/a_-90/0D5A8851_cv6e64.jpg",
      alt: "Care & Support",
    },
    {
      id: 11,
      title: "Medical Equipment",
      category: "Equipment",
      url: "https://res.cloudinary.com/du5qoczcn/image/upload/a_-90/0D5A8901_iab3ug.jpg",
      alt: "Medical Equipment",
    },
     
  ];

  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="flex items-center justify-center gap-3 text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-sm mb-4">
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
            Gallery
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Our Gallery
          </h2>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-4 md:px-24">
          {/* Carousel */}
          <div className="overflow-hidden py-4" ref={emblaRef}>
            <div className="flex -ml-4 md:-ml-8 touch-pan-y">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 md:pl-8"
                >
                  <div className="group relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-slate-50 border border-slate-100/50 aspect-[4/3] sm:aspect-square cursor-pointer">
                    <Image
                      src={item.url}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      {item.category && (
                        <span className="inline-block px-4 py-1.5 bg-[#cb1b1a] text-white text-xs font-bold rounded-full mb-3 uppercase tracking-wider shadow-lg">
                          {item.category}
                        </span>
                      )}
                      {item.title && (
                        <h3 className="text-2xl font-bold text-white tracking-wide">
                          {item.title}
                        </h3>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white text-slate-700 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:bg-[#cb1b1a] hover:text-white transition-all duration-300 z-10 hover:shadow-[0_8px_30px_rgba(203,27,26,0.3)] hover:-translate-x-1"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white text-slate-700 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:bg-[#cb1b1a] hover:text-white transition-all duration-300 z-10 hover:shadow-[0_8px_30px_rgba(203,27,26,0.3)] hover:translate-x-1"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
}
