import {
  Clock,
  Users,
  Ban,
  Thermometer,
  CameraOff,
  IdCard,
} from "lucide-react";

export default function VisitorGuidelines() {
  const guidelines = [
    {
      icon: Clock,
      title: "Visiting Hours",
      desc: "4:00 PM – 7:00 PM (General Wards) | 11:00 AM – 12:00 PM (ICU)",
    },
    {
      icon: Users,
      title: "Visitor Limits",
      desc: "Maximum 2 visitors per patient at any given time to ensure patient rest.",
    },
    {
      icon: Ban,
      title: "Age Restrictions",
      desc: "Children under 10 are not allowed in ICU or Special Care areas for infection control.",
    },
    {
      icon: Thermometer,
      title: "Health protocol",
      desc: "Visitors with fever, cough, or illness are strictly requested not to visit.",
    },
    {
      icon: CameraOff,
      title: "No Photography",
      desc: "Photography and video recording is strictly prohibited in all clinical areas.",
    },
    {
      icon: IdCard,
      title: "Visitor Passes",
      desc: "Mandatory visitor passes must be collected from the reception desk upon entry.",
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="flex items-center justify-center gap-3 text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-sm mb-4">
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
            Hospital Policy
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Visitor Guidelines
          </h2>
          <p className="text-slate-600 font-medium text-lg leading-relaxed">
            To ensure the safety, privacy, and speedy recovery of our patients,
            we kindly request all visitors to adhere to the following rules.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {guidelines.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:border-[#cb1b1a]/30 hover:shadow-[0_20px_40px_-15px_rgba(203,27,26,0.1)] transition-all duration-500 group flex flex-col items-start"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:scale-110 group-hover:border-[#cb1b1a]/20 group-hover:bg-[#cb1b1a]/10 transition-all duration-300">
                <item.icon className="w-7 h-7 text-[#681412] group-hover:text-[#cb1b1a] transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#681412] transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative notice bar */}
        <div className="mt-16 bg-[#cb1b1a]/5 border border-[#cb1b1a]/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h4 className="text-lg font-bold text-[#681412] mb-1">
              Need help finding a patient?
            </h4>
            <p className="text-slate-600 font-medium">
              Our Help Desk staff at the main lobby are available 24/7 to assist
              you.
            </p>
          </div>
          <button className="whitespace-nowrap px-8 py-3 bg-[#681412] text-white font-bold rounded-xl hover:bg-[#cb1b1a] hover:shadow-lg hover:shadow-[#cb1b1a]/20 transition-all duration-300">
            Contact Help Desk
          </button>
        </div>
      </div>
    </section>
  );
}
