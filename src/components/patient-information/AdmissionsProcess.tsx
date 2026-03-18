import {
  UserCircle,
  FileText,
  CreditCard,
  Building2,
  Stethoscope,
  ArrowRight,
} from "lucide-react";

export default function AdmissionsProcess() {
  const steps = [
    {
      icon: Stethoscope,
      title: "Consult a Specialist",
      desc: "Visit our OPD, get a referral, or enter through Emergency for an initial consultation.",
    },
    {
      icon: FileText,
      title: "Get Admission Slip",
      desc: "If required, your doctor will recommend admission and provide an Admission Advice Slip.",
    },
    {
      icon: UserCircle,
      title: "Visit Admission Desk",
      desc: "Proceed to the Admitting Office on the Ground Floor with valid ID and insurance/TPA cards.",
    },
    {
      icon: Building2,
      title: "Select Room Category",
      desc: "Fill out the Admission Form and choose your preferred room category based on availability.",
    },
    {
      icon: CreditCard,
      title: "Process Payment",
      desc: "Pay the required initial deposit or complete the insurance pre-authorization process.",
    },
    {
      icon: ArrowRight,
      title: "Escort to Room",
      desc: "Our guest relations staff will escort you and your family safely to your allotted ward or room.",
    },
  ];

  return (
    <section id="admissions" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="flex items-center justify-center gap-3 text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-sm mb-4">
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
            Getting Started
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Admissions Process
          </h2>
          <p className="text-slate-600 font-medium text-lg">
            We have streamlined our admission process to be as smooth and
            hassle-free as possible for you and your loved ones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative mt-16">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[15%] left-[5%] right-[5%] h-px border-t-2 border-dashed border-slate-200 z-0"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative z-10 group bg-white p-8 rounded-3xl border border-slate-100 hover:border-[#cb1b1a]/30 hover:shadow-[0_20px_50px_-15px_rgba(203,27,26,0.1)] transition-all duration-500"
            >
              <div className="absolute -top-6 left-8 bg-[#681412] text-white w-12 h-12 rounded-xl flex items-center justify-center font-black text-xl shadow-lg border-4 border-white group-hover:bg-[#cb1b1a] group-hover:-translate-y-2 transition-all duration-300">
                {index + 1}
              </div>

              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 mt-4 group-hover:scale-110 transition-transform duration-500 border border-slate-100">
                <step.icon className="w-8 h-8 text-[#cb1b1a]" strokeWidth={2} />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#681412] transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
