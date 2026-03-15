import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between py-6 px-6 md:px-12 lg:px-24 bg-transparent">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/mangalkamna-logo.png"
          alt="Mangalkamna Hospital Logo"
          width={280}
          height={180}
          className="h-14 w-auto object-contain"
          priority
        />
      </Link>

      <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
        <Link
          href="/"
          className="text-[#681412] hover:text-[#cb1b1a] transition-colors font-bold"
        >
          Home
        </Link>
        <Link
          href="#about"
          className="text-[#681412]/80 hover:text-[#cb1b1a] transition-colors font-bold"
        >
          About Us
        </Link>
        <Link
          href="#services"
          className="text-[#681412]/80 hover:text-[#cb1b1a] transition-colors font-bold"
        >
          Departments
        </Link>
        <Link
          href="#contact"
          className="text-[#681412]/80 hover:text-[#cb1b1a] transition-colors font-bold"
        >
          Contact Us
        </Link>

        {/* More Menu Dropdown */}
        <div className="relative group py-2">
          <button className="flex items-center gap-1 text-[#681412]/80 hover:text-[#cb1b1a] transition-colors font-bold outline-none">
            More{" "}
            <ChevronDown
              size={14}
              className="group-hover:-rotate-180 transition-transform duration-300"
            />
          </button>

          <div className="absolute top-full -left-20 w-64 bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0 p-3 flex flex-col gap-1 z-50">
            <Link
              href="#doctors"
              className="px-4 py-2.5 hover:bg-slate-50 text-slate-700 hover:text-[#cb1b1a] text-sm font-semibold rounded-xl transition-colors"
            >
              Doctors & Medical Team
            </Link>
            <Link
              href="#services-treatments"
              className="px-4 py-2.5 hover:bg-slate-50 text-slate-700 hover:text-[#cb1b1a] text-sm font-semibold rounded-xl transition-colors"
            >
              Services & Treatments
            </Link>
            <Link
              href="#patient-info"
              className="px-4 py-2.5 hover:bg-slate-50 text-slate-700 hover:text-[#cb1b1a] text-sm font-semibold rounded-xl transition-colors"
            >
              Patient Information
            </Link>
            <Link
              href="#appointment"
              className="px-4 py-2.5 hover:bg-slate-50 text-slate-700 hover:text-[#cb1b1a] text-sm font-semibold rounded-xl transition-colors"
            >
              Appointments & Booking
            </Link>
            <Link
              href="#emergency"
              className="px-4 py-2.5 hover:bg-slate-50 text-slate-700 hover:text-[#cb1b1a] text-sm font-semibold rounded-xl transition-colors"
            >
              Emergency & Urgent Care
            </Link>
            <Link
              href="#gallery"
              className="px-4 py-2.5 hover:bg-slate-50 text-slate-700 hover:text-[#cb1b1a] text-sm font-semibold rounded-xl transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="#testimonials"
              className="px-4 py-2.5 hover:bg-slate-50 text-slate-700 hover:text-[#cb1b1a] text-sm font-semibold rounded-xl transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#news"
              className="px-4 py-2.5 hover:bg-slate-50 text-slate-700 hover:text-[#cb1b1a] text-sm font-semibold rounded-xl transition-colors"
            >
              News & Health Blog
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex flex-col items-end">
          <span className="text-[10px] text-[#681412] uppercase tracking-widest font-bold leading-none">
            Emergency
          </span>
          <span className="text-sm font-bold text-[#cb1b1a]">
            (603) 555-0123
          </span>
        </div>
        <Link
          href="#appointment"
          className="px-6 py-3 rounded-full bg-[#cb1b1a] text-white text-sm font-semibold hover:bg-[#681412] transition-colors shadow-lg shadow-[#cb1b1a]/30"
        >
          Book Appointment
        </Link>
      </div>
    </nav>
  );
}
