import {
  Building2,
  MapPin,
  Phone,
  Clock,
  Mail,
  ShieldAlert,
  Globe,
  MessagesSquare,
  Car,
} from "lucide-react";

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: Building2,
      label: "Hospital Name",
      value: "Mangalkamna Hospital",
      isPrimary: true,
    },
    {
      icon: MapPin,
      label: "Address",
      value:
        "Plot no.38P/40/47P/48P/48, Rajeev Nagar Colony opp Bombay wali bagichi, Sheetla road, Kendriya Hindi Sansthan Rd, Hariparwat ward, Agra, Uttar Pradesh 282002",
    },
    {
      icon: Phone,
      label: "Phone Numbers",
      value:
        "+91-90274-22666 | +91-86790-26660 | +91-86790-2663 | +91-86790-26663 | +91-86790-26667 | +91-86790-26669 | +91-86799-92453 | 05624-622053",
    },
    {
      icon: ShieldAlert,
      label: "Emergency (24/7)",
      value: "+91 82797 67958 | +91 9027422666",
      highlight: true,
    },
    {
      icon: Phone,
      label: "Appointments",
      value: "+91 82797 67958 | +91 9027422666 | Hospitalmangalkamna@gmail.com",
    },

    {
      icon: Clock,
      label: "Hospital Hours",
      value:
        "Saturday OPD: 9:00 AM – 3:00 PM | Sunday OPD: 9:00 AM – 2:00 PM | Emergency: 24/7",
    },
    {
      icon: Car,
      label: "Parking",
      value: "Ample Free Parking Available",
    },
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-[0_20px_40px_rgb(0,0,0,0.04)] h-full">
      <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
        <span className="w-1.5 h-6 bg-[#cb1b1a] rounded-full"></span>
        Contact Details
      </h2>

      <div className="grid grid-cols-1 gap-6">
        {contactDetails.map((detail, index) => {
          const Icon = detail.icon;
          return (
            <div
              key={index}
              className={`flex items-start gap-4 p-4 rounded-2xl transition-colors ${
                detail.highlight
                  ? "bg-red-50 border border-red-100"
                  : "hover:bg-slate-50 border border-transparent"
              }`}
            >
              <div
                className={`mt-0.5 p-2.5 rounded-xl shrink-0 ${
                  detail.highlight
                    ? "bg-[#cb1b1a] text-white"
                    : "bg-red-50 text-[#cb1b1a]"
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">
                  {detail.label}
                </p>
                <div
                  className={`font-medium ${
                    detail.isPrimary
                      ? "text-lg text-slate-900 font-bold"
                      : detail.highlight
                        ? "text-[#cb1b1a] font-bold text-lg"
                        : "text-slate-700"
                  }`}
                >
                  {detail.value.split(" | ").map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <span className="mx-2 text-slate-300">|</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
