import { Star, ThumbsUp, UserCheck, Heart } from "lucide-react";

export default function RatingsSummary() {
  const ratings = [
    {
      title: "Google Rating",
      value: "4.8 / 5.0",
      description: "Based on 1,200+ Reviews",
      icon: Star,
      iconColor: "text-amber-500",
      bgColor: "bg-amber-50",
    },
    {
      title: "Overall Satisfaction",
      value: "97%",
      description: "Patients would recommend us",
      icon: ThumbsUp,
      iconColor: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Doctor Rating",
      value: "4.9 / 5.0",
      description: "Average doctor satisfaction score",
      icon: UserCheck,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Nursing Care",
      value: "4.8 / 5.0",
      description: "Nursing & patient care rating",
      icon: Heart,
      iconColor: "text-[#cb1b1a]",
      bgColor: "bg-red-50",
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="flex items-center justify-center gap-3 text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-sm mb-4">
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
            By The Numbers
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Ratings Summary
          </h2>
          <p className="text-lg text-slate-600">
            Our commitment to excellence is reflected in the trust and feedback
            of our patients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ratings.map((rating, index) => {
            const Icon = rating.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center hover:bg-white hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div
                  className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 pt-0 transition-transform duration-300 group-hover:scale-110 ${rating.bgColor} ${rating.iconColor}`}
                >
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                  {rating.title}
                </h3>

                <div className="text-3xl font-extrabold text-slate-900 mb-3">
                  {rating.value}
                </div>

                <p className="text-slate-600 font-medium text-sm">
                  {rating.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
