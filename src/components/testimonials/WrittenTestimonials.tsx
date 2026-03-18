import { Star, Quote, Calendar } from "lucide-react";

export default function WrittenTestimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Meena S.",
      department: "Cardiology",
      date: "October 2023",
      rating: 5,
      review:
        "I was diagnosed with a severe heart blockage and was terrified. Dr. [Name] explained everything step by step, performed the angioplasty with precision, and within a week I was back home feeling better than I had in years. The nursing staff was exceptional — always patient, always kind. Mangalkamna Hospital didn't just treat my heart; they took care of my entire being.",
      initials: "MS",
    },
    {
      id: 2,
      name: "Arjun T.",
      department: "Orthopedics",
      date: "November 2023",
      rating: 5,
      review:
        "After suffering from knee pain for years, I finally opted for knee replacement surgery here. From pre-operative counselling to physiotherapy post-surgery, every step was planned perfectly. I'm now walking pain-free and wish I had done it sooner. Excellent hospital, excellent team.",
      initials: "AT",
    },
    {
      id: 3,
      name: "Fatima B.",
      department: "Maternity / Gynaecology",
      date: "December 2023",
      rating: 5,
      review:
        "I delivered my first baby at Mangalkamna Hospital and it was a beautiful, reassuring experience. The maternity team was warm, supportive, and professional throughout. The NICU team was exceptional when my baby needed monitoring for a few days. My family and I are forever grateful.",
      initials: "FB",
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-100 relative">
      {/* Decorative Quote Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-50 opacity-50 pointer-events-none -z-10">
        <Quote className="w-96 h-96" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 sm:p-10 rounded-[2rem] border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(203,27,26,0.05)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
            >
              {/* Header: Rating & Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-red-100 group-hover:text-[#cb1b1a]/20 transition-colors duration-300" />
              </div>

              {/* Review Text */}
              <div className="flex-grow">
                <p className="text-slate-700 leading-relaxed italic text-lg mb-8">
                  "{testimonial.review}"
                </p>
              </div>

              {/* Patient Info Footer */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className="w-12 h-12 rounded-full bg-red-50 text-[#cb1b1a] flex items-center justify-center font-bold text-lg shrink-0">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 group-hover:text-[#cb1b1a] transition-colors">
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center gap-2 text-sm text-slate-500 mt-0.5">
                    <span className="font-medium text-[#cb1b1a]/80">
                      {testimonial.department}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {testimonial.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
