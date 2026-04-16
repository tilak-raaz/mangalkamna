"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  Menu,
  X,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
        {/* Marquee Banner */}
        <div className="w-full bg-gradient-to-r from-[#cb1b1a] via-[#e82726] to-[#cb1b1a] text-white py-2.5 overflow-hidden relative shadow-[0_2px_10px_rgba(203,27,26,0.2)]">
          <div className="flex whitespace-nowrap animate-marquee w-max hover:[animation-play-state:paused]">
            <div className="flex gap-16 px-8 text-xs md:text-sm font-bold tracking-wide items-center drop-shadow-sm">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>{" "}
                24/7 Emergency Care Available
              </span>
              <span className="text-white/60">|</span>
              <span>📱 WhatsApp / Call: +91 82797 67958</span>
              <span className="text-white/60">|</span>
              <span>
                Departments: Cardiology, Neurology, Orthopedics, Pediatrics,
                General Surgery
              </span>
              <span className="text-white/60">|</span>
              <span>Advanced Lab Testing Services</span>
              <span className="text-white/60">|</span>
              <span>24/7 In-House Pharmacy</span>
            </div>
            <div className="flex gap-16 px-8 text-xs md:text-sm font-bold tracking-wide items-center drop-shadow-sm">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>{" "}
                24/7 Emergency Care Available
              </span>
              <span className="text-white/60">|</span>
              <span>📱 WhatsApp / Call: +91 82797 67958</span>
              <span className="text-white/60">|</span>
              <span>
                Departments: Cardiology, Neurology, Orthopedics, Pediatrics,
                General Surgery
              </span>
              <span className="text-white/60">|</span>
              <span>Advanced Lab Testing Services</span>
              <span className="text-white/60">|</span>
              <span>24/7 In-House Pharmacy</span>
            </div>
          </div>
        </div>

        {/* Top Bar */}
        <div className="hidden lg:flex items-center justify-between px-6 md:px-12 lg:px-24 py-3 bg-gradient-to-r from-[#4a0e0d] via-[#681412] to-[#4a0e0d] text-white/90 text-sm font-medium shadow-lg relative z-10 border-b border-white/5">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2.5 hover:text-white/80 transition-colors cursor-pointer">
              <Mail size={16} />
              <a href="mailto:Hospitalmangalkamna@gmail.com">
                Hospitalmangalkamna@gmail.com
              </a>
            </div>
            <div className="hidden xl:block w-px h-4 bg-white/30"></div>
            <div className="flex items-center gap-2.5 hover:text-white/80 transition-colors cursor-pointer">
              <Phone size={16} />
              <a href="tel:+918279767958">+91 82797 67958</a>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-white/80 text-xs mr-2 uppercase tracking-wider font-bold">
              Follow Us
            </span>
            <a
              href="#"
              className="hover:-translate-y-0.5 hover:text-white/80 transition-all"
              aria-label="Facebook"
            >
              <Facebook size={16} strokeWidth={2.5} />
            </a>
            <a
              href="#"
              className="hover:-translate-y-0.5 hover:text-white/80 transition-all"
              aria-label="Twitter"
            >
              <Twitter size={16} strokeWidth={2.5} />
            </a>
            <a
              href="#"
              className="hover:-translate-y-0.5 hover:text-white/80 transition-all"
              aria-label="Instagram"
            >
              <Instagram size={16} strokeWidth={2.5} />
            </a>
            <a
              href="#"
              className="hover:-translate-y-0.5 hover:text-white/80 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} strokeWidth={2.5} />
            </a>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="w-full py-2 lg:py-3 px-6 md:px-12 lg:px-24 bg-white/95 lg:bg-white/80 backdrop-blur-md lg:backdrop-blur-md border-b border-slate-100 lg:border-slate-100 shadow-sm lg:shadow-sm transition-all duration-300">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 relative z-[60]">
              <Image
                src="/mangalkamna-logo.png"
                alt="Mangalkamna Hospital Logo"
                width={280}
                height={180}
                className="h-8 md:h-12 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
              <Link
                href="/"
                className="text-[#681412] hover:text-[#cb1b1a] transition-colors font-bold"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-[#681412]/80 hover:text-[#cb1b1a] transition-colors font-bold"
              >
                About Us
              </Link>
              <Link
                href="/departments"
                className="text-[#681412]/80 hover:text-[#cb1b1a] transition-colors font-bold"
              >
                Departments
              </Link>
              <Link
                href="/contact"
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
                    href="/doctors"
                    className="px-4 py-2.5 hover:bg-slate-50 text-slate-700 hover:text-[#cb1b1a] text-sm font-semibold rounded-xl transition-colors"
                  >
                    Doctors & Medical Team
                  </Link>
                  <Link
                    href="/services"
                    className="px-4 py-2.5 hover:bg-slate-50 text-slate-700 hover:text-[#cb1b1a] text-sm font-semibold rounded-xl transition-colors"
                  >
                    Services & Treatments
                  </Link>
                  <Link
                    href="/patient-information"
                    className="px-4 py-2.5 hover:bg-slate-50 text-slate-700 hover:text-[#cb1b1a] text-sm font-semibold rounded-xl transition-colors"
                  >
                    Patient Information
                  </Link>
                  <Link
                    href="/emergency"
                    className="px-4 py-2.5 hover:bg-slate-50 text-slate-700 hover:text-[#cb1b1a] text-sm font-semibold rounded-xl transition-colors"
                  >
                    Emergency / Urgent Care
                  </Link>
                  <Link
                    href="/appointment"
                    className="px-4 py-2.5 hover:bg-slate-50 text-slate-700 hover:text-[#cb1b1a] text-sm font-semibold rounded-xl transition-colors"
                  >
                    Appointments & Booking
                  </Link>

                  <Link
                    href="/gallery"
                    className="px-4 py-2.5 hover:bg-slate-50 text-slate-700 hover:text-[#cb1b1a] text-sm font-semibold rounded-xl transition-colors"
                  >
                    Gallery
                  </Link>
                  <Link
                    href="/testimonials"
                    className="px-4 py-2.5 hover:bg-slate-50 text-slate-700 hover:text-[#cb1b1a] text-sm font-semibold rounded-xl transition-colors"
                  >
                    Testimonials
                  </Link>
                  <Link
                    href="/news"
                    className="px-4 py-2.5 hover:bg-slate-50 text-slate-700 hover:text-[#cb1b1a] text-sm font-semibold rounded-xl transition-colors"
                  >
                    News & Health Blog
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 lg:gap-6 relative z-[60]">
              <div className="hidden md:flex flex-col items-end">
                <span className="text-[10px] text-[#681412] uppercase tracking-widest font-bold leading-none">
                  Emergency
                </span>
                <span className="text-sm font-bold text-[#cb1b1a]">
                  +91 82797 67958
                </span>
              </div>
              <Link
                href="/appointment"
                className="hidden sm:inline-flex px-5 md:px-6 py-2 md:py-2.5 rounded-full bg-[#cb1b1a] text-white text-xs md:text-sm font-semibold hover:bg-[#681412] transition-colors shadow-lg shadow-[#cb1b1a]/30"
              >
                {" "}
                Book Appointment
              </Link>

              {/* Hamburger Button for mobile */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden flex items-center justify-center p-2.5 bg-white/90 backdrop-blur-sm text-[#cb1b1a] rounded-xl shadow-sm border border-[#cb1b1a]/20 hover:bg-[#cb1b1a] hover:text-white transition-all duration-300 active:scale-95"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? (
                  <X size={22} strokeWidth={2.5} />
                ) : (
                  <Menu size={22} strokeWidth={2.5} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          <div
            className={`fixed inset-0 min-h-screen bg-white transition-all duration-500 ease-in-out z-50 lg:hidden flex flex-col pt-28 px-6 ${
              isMobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-full pointer-events-none"
            }`}
          >
            <div className="flex flex-col gap-6 text-xl font-bold text-[#681412]">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="border-b border-gray-100 pb-4 hover:text-[#cb1b1a] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="border-b border-gray-100 pb-4 hover:text-[#cb1b1a] transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/departments"
                onClick={() => setIsMobileMenuOpen(false)}
                className="border-b border-gray-100 pb-4 hover:text-[#cb1b1a] transition-colors"
              >
                Departments
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="border-b border-gray-100 pb-4 hover:text-[#cb1b1a] transition-colors"
              >
                Contact Us
              </Link>

              <div className="pt-2 flex flex-col gap-4 text-base font-semibold text-[#681412]/80">
                <Link
                  href="/doctors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Doctors & Team
                </Link>
                <Link
                  href="/patient-information"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Patient Info
                </Link>
                <Link
                  href="/emergency"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Emergency Care
                </Link>
                <Link
                  href="/gallery"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Gallery
                </Link>
                <Link
                  href="/testimonials"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Testimonials
                </Link>
              </div>

              <div className="mt-8">
                <Link
                  href="/appointment"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-4 rounded-full bg-[#cb1b1a] text-white text-center font-bold shadow-lg shadow-[#cb1b1a]/30 active:bg-[#681412] inline-block"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Global top padding to offset the fixed header */}
      <div
        className="h-[104px] lg:h-[105px] w-full invisible pointer-events-none"
        aria-hidden="true"
      />
    </>
  );
}
