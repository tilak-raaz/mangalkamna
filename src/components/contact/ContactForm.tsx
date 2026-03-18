"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl border border-slate-100 p-10 shadow-[0_20px_40px_rgb(0,0,0,0.04)] h-full flex flex-col items-center justify-center text-center min-h-[600px]">
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">
          Message Sent Successfully!
        </h3>
        <p className="text-slate-600 mb-8 max-w-sm">
          Thank you for reaching out. Our team will get back to you within 24
          business hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-3 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 rounded-3xl p-8 relative overflow-hidden h-full shadow-2xl shadow-slate-900/20">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#cb1b1a] rounded-full blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/3"></div>

      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
          <span className="w-1.5 h-6 bg-[#cb1b1a] rounded-full"></span>
          Send us a Message
        </h2>
        <p className="text-slate-400 mb-8 text-sm">
          Fill out the form below and we securely receive your information.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-semibold text-slate-300 mb-2"
            >
              Full Name*
            </label>
            <input
              type="text"
              id="fullName"
              required
              className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#cb1b1a] focus:ring-1 focus:ring-[#cb1b1a] transition-all placeholder:text-slate-500"
              placeholder="John Doe"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-slate-300 mb-2"
              >
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#cb1b1a] focus:ring-1 focus:ring-[#cb1b1a] transition-all placeholder:text-slate-500"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-slate-300 mb-2"
              >
                Phone Number*
              </label>
              <input
                type="tel"
                id="phone"
                required
                className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#cb1b1a] focus:ring-1 focus:ring-[#cb1b1a] transition-all placeholder:text-slate-500"
                placeholder="+91 98765 43210"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-semibold text-slate-300 mb-2"
            >
              Subject*
            </label>
            <select
              id="subject"
              required
              defaultValue=""
              className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#cb1b1a] focus:ring-1 focus:ring-[#cb1b1a] transition-all appearance-none"
            >
              <option value="" disabled hidden>
                Select an option
              </option>
              <option value="general">General Enquiry</option>
              <option value="appointment">Appointment</option>
              <option value="feedback">Feedback</option>
              <option value="billing">Bill Query</option>
              <option value="complaint">Complaint</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-slate-300 mb-2"
            >
              Message*
            </label>
            <textarea
              id="message"
              required
              rows={4}
              className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#cb1b1a] focus:ring-1 focus:ring-[#cb1b1a] transition-all placeholder:text-slate-500 resize-none"
              placeholder="How can we help you today?"
            ></textarea>
          </div>

          {/* CAPTCHA mock */}
          <div className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
            <input
              type="checkbox"
              id="captcha"
              required
              className="w-5 h-5 rounded border-slate-600 text-[#cb1b1a] focus:ring-[#cb1b1a] bg-slate-700 cursor-pointer"
            />
            <label
              htmlFor="captcha"
              className="text-sm text-slate-300 cursor-pointer select-none"
            >
              I am human (CAPTCHA verification)*
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#cb1b1a] hover:bg-rose-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-red-900/20 disabled:opacity-70 disabled:cursor-not-allowed group mt-2"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            {!isSubmitting && (
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            )}
          </button>

          <p className="text-center text-xs text-slate-400 mt-4">
            Response time note: We respond within{" "}
            <span className="text-slate-300 font-semibold">
              24 business hours
            </span>
            .
          </p>
        </form>
      </div>
    </div>
  );
}
