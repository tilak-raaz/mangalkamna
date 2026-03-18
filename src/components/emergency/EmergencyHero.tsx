import { AlertCircle, Phone, Clock } from "lucide-react";

export default function EmergencyHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#cb1b1a]/5 -z-10 rounded-bl-[100px] hidden md:block"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#cb1b1a]/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="max-w-2xl">
            <span className="flex items-center gap-3 text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-sm mb-6">
              <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
              Emergency Care
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Emergency & <span className="text-[#cb1b1a]">Urgent Care</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              24/7 emergency services, trauma care, ALS ambulances, and
              life-saving protocols. We are always ready when every second
              counts.
            </p>
          </div>

          {/* Emergency Helpline Card */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#cb1b1a] to-red-600 rounded-[2.5rem] blur opacity-20"></div>
            <div className="relative bg-gradient-to-br from-[#cb1b1a] to-[#a11514] p-8 md:p-10 rounded-[2rem] shadow-[0_20px_50px_rgba(203,27,26,0.2)] text-white text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/10">
                <AlertCircle className="w-8 h-8 text-white animate-pulse" />
              </div>

              <h2 className="text-2xl md:text-3xl font-bold tracking-wide mb-6">
                24/7 EMERGENCY HELPLINE
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xl md:text-2xl font-bold">
                  <div className="flex items-center gap-2">
                    <Phone className="w-6 h-6 text-white/80" />
                    <span>+91-XXXX-XXXXXX</span>
                  </div>
                  <span className="hidden md:inline text-white/40">|</span>
                  <div className="flex items-center gap-2">
                    <span className="text-white/80 text-lg">Toll Free:</span>
                    <span>1800-XXX-XXXX</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 bg-black/20 py-3 px-6 rounded-xl border border-white/10 inline-flex">
                <Clock className="w-5 h-5 text-red-200" />
                <span className="font-medium text-sm md:text-base">
                  Available around the clock, 365 days a year
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
