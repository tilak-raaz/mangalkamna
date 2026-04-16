import { MapPin, Phone, Mail, Clock, CalendarCheck } from "lucide-react";

export default function AppointmentSection() {
  return (
    <section
      id="appointment"
      className="py-24 bg-slate-50 relative overflow-hidden"
    >
      {/* Background Decor Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-200/50 -z-10 hidden lg:block"></div>

      <div className="max-w-[85rem] mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <span className="flex items-center justify-center gap-3 text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-sm mb-4">
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
            Book Now
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
            Schedule Your <span className="text-[#681412]">Appointment</span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
            Take the first step toward better health. Fill out the form below,
            and our team will get back to you to confirm your visit.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch">
          {/* Left Form Side */}
          <div className="w-full lg:w-3/5 bg-white p-6 sm:p-8 md:p-12 rounded-[2rem] lg:rounded-[2.5rem] shadow-[0_20px_50px_rgba(15,23,42,0.06)] border border-slate-100 z-10 relative">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-bold text-slate-800 ml-1"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-5 py-4 rounded-[1rem] bg-slate-50/50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#cb1b1a] focus:ring-4 focus:ring-[#cb1b1a]/10 transition-all font-medium placeholder:font-normal placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-bold text-slate-800 ml-1"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-5 py-4 rounded-[1rem] bg-slate-50/50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#cb1b1a] focus:ring-4 focus:ring-[#cb1b1a]/10 transition-all font-medium placeholder:font-normal placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold text-slate-800 ml-1"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 rounded-[1rem] bg-slate-50/50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#cb1b1a] focus:ring-4 focus:ring-[#cb1b1a]/10 transition-all font-medium placeholder:font-normal placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="date"
                    className="text-sm font-bold text-slate-800 ml-1"
                  >
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="w-full px-5 py-4 rounded-[1rem] bg-slate-50/50 border border-slate-200 text-slate-500 focus:text-slate-900 focus:outline-none focus:border-[#cb1b1a] focus:ring-4 focus:ring-[#cb1b1a]/10 transition-all font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="service"
                  className="text-sm font-bold text-slate-800 ml-1"
                >
                  Service Needed <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="service"
                    defaultValue=""
                    className="w-full px-5 py-4 rounded-[1rem] bg-slate-50/50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#cb1b1a] focus:ring-4 focus:ring-[#cb1b1a]/10 transition-all appearance-none cursor-pointer font-medium"
                  >
                    <option value="" disabled>
                      Select a medical service
                    </option>
                    <option value="cardiology">Cardiology Center</option>
                    <option value="neurology">Neurology</option>
                    <option value="orthopedics">Orthopedics & Sports</option>
                    <option value="pediatrics">Pediatric Care</option>
                    <option value="dentistry">Dental Care</option>
                    <option value="general">General Consultation</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="notes"
                  className="text-sm font-bold text-slate-800 ml-1"
                >
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  rows={4}
                  placeholder="Any specific concerns or symptoms we should know about beforehand?"
                  className="w-full px-5 py-4 rounded-[1rem] bg-slate-50/50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#cb1b1a] focus:ring-4 focus:ring-[#cb1b1a]/10 transition-all font-medium placeholder:font-normal placeholder:text-slate-400 resize-none"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full py-4 px-8 bg-[#681412] hover:bg-[#4a0e0d] text-white rounded-[1rem] font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-red-900/25 hover:shadow-xl hover:-translate-y-0.5 group mt-2"
              >
                Confirm Appointment
                <CalendarCheck
                  size={20}
                  className="group-hover:scale-110 group-hover:rotate-3 transition-transform"
                />
              </button>
            </form>
          </div>

          {/* Right Contact Side - Upgraded Premium Aesthetic */}
          <div className="w-full lg:w-2/5 min-h-[500px] bg-[#681412] rounded-[2rem] lg:rounded-[2.5rem] p-8 md:p-10 lg:p-12 text-white relative overflow-hidden flex flex-col shadow-2xl">
            {/* Decors */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#cb1b1a] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-400 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 opacity-20"></div>

            <div className="relative z-10 flex-1 flex flex-col">
              <h3 className="text-3xl font-bold mb-3 tracking-tight">
                Contact Info
              </h3>
              <p className="text-red-100/80 mb-10 text-[15px] leading-relaxed max-w-sm">
                Prefer to speak to a human? Reach out to our front desk directly
                using the details below.
              </p>

              <div className="space-y-8 lg:space-y-10">
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#cb1b1a] group-hover:border-[#cb1b1a] transition-all duration-300 shadow-lg">
                    <MapPin
                      className="text-white"
                      size={20}
                      strokeWidth={2.5}
                    />
                  </div>
                  <div className="pt-0.5">
                    <h5 className="font-bold text-[17px] mb-1 text-white">
                      Our Location
                    </h5>
                    <a
                      href="https://maps.google.com/?q=Plot+no.38P/40/47P/48P/48,+Rajeev+Nagar+Colony+opp+Bombay+wali+bagichi,+Sheetla+road,+Kendriya+Hindi+Sansthan+Rd,+Hariparwat+ward,+Agra,+Uttar+Pradesh+282002"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-100/80 leading-relaxed text-[15px] hover:text-white transition-colors"
                    >
                      Plot no.38P/40/47P/48P/48,
                      <br />
                      Rajeev Nagar Colony opp Bombay wali bagichi, Sheetla road,
                      <br />
                      Kendriya Hindi Sansthan Rd, Hariparwat ward,
                      <br />
                      Agra, Uttar Pradesh 282002
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#cb1b1a] group-hover:border-[#cb1b1a] transition-all duration-300 shadow-lg">
                    <Phone className="text-white" size={20} strokeWidth={2.5} />
                  </div>
                  <div className="pt-0.5">
                    <h5 className="font-bold text-[17px] mb-1 text-white">
                      Phone Number
                    </h5>
                    <p className="text-red-100/80 leading-relaxed text-[15px]">
                      +91 82797 67958
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#cb1b1a] group-hover:border-[#cb1b1a] transition-all duration-300 shadow-lg">
                    <Mail className="text-white" size={20} strokeWidth={2.5} />
                  </div>
                  <div className="pt-0.5">
                    <h5 className="font-bold text-[17px] mb-1 text-white">
                      Email Address
                    </h5>
                    <p className="text-red-100/80 leading-relaxed text-[15px]">
                      Hospitalmangalkamna@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom stylized medical image placeholder */}
              <div className="mt-12 pt-8 w-full relative z-10 border-t border-white/10">
                <div className="flex items-center gap-4 text-red-100/80">
                  <Clock
                    size={20}
                    className="text-[#cb1b1a] shrink-0"
                    strokeWidth={2.5}
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Working Hours
                    </p>
                    <p className="text-[13px]">
                      Mon-Fri: 8AM - 8PM • Sat-Sun: Emergency
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
