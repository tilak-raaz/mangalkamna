import {
  Activity,
  HeartPulse,
  Brain,
  Car,
  Baby,
  ShieldPlus,
  Skull,
  Flame,
  Wind,
  Syringe,
} from "lucide-react";

export default function EmergencyServices() {
  const services = [
    { name: "Trauma & Critical Injury Management", icon: ShieldPlus },
    { name: "Cardiac Arrest & Heart Attack Response", icon: HeartPulse },
    { name: "Stroke & Neurological Emergencies", icon: Brain },
    { name: "Accident & Multi-trauma Care", icon: Car },
    { name: "Paediatric Emergency Services", icon: Baby },
    { name: "Obstetric & Gynaecological Emergencies", icon: Activity },
    { name: "Poisoning & Toxicology", icon: Skull },
    { name: "Burns & Reconstructive Emergency Care", icon: Flame },
    { name: "Respiratory Emergencies (ICU Support)", icon: Wind },
    { name: "Post-surgical Emergency Response", icon: Syringe },
  ];

  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="flex items-center justify-center gap-3 text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-sm mb-4">
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
            Expert Care
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Emergency Services Offered
          </h2>
          <p className="text-lg text-slate-600">
            Our specialized emergency medical teams are highly trained to handle
            all critical, life-threatening scenarios with immediate response
            protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-[#cb1b1a]/20 transition-all duration-300 group flex items-center gap-4"
              >
                <div className="p-4 rounded-xl bg-red-50 text-[#cb1b1a] group-hover:bg-[#cb1b1a] group-hover:text-white transition-colors duration-300 shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-[#cb1b1a] transition-colors leading-tight">
                  {service.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
