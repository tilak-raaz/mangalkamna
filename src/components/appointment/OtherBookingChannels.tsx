import { Phone, MessageCircle, UserPlus, Smartphone, Mail } from "lucide-react";

export default function OtherBookingChannels() {
  const channels = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91-8679026660",
      subDetails: "8:00 AM – 8:00 PM, all days",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "Message us on",
      subDetails: "+91-8679026660",
    },
    {
      icon: UserPlus,
      title: "Walk-In OPD",
      details: "Registration desk",
      subDetails: "Open from 8:00 AM daily",
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      details: "Download Mangalkamna App",
      subDetails: "Available on iOS & Android",
    },
    {
      icon: Mail,
      title: "Email",
      details: "appointments@mangalkamna.com",
      subDetails: "We reply within 2 hours",
    },
  ];

  return (
    <section className="py-20 bg-white text-center md:text-left border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="flex items-center justify-center gap-3 text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-sm mb-4">
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
            Quick Access
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Other Booking Channels
          </h2>
          <p className="text-lg text-slate-600">
            Choose the most convenient way to schedule your visit. We are
            available across multiple channels to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <div
                key={index}
                className={`p-8 rounded-[2rem] border border-slate-100 bg-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(203,27,26,0.05)] hover:-translate-y-1 transition-all duration-300 group ${index === 4 ? "lg:col-start-2" : ""}`}
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-5">
                  <div className="p-4 rounded-2xl bg-red-50 text-[#cb1b1a] group-hover:bg-[#cb1b1a] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#cb1b1a] transition-colors">
                      {channel.title}
                    </h3>
                    <p className="text-slate-700 font-medium">
                      {channel.details}
                    </p>
                    <p className="text-sm text-slate-500 mt-1">
                      {channel.subDetails}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
