import {
  Pill,
  Activity,
  Syringe,
  Building2,
  BookHeart,
  Ambulance,
  Globe2,
} from "lucide-react";

const supportServices = [
  {
    icon: Pill,
    title: "24/7 Pharmacy",
  },
  {
    icon: Syringe,
    title: "Blood Bank & Transfusion",
  },
  {
    icon: Activity,
    title: "Dietary & Nutrition",
  },
  {
    icon: Building2,
    title: "Medical Social Work",
  },
  {
    icon: BookHeart,
    title: "Patient Education",
  },
  {
    icon: Ambulance,
    title: "Ambulance Services",
  },
  {
    icon: Globe2,
    title: "International Patient Services",
  },
];

export default function SupportServices() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden text-slate-900 border-t border-slate-100">
      {/* Background Decorative */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,#cb1b1a_0%,transparent_50%)] opacity-[0.03] blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <span className="flex items-center gap-3 text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-sm mb-4">
              <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
              Around The Clock
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900">
              Support Services
            </h2>
            <p className="text-slate-600 font-medium text-lg leading-relaxed">
              Enhancing medical care with robust support systems ensuring
              comfort, safety, and uninterrupted assistance for patients and
              their families.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {supportServices.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 hover:border-[#cb1b1a]/30 hover:shadow-[0_15px_30px_-15px_rgba(203,27,26,0.15)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-4 border border-slate-100 group-hover:bg-[#cb1b1a]/10 group-hover:border-[#cb1b1a]/20 transition-all duration-300">
                <service.icon className="w-7 h-7 text-[#cb1b1a] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-slate-900 font-bold text-[15px] leading-snug group-hover:text-[#681412] transition-colors">
                {service.title}
              </h3>
            </div>
          ))}

          {/* Contact Card in Grid */}
          <div className="bg-[#681412] rounded-2xl p-6 flex flex-col items-center justify-center text-center text-white border border-[#cb1b1a]/30 shadow-md relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col items-center w-full">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#cb1b1a] mb-3 bg-white px-3 py-1.5 rounded-full shadow-sm">
                Need Help?
              </span>
              <h3 className="text-xl font-bold mb-4 z-10">Call Support</h3>
              <a
                href="tel:1066"
                className="inline-flex items-center justify-center w-full py-3 bg-white text-[#681412] font-black rounded-xl hover:bg-slate-50 hover:shadow-md transition-all duration-300 transform group-hover:scale-105 z-10"
              >
                Dial 1066
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
