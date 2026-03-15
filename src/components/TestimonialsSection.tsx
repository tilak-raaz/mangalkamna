"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { text } from "stream/consumers";

const testimonials = [
  {
    text:" As a parent of a child who recently underwent surgery at this hospital, I cannot express enough gratitude for the exceptional care we received. The pediatric team was not only highly skilled but also incredibly compassionate, making us feel at ease during a stressful time. The hospital environment was clean and welcoming, which helped reduce our anxiety. I highly recommend this hospital for pediatric care.",
      recommendation: "Highly recommended!",
    name: "Shivam Patel",
    role: "Regular Patient",
    image:
    "https://images.pexels.com/photos/11708068/pexels-photo-11708068.jpeg"
    },
  {
    text: "I recently had a consultation with one of the specialists at this hospital, and I couldn't be happier with the care I received. The doctor was not only highly skilled but also took the time to listen to my concerns and answer all my questions. The staff was courteous and efficient, making the entire process smooth and stress-free. I felt truly cared for and would definitely return for any future medical needs.",
     recommendation: "Exceptional service!",
    name: "Sonia Verma",
    role: "Consultation Patient",
    image:
    "https://images.pexels.com/photos/5936267/pexels-photo-5936267.jpeg"
    },
  {
    text:" My child was admitted to this hospital for a minor surgery, and I am so grateful for the excellent care we received. The pediatric team was fantastic, providing compassionate care and keeping us informed every step of the way.     environment was clean and welcoming, which helped reduce our anxiety during the stay. I highly recommend this hospital for pediatric care.",
        recommendation: "A lifesaver for parents!",
    name: "Puja Sharma",
    role: "Mother of a Pediatric Patient",
    image:
 "https://images.pexels.com/photos/25578637/pexels-photo-25578637.jpeg"   },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-24 bg-slate-50 text-slate-900">
      <div className="max-w-[85rem] mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-4">
          <span className="flex items-center gap-3 text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-sm mb-4">
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            What Our <span className="text-[#681412]">Patients Say</span>
          </h2>
        </div>

        {/* Top Controls Area */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 pb-4 border-b border-slate-200">
          <Quote className="text-[#681412]/10 fill-[#681412]/10 w-24 h-24 md:w-32 md:h-32 rotate-180 -ml-4 select-none -mb-4 md:-mb-6" />

          <div className="flex gap-4 mt-8 md:mt-0">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all shadow-sm bg-white"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={24} strokeWidth={2} />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#681412] text-white flex items-center justify-center hover:bg-red-900 transition-all shadow-lg shadow-red-900/20"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={24} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative min-h-[550px] lg:min-h-[450px]">
          {testimonials.map((testimonial, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={index}
                className={`absolute inset-0 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 transition-all duration-700 ease-in-out pointer-events-none ${
                  isActive
                    ? "opacity-100 z-10 pointer-events-auto translate-x-0"
                    : "opacity-0 z-0 translate-x-4"
                }`}
              >
                {/* Left Text Side */}
                <div className="flex flex-col justify-center">
                  <p className="text-lg md:text-xl lg:text-[22px] leading-[1.8] text-[#681412] font-medium pr-4 md:pr-8">
                    {testimonial.text}
                  </p>
                  <p className="text-lg md:text-xl font-bold mt-8 mb-12 text-[#cb1b1a]">
                    {testimonial.recommendation}
                  </p>

                  <div className="mt-auto border-t border-slate-200 pt-6">
                    <h4 className="text-xl md:text-2xl font-extrabold tracking-tight mb-1 text-slate-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-slate-500 text-sm md:text-base font-semibold tracking-wide uppercase">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Right Image Side */}
                <div className="relative h-[400px] md:h-[450px] lg:h-full mt-10 md:mt-12 lg:mt-0">
                  {/* Decorative Stacked Background Cards */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-full bg-slate-200/50 rounded-[2rem] -mt-8 border border-white/50"></div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[92%] h-full bg-slate-100 rounded-[2rem] -mt-4 border border-white/50 shadow-sm"></div>

                  {/* Main Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center rounded-[2rem] shadow-xl border border-white"
                    style={{ backgroundImage: `url('${testimonial.image}')` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
