import { CalendarDays, Clock, Stethoscope } from "lucide-react";

export default function OpdSchedule() {
  const scheduleData = [
    {
      department: "Cardiology",
      opdDays: "Mon – Sat",
      timings: "9 AM – 1 PM | 4 PM – 7 PM",
    },
    {
      department: "Orthopedics",
      opdDays: "Mon – Sat",
      timings: "10 AM – 1 PM | 5 PM – 7 PM",
    },
    {
      department: "Neurology",
      opdDays: "Tue, Thu, Sat",
      timings: "10 AM – 1 PM",
    },
    { department: "Gynaecology", opdDays: "Mon – Sat", timings: "9 AM – 2 PM" },
    { department: "Paediatrics", opdDays: "Mon – Sun", timings: "9 AM – 9 PM" },
    {
      department: "Oncology",
      opdDays: "Mon – Fri",
      timings: "10 AM – 1 PM | 3 PM – 5 PM",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="flex items-center justify-center gap-3 text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-sm mb-4">
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
            Timings & Schedule
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            OPD Schedule
          </h2>
          <p className="text-lg text-slate-600">
            View our department-wise Outpatient Department timings. Emergency
            services are available 24/7.
          </p>
        </div>

        {/* Desktop View (Table) */}
        <div className="hidden md:block rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100/50 text-slate-700 uppercase text-sm font-semibold tracking-wider">
                <th className="py-4 px-6 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <Stethoscope className="w-4 h-4 text-[#cb1b1a]" />{" "}
                    Department
                  </div>
                </th>
                <th className="py-4 px-6 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-[#cb1b1a]" /> OPD Days
                  </div>
                </th>
                <th className="py-4 px-6 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#cb1b1a]" /> Timings
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {scheduleData.map((row, index) => (
                <tr
                  key={index}
                  className="hover:bg-slate-50/50 transition-colors group"
                >
                  <td className="py-4 px-6 font-medium text-slate-900">
                    {row.department}
                  </td>
                  <td className="py-4 px-6 text-slate-600">{row.opdDays}</td>
                  <td className="py-4 px-6 text-slate-600">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-red-50 text-red-700">
                      {row.timings}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View (Cards) */}
        <div className="md:hidden space-y-4">
          {scheduleData.map((row, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-3"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2 font-semibold text-lg text-slate-900">
                  <Stethoscope className="w-5 h-5 text-[#cb1b1a]" />
                  {row.department}
                </div>
              </div>
              <div className="flex flex-col gap-2 pt-1 text-sm text-slate-600">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-500 font-medium whitespace-nowrap">
                    <CalendarDays className="w-4 h-4" /> Days
                  </span>
                  <span className="text-slate-900 font-medium text-right">
                    {row.opdDays}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-500 font-medium whitespace-nowrap">
                    <Clock className="w-4 h-4" /> Timings
                  </span>
                  <span className="text-right inline-flex items-center rounded-md font-medium text-[#cb1b1a]">
                    {row.timings}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-amber-50 rounded-2xl p-6 border border-amber-100 flex items-start gap-4">
          <div className="p-3 bg-white rounded-full text-amber-600 shadow-sm mt-1 sm:mt-0">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 text-lg">
              Note to Patients
            </h4>
            <p className="text-slate-700 mt-1">
              Schedules are subject to change. For same-day appointments or
              emergencies, please contact the{" "}
              <span className="font-medium">Registration Desk</span> or call our{" "}
              <span className="font-medium text-amber-700">24/7 Helpline</span>{" "}
              before visiting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
