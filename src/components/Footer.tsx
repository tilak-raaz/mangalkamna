import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  ArrowRight,
  MapPin,
  Phone,
  Heart,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-300 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-[#681412] rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[#cb1b1a] rounded-full blur-[150px] opacity-10 translate-y-1/3 -translate-x-1/2"></div>

      <div className="max-w-[85rem] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-white/90 p-2 rounded-xl backdrop-blur-sm inline-block">
                <img
                  src="/mangalkamna-logo.png"
                  alt="Mangalkamna Hospital Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Delivering world-class healthcare with compassion and advanced
              technology. Your health is our priority, every single day.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-[#681412] hover:text-white hover:border-[#681412] transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-[#681412] hover:text-white hover:border-[#681412] transition-all"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-[#681412] hover:text-white hover:border-[#681412] transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-[#681412] hover:text-white hover:border-[#681412] transition-all"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#about"
                  className="text-slate-400 hover:text-[#cb1b1a] transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={14}
                    className="text-[#cb1b1a] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
                  />{" "}
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-slate-400 hover:text-[#cb1b1a] transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={14}
                    className="text-[#cb1b1a] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
                  />{" "}
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#doctors"
                  className="text-slate-400 hover:text-[#cb1b1a] transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={14}
                    className="text-[#cb1b1a] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
                  />{" "}
                  Find a Doctor
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-slate-400 hover:text-[#cb1b1a] transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={14}
                    className="text-[#cb1b1a] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
                  />{" "}
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#appointment"
                  className="text-slate-400 hover:text-[#cb1b1a] transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight
                    size={14}
                    className="text-[#cb1b1a] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
                  />{" "}
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Departments Column */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-6">Departments</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#cb1b1a] transition-colors"
                >
                  Cardiology
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#cb1b1a] transition-colors"
                >
                  Neurology
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#cb1b1a] transition-colors"
                >
                  Orthopedics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#cb1b1a] transition-colors"
                >
                  Pediatrics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#cb1b1a] transition-colors"
                >
                  Dental Care
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Contact Column */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-white font-bold text-lg mb-6">
              Subscribe Summary
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Stay updated with our latest medical news, tips, and updates.
            </p>
            <form className="relative flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-slate-800/50 border border-slate-700 rounded-full py-3.5 pl-5 pr-14 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#cb1b1a] transition-colors"
                required
              />
              <button
                type="submit"
                className="absolute right-1 w-10 h-10 bg-[#cb1b1a] hover:bg-[#a51615] text-white rounded-full flex items-center justify-center transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight size={18} />
              </button>
            </form>

            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-3 text-slate-400">
                <Phone size={16} className="text-[#cb1b1a]" />
                <span className="text-sm">+1 (603) 555-0103</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Mail size={16} className="text-[#cb1b1a]" />
                <span className="text-sm">appointments@physeo.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin size={16} className="text-[#cb1b1a]" />
                <span className="text-sm">123 Healthcare Ave, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} Physeo. Designed with{" "}
            <Heart size={14} className="text-red-500 fill-red-500" /> by You.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-slate-500 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-white transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
