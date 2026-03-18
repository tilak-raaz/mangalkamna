import { Car, Train, Bus, Plane } from "lucide-react";

export default function HowToReach() {
  const modes = [
    {
      id: "road",
      icon: Car,
      title: "By Road",
      description:
        "Located on main road. Easily accessible via primary highways and arterial connections. Open parking available.",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      id: "metro",
      icon: Train,
      title: "By Metro",
      description:
        "Nearest Metro Station: [Station Name] – Approx. 10 minutes walk from Exit Gate No. 2.",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      id: "bus",
      icon: Bus,
      title: "By Bus",
      description:
        "Various bus routes directly connect to our facility. Closest stop: [Hospital Name / Nearby Stop].",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      id: "air",
      icon: Plane,
      title: "By Air",
      description:
        "Nearest Airport: [Airport Name] – Approx. X km. Pre-paid taxi and cab services readily available.",
      bgColor: "bg-violet-50",
      iconColor: "text-violet-600",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100 relative">
      {/* Decorative subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="flex items-center justify-center gap-3 text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-sm mb-4">
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
            Directions
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            How to Reach Us
          </h2>
          <p className="text-lg text-slate-600">
            We are centrally located and easily accessible through multiple
            modes of transportation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modes.map((mode) => {
            const Icon = mode.icon;
            return (
              <div
                key={mode.id}
                className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 pt-0 transition-transform duration-300 group-hover:scale-110 ${mode.bgColor} ${mode.iconColor}`}
                >
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#cb1b1a] transition-colors">
                  {mode.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {mode.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
