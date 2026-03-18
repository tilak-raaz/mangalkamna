import {
  Truck,
  HeartPulse,
  Wind,
  Zap,
  Users,
  MapPin,
  Baby,
  Phone,
  MessageCircle,
} from "lucide-react";

export default function AmbulanceServices() {
  const features = [
    {
      text: "Advanced Cardiac Life Support (ACLS) equipment",
      icon: HeartPulse,
    },
    { text: "Ventilator & oxygen supply", icon: Wind },
    { text: "Defibrillators", icon: Zap },
    { text: "Trained paramedics & emergency nurses", icon: Users },
    {
      text: "GPS tracking & real-time coordination with hospital ER",
      icon: MapPin,
    },
    { text: "Neonatal transport incubators (NICU ambulances)", icon: Baby },
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="flex items-center gap-3 text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-sm mb-4">
              <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
              Rapid Transport
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Ambulance Services
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We operate a fleet of state-of-the-art ambulances equipped to
              provide life-saving care during transit. Our rapid response team
              ensures the highest level of pre-hospital emergency care.
            </p>

            <ul className="space-y-4 mb-10 lg:mb-0">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <li
                    key={index}
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all"
                  >
                    <div className="p-2.5 bg-red-50 text-[#cb1b1a] rounded-lg shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-slate-700 font-medium pt-2">
                      {feature.text}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Booking Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-slate-100 rounded-[2rem] rotate-3 scale-[1.02] -z-10 transition-transform duration-500 lg:group-hover:rotate-0"></div>
            <div className="bg-slate-50 border border-slate-200 p-8 sm:p-10 rounded-[2rem] shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 md:p-12 bg-red-50/50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-700">
                <Truck className="w-24 h-24 text-red-100" />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-[#cb1b1a] text-white rounded-2xl shadow-md">
                  <Truck className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                  Ambulance Booking
                </h3>
              </div>

              <p className="text-slate-600 mb-8 font-medium text-lg leading-relaxed">
                For emergency transport or scheduled patient transfers, contact
                our dispatch center immediately.
              </p>

              <div className="space-y-4">
                <a
                  href="#call"
                  className="flex items-center justify-between p-4 md:p-5 rounded-2xl border-2 border-[#cb1b1a]/20 bg-white hover:border-[#cb1b1a] hover:shadow-[0_8px_20px_rgba(203,27,26,0.1)] transition-all group/btn"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-red-50 text-[#cb1b1a] rounded-xl group-hover/btn:bg-[#cb1b1a] group-hover/btn:text-white transition-colors duration-300">
                      <Phone className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-400 mb-0.5 uppercase tracking-wider">
                        Call 24/7
                      </div>
                      <div className="text-xl md:text-2xl font-extrabold text-slate-900 group-hover/btn:text-[#cb1b1a] transition-colors">
                        +91-XXXX-XXXXXX
                      </div>
                    </div>
                  </div>
                </a>

                <a
                  href="#whatsapp"
                  className="flex items-center justify-between p-4 md:p-5 rounded-2xl border-2 border-green-600/20 bg-white hover:border-green-600 hover:shadow-[0_8px_20px_rgba(22,163,74,0.1)] transition-all group/btn2"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-50 text-green-600 rounded-xl group-hover/btn2:bg-green-600 group-hover/btn2:text-white transition-colors duration-300">
                      <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-400 mb-0.5 uppercase tracking-wider">
                        WhatsApp
                      </div>
                      <div className="text-xl md:text-2xl font-extrabold text-slate-900 group-hover/btn2:text-green-600 transition-colors">
                        +91-XXXX-XXXXXX
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
