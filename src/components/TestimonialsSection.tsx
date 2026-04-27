"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { text } from "stream/consumers";

const testimonials = [
  {
    text: "As a parent of a child who recently underwent surgery at this hospital, I cannot express enough gratitude for the exceptional care we received. The pediatric team was not only highly skilled but also incredibly compassionate, making us feel at ease during a stressful time. The hospital environment was clean and welcoming, which helped reduce our anxiety. I highly recommend this hospital for pediatric care.",
    recommendation: "Highly recommended!",
    name: "Shivam Patel",
    role: "Regular Patient",
    image:""
   },
  {
    text: "I recently had a consultation with one of the specialists at this hospital, and I couldn't be happier with the care I received. The doctor was not only highly skilled but also took the time to listen to my concerns and answer all my questions. The staff was courteous and efficient, making the entire process smooth and stress-free. I felt truly cared for and would definitely return for any future medical needs.",
    recommendation: "Exceptional service!",
    name: "Sonia Verma",
    role: "Consultation Patient",
    image:""
   },
  {
    text: "My child was admitted to this hospital for a minor surgery, and I am so grateful for the excellent care we received. The pediatric team was fantastic, providing compassionate care and keeping us informed every step of the way. environment was clean and welcoming, which helped reduce our anxiety during the stay. I highly recommend this hospital for pediatric care.",
    recommendation: "A lifesaver for parents!",
    name: "Puja Sharma",
    role: "Mother of a Pediatric Patient",
    image:""},
  {
    text: "Experienced Doctors started this ventures Including top urologist, pathologist and Cardiologist. Top notch standard medical infrastructure facility.",
    recommendation: "Top notch infrastructure!",
    name: "Sumit Sharma",
    role: "Local Guide",
    image: "",
  },
  {
    text: "Dr vinayak vajpai is the best urologist in agra i get treatment from him result found is good with better response. I suggest to everyone go their and get consultant from dr vinayak vajpai sir",
    recommendation: "Best urologist in Agra!",
    name: "Pawan kumar Paithwal",
    role: "Patient",
    image: "",
  },
  {
    text: "Best hospital in agra and best urologist Dr.shekhar bajpeyi and vinayak bajpeyi sir",
    recommendation: "Best hospital in Agra!",
    name: "RAHUL KUMAR",
    role: "Patient",
    image: "",
  },
  {
    text: "Dr Shekhar Vajpai sir is the best urologist in agra i suggest to everyone to go their and get best treatment from him",
    recommendation: "Highly recommended!",
    name: "Kartik Mittal",
    role: "Patient",
    image: "",
  },
  {
    text: "I had a great experience with this urologist. The doctor listened carefully to my concerns, provided a clear diagnosis, and guided me through the treatment step by step. I felt comfortable and well cared for throughout.",
    recommendation: "Great experience!",
    name: "ranvir singh",
    role: "Patient",
    image: "",
  },
  {
    text: "Dr. Shekhar Vajpeyi Sir Is Very Senior Urologist In Agra, He's Polite And Very Humble Behaviour With Their Pateints. But Their Staff Is Very Rude And Worst Experience, So That Is My Humble Request You To Improve Their Staff.",
    recommendation: "Polite and humble doctors",
    name: "Anurag Tyagi",
    role: "Local Guide",
    image: "",
  },
  {
    text: "Patiently suna aur detail me samjhaya. Treatment bahut effective raha aur mujhe jaldi relief mila. Dono doctors ka behaviour bahut polite, supportive aur professional hai, jisse patient ko confidence milta hai.",
    recommendation: "Effective treatment!",
    name: "Arman Choudhary",
    role: "Patient",
    image: "",
  },
  {
    text: "This hospital is very clean and good management dr. Shekhar vajpayee sir is a good dr good nature and behaviour with us pts.there is sitting his son also dr vinayak vajpayee sir he is also very intelligent dr.",
    recommendation: "Clean and good management!",
    name: "Aditya Singh",
    role: "Patient",
    image: "",
  }
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
        <div className="relative">
          {testimonials.map((testimonial, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={index}
                className={`w-full grid grid-cols-1 lg:grid-cols-1 gap-8 md:gap-16 lg:gap-24 transition-all duration-700 ease-in-out pointer-events-none ${
                  isActive
                    ? "opacity-100 z-10 pointer-events-auto relative translate-x-0"
                    : "opacity-0 z-0 absolute top-0 left-0 translate-x-4"
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
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
