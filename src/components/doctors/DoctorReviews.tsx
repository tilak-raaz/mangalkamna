import type { Doctor } from "@/data/doctorsData";
import { Star, Quote } from "lucide-react";

type DoctorReviewsProps = {
  doctor: Doctor;
};

export default function DoctorReviews({ doctor }: DoctorReviewsProps) {
  if (!doctor.reviews || doctor.reviews.length === 0) return null;

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 border-l-4 border-[#cb1b1a] pl-4">
            <span className="text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-sm mb-2 block">
              Patient Feedback
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              What Patients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {doctor.reviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] relative"
              >
                <Quote className="absolute top-6 right-8 w-12 h-12 text-slate-50 disabled" />

                <div className="flex gap-1 mb-4 relative z-10 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill={i < review.rating ? "currentColor" : "none"}
                      className={
                        i < review.rating ? "text-yellow-400" : "text-slate-200"
                      }
                    />
                  ))}
                </div>

                <p className="text-slate-600 font-medium italic leading-relaxed mb-6 relative z-10">
                  {`"${review.text}"`}
                </p>

                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-400">
                    {review.author.charAt(0)}
                  </div>
                  <span className="font-bold text-slate-900">
                    {review.author}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
