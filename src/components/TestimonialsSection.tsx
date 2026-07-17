"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const defaultTestimonials = [
  {
    text: "As a parent of a child who recently underwent surgery at this hospital, I cannot express enough gratitude for the exceptional care we received. The pediatric team was not only highly skilled but also incredibly compassionate, making us feel at ease during a stressful time. The hospital environment was clean and welcoming, which helped reduce our anxiety. I highly recommend this hospital for pediatric care.",
    recommendation: "Highly recommended!",
    name: "Shivam Patel",
    role: "Regular Patient",
    image: "",
  },
  {
    text: "I recently had a consultation with one of the specialists at this hospital, and I couldn't be happier with the care I received. The doctor was not only highly skilled but also took the time to listen to my concerns and answer all my questions. The staff was courteous and efficient, making the entire process smooth and stress-free. I felt truly cared for and would definitely return for any future medical needs.",
    recommendation: "Exceptional service!",
    name: "Sonia Verma",
    role: "Consultation Patient",
    image: "",
  },
  {
    text: "My child was admitted to this hospital for a minor surgery, and I am so grateful for the excellent care we received. The pediatric team was fantastic, providing compassionate care and keeping us informed every step of the way. environment was clean and welcoming, which helped reduce our anxiety during the stay. I highly recommend this hospital for pediatric care.",
    recommendation: "A lifesaver for parents!",
    name: "Puja Sharma",
    role: "Mother of a Pediatric Patient",
    image: "",
  },
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
  },
];

type TestimonialItem = {
  id: string;
  name: string;
  deptConcerned: string;
  reviewText: string;
};

type TestimonialsSectionProps = {
  testimonials?: TestimonialItem[];
};

export default function TestimonialsSection({
  testimonials = [],
}: TestimonialsSectionProps) {
  const mappedTestimonials =
    testimonials.length > 0
      ? testimonials.map((item) => ({
          text: item.reviewText,
          recommendation: item.deptConcerned || "Patient Review",
          name: item.name,
          role: item.deptConcerned || "Patient",
          image: "",
        }))
      : defaultTestimonials;

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % mappedTestimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) =>
      prev === 0 ? mappedTestimonials.length - 1 : prev - 1,
    );
  };

  return (
    <section id="testimonials" className="py-24 bg-slate-50 text-slate-900">
      <div className="max-w-[85rem] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left Text Side (Header + Testimonials Carousel) */}
          <div className="w-full lg:w-[50%] xl:w-[45%] flex flex-col justify-center">
            {/* Section Header */}
            <div className="mb-12">
              <span className="flex items-center gap-3 text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-sm mb-4">
                <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
                Testimonials
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
                What Our <br />
                <span className="text-[#cb1b1a]">Patients Say</span>
              </h2>
            </div>

            {/* Testimonials Wrapper */}
            <div className="relative min-h-[300px]">
              <Quote className="absolute -top-8 -left-4 md:-top-12 md:-left-8 text-slate-100 fill-slate-100 w-24 h-24 md:w-32 md:h-32 rotate-180 -z-10 select-none" />

              {mappedTestimonials.map((testimonial, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={index}
                    className={`w-full transition-all duration-700 ease-in-out pointer-events-none ${
                      isActive
                        ? "opacity-100 z-10 pointer-events-auto relative translate-y-0"
                        : "opacity-0 z-0 absolute top-0 left-0 translate-y-8"
                    }`}
                  >
                    <div className="flex flex-col justify-center h-full">
                      <p className="text-lg md:text-xl lg:text-[22px] leading-relaxed text-slate-700 font-medium md:pr-8">
                        {testimonial.text}
                      </p>
                      <p className="text-md md:text-lg font-bold mt-6 mb-8 text-slate-900 flex items-center gap-2">
                        <span className="w-6 h-0.5 bg-[#cb1b1a] inline-block"></span>
                        {testimonial.recommendation}
                      </p>

                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-slate-200 border-2 border-white shadow-md flex items-center justify-center text-slate-500 font-bold text-xl overflow-hidden shrink-0">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold tracking-tight text-slate-900">
                            {testimonial.name}
                          </h4>
                          <p className="text-[#cb1b1a] text-sm font-semibold tracking-wide uppercase">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Controls Area */}
            <div className="flex gap-4 mt-12 pt-8 border-t border-slate-200">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:border-[#cb1b1a] hover:bg-[#cb1b1a] hover:text-white transition-all shadow-sm bg-transparent group"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft
                  size={24}
                  strokeWidth={2}
                  className="group-hover:-translate-x-0.5 transition-transform"
                />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-transparent bg-[#cb1b1a] text-white flex items-center justify-center hover:bg-[#a11514] transition-all shadow-lg shadow-red-900/20 group"
                aria-label="Next Testimonial"
              >
                <ChevronRight
                  size={24}
                  strokeWidth={2}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </button>
            </div>
          </div>

          {/* Right Video Side */}
          <div className="w-full lg:w-[50%] xl:w-[55%] relative h-[400px] sm:h-[500px] lg:h-[650px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200/50 bg-slate-100 mt-8 lg:mt-0">
            {/* Note: Update the src below with the actual hosted video URL */}
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              poster="https://res.cloudinary.com/du5qoczcn/image/upload/q_auto/f_auto/v1776351564/0D5A8773_fwziak.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
