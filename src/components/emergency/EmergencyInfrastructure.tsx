import {
  ShieldPlus,
  Activity,
  Clock,
  Stethoscope,
  Droplet,
  Truck,
} from "lucide-react";

export default function EmergencyInfrastructure() {
  const infrastructureData = [
    {
      facility: "Emergency Bays",
      description: "10 fully equipped emergency bays with monitoring systems",
      icon: Activity,
    },
    {
      facility: "Trauma OR",
      description:
        "Dedicated operation theatres available 24/7 for emergencies",
      icon: ShieldPlus,
    },
    {
      facility: "ICU",
      description: "50-bed ICU with round-the-clock intensivist coverage",
      icon: Stethoscope,
    },
    {
      facility: "Ambulances",
      description: "Fleet of 8 advanced life support (ALS) ambulances",
      icon: Truck,
    },
    {
      facility: "Response Time",
      description: "Target: Door-to-Doctor in under 5 minutes",
      icon: Clock,
    },
    {
      facility: "Blood Bank",
      description: "24/7 blood bank with all blood groups available",
      icon: Droplet,
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="flex items-center justify-center gap-3 text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-sm mb-4">
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
            Facilities
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Emergency Infrastructure
          </h2>
          <p className="text-lg text-slate-600">
            Rapid response requires the right tools. Our hospital is equipped
            with state-of-the-art emergency facilities to ensure immediate and
            continuous care.
          </p>
        </div>

        {/* Desktop View (Table) */}
        <div className="hidden md:block rounded-[2rem] overflow-hidden border border-slate-200 bg-white shadow-sm p-2">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 text-sm font-semibold uppercase tracking-wider">
                <th className="py-4 px-6">Facility</th>
                <th className="py-4 px-6">Description / Capacity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {infrastructureData.map((row, index) => {
                const Icon = row.icon;
                return (
                  <tr
                    key={index}
                    className="hover:bg-slate-50/70 transition-colors group"
                  >
                    <td className="py-5 px-6 font-semibold text-slate-900">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-red-50 text-[#cb1b1a]">
                          <Icon className="w-5 h-5" />
                        </div>
                        {row.facility}
                      </div>
                    </td>
                    <td className="py-5 px-6 text-slate-600 font-medium">
                      {row.description}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile View (Cards) */}
        <div className="md:hidden space-y-4">
          {infrastructureData.map((row, index) => {
            const Icon = row.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-3 group"
              >
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <div className="p-2.5 rounded-xl bg-red-50 text-[#cb1b1a]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900">
                    {row.facility}
                  </h3>
                </div>
                <div className="pt-1">
                  <p className="text-slate-600 font-medium text-sm leading-relaxed">
                    {row.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
