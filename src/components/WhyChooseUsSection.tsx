import {
  ShieldCheck,
  Microscope,
  CreditCard,
  HeartHandshake,
  Activity,
  Languages,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "NABH Accredited",
    description: "Recognized for quality care and patient safety standards.",
    colorText: "text-[#cb1b1a]",
    bgHover: "group-hover:bg-[#cb1b1a]",
    borderHover: "hover:border-[#cb1b1a]/30",
  },
  {
    icon: Microscope,
    title: "Advanced Tech",
    description: "Latest MRI, CT-Scan, PET-CT, 4D Ultrasound & more.",
    colorText: "text-[#681412]",
    bgHover: "group-hover:bg-[#681412]",
    borderHover: "hover:border-[#681412]/30",
  },
  {
    icon: CreditCard,
    title: "Cashless Insurance",
    description: "Seamlessly tied-up with all major insurance providers.",
    colorText: "text-[#681412]",
    bgHover: "group-hover:bg-[#681412]",
    borderHover: "hover:border-[#681412]/30",
  },
  {
    icon: HeartHandshake,
    title: "Patient-Centric",
    description: "Dedicated patient care coordinators for every patient.",
    colorText: "text-[#cb1b1a]",
    bgHover: "group-hover:bg-[#cb1b1a]",
    borderHover: "hover:border-[#cb1b1a]/30",
  },
  {
    icon: Activity,
    title: "Minimally Invasive",
    description:
      "Faster recovery, fewer complications, shorter hospital stays.",
    colorText: "text-[#cb1b1a]",
    bgHover: "group-hover:bg-[#cb1b1a]",
    borderHover: "hover:border-[#cb1b1a]/30",
  },
  {
    icon: Languages,
    title: "Multilingual Staff",
    description: "Our staff communicates comfortably in your language.",
    colorText: "text-[#681412]",
    bgHover: "group-hover:bg-[#681412]",
    borderHover: "hover:border-[#681412]/30",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section
      id="why-choose-us"
      className="py-24 bg-gradient-to-b from-white to-[white] relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#cb1b1a]/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[#681412]/5 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-[85rem] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">
          {/* Left Content Side (Sticky to handle 6 items on the right smoothly) */}
          <div className="w-full lg:w-5/12 space-y-8 lg:pr-8 lg:sticky lg:top-36">
            <div>
              <span className="flex items-center gap-3 text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-sm mb-4">
                <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                Dedicated to <br className="hidden md:block" />
                Your <span className="text-[#681412]">Well-being.</span>
              </h2>
            </div>

            <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
              We combine medical excellence with a deeply compassionate
              approach. Our commitment to cutting-edge technology and
              patient-first care makes us the leading choice for thousands of
              families worldwide.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-12">
              <div>
                <h4 className="text-4xl font-extrabold text-[#681412] tracking-tight mb-1">
                  20k+
                </h4>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                  Happy Patients
                </p>
              </div>
              <div className="hidden sm:block w-px h-16 bg-slate-200"></div>
              <div>
                <h4 className="text-4xl font-extrabold text-[#cb1b1a] tracking-tight mb-1">
                  99%
                </h4>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                  Success Rate
                </p>
              </div>
            </div>
          </div>

          {/* Right Cards Side (Staggered Grid) */}
          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {/* Column 1 (Evens) */}
              <div className="space-y-6 lg:space-y-8">
                {features
                  .filter((_, idx) => idx % 2 === 0)
                  .map((feature, i) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={i}
                        className={`p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white shadow-sm hover:shadow-[0_20px_50px_rgba(13,148,136,0.08)] hover:-translate-y-1 transition-all duration-500 group ${feature.borderHover}`}
                      >
                        <div
                          className={`w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 transition-colors duration-500 ${feature.bgHover}`}
                        >
                          <Icon
                            className={`${feature.colorText} group-hover:text-white transition-colors duration-500`}
                            size={30}
                            strokeWidth={2}
                          />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                          {feature.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    );
                  })}
              </div>

              {/* Column 2 (Odds - Staggered Down) */}
              <div className="space-y-6 lg:space-y-8 sm:mt-12 lg:mt-16">
                {features
                  .filter((_, idx) => idx % 2 !== 0)
                  .map((feature, i) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={i}
                        className={`p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white shadow-sm hover:shadow-[0_20px_50px_rgba(30,58,138,0.08)] hover:-translate-y-1 transition-all duration-500 group ${feature.borderHover}`}
                      >
                        <div
                          className={`w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 transition-colors duration-500 ${feature.bgHover}`}
                        >
                          <Icon
                            className={`${feature.colorText} group-hover:text-white transition-colors duration-500`}
                            size={30}
                            strokeWidth={2}
                          />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                          {feature.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
