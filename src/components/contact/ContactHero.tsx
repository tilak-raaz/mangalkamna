import { Headphones } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-50 to-white overflow-hidden border-b border-slate-100">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-3 bg-red-50 rounded-2xl mb-8">
            <Headphones className="w-8 h-8 text-[#cb1b1a]" />
          </div>

          <span className="flex items-center justify-center gap-3 text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-sm mb-4">
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
            CONTACT US
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Get in Touch —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cb1b1a] to-rose-600">
              We're Here to Help
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Have questions? Need to find a specialist? Want to book an
            appointment? Reach out to us through any of the channels below.
          </p>
        </div>
      </div>
    </section>
  );
}
