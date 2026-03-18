import {
  ShieldCheck,
  FileCheck,
  Landmark,
  Building,
  FileText,
  Clock,
  CreditCard,
} from "lucide-react";

export default function InsuranceAndBilling() {
  const insurancePoints = [
    {
      icon: ShieldCheck,
      text: "All major TPA (Third Party Administrators) accepted",
    },
    {
      icon: FileCheck,
      text: "Cashless facility available — submit insurance card at admission desk",
    },
    {
      icon: Landmark,
      text: "Government schemes: Ayushman Bharat (PMJAY), State Health Schemes",
    },
    {
      icon: Building,
      text: "Corporate empanelment for employee healthcare programs",
    },
    {
      icon: FileText,
      text: "For reimbursement claims — all documents provided promptly",
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <span className="flex items-center gap-3 text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-sm mb-4">
              <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
              Financial Info
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900">
              Insurance & Billing
            </h2>
            <p className="text-slate-600 font-medium text-lg leading-relaxed">
              We tie up with leading insurance providers to offer cashless
              facilities, ensuring your focus remains entirely on recovery.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Insurance List */}
          <div className="lg:col-span-2 bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(#cb1b1a_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03] transition-opacity duration-500 rounded-bl-full"></div>

            <h3 className="text-2xl font-extrabold text-slate-900 mb-8 relative z-10">
              Insurance Empanelments
            </h3>

            <div className="space-y-6 relative z-10">
              {insurancePoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                    <point.icon className="w-5 h-5 text-[#cb1b1a]" />
                  </div>
                  <p className="text-slate-700 font-medium leading-relaxed pt-2">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Billing Info Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-[#681412] rounded-3xl p-8 text-white relative overflow-hidden group shadow-md border border-[#cb1b1a]/30">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Clock
                className="w-10 h-10 text-[#cb1b1a] mb-6"
                strokeWidth={1.5}
              />
              <h3 className="text-xl font-bold mb-4 z-10 relative">
                Billing Desk Hours
              </h3>
              <div className="space-y-3 relative z-10">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-white/80 font-medium">Mon – Sat</span>
                  <span className="font-bold">8:00 AM – 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80 font-medium">Sunday</span>
                  <span className="font-bold">9:00 AM – 5:00 PM</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:border-[#cb1b1a]/30 hover:shadow-md transition-all duration-300">
              <CreditCard
                className="w-10 h-10 text-[#681412] mb-6"
                strokeWidth={1.5}
              />
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Payment Modes
              </h3>
              <p className="text-slate-600 font-medium leading-relaxed mb-6">
                Cash, Debit / Credit Card, UPI, Net Banking, and flexible EMI
                options available.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-bold rounded-full border border-slate-100">
                  UPI
                </span>
                <span className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-bold rounded-full border border-slate-100">
                  Cards
                </span>
                <span className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-bold rounded-full border border-slate-100">
                  EMI
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
