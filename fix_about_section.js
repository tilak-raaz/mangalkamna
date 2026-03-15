const fs = require('fs');

const fileContent = `import { CheckCircle2, ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative background elements to make typography pop */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(#cb1b1a_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] -z-10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#cb1b1a]/5 to-transparent rounded-full -z-10 blur-3xl -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10 text-center">
        <div className="space-y-12">
          
          {/* Header Typography */}
          <div className="flex flex-col items-center">
            <span className="flex items-center gap-4 text-[#cb1b1a] font-bold tracking-[0.25em] uppercase text-sm mb-6">
              <span className="w-12 h-0.5 bg-[#cb1b1a]/50"></span>
              About Us
              <span className="w-12 h-0.5 bg-[#cb1b1a]/50"></span>
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-8">
              Compassionate Care. <br />
              <span className="text-[#681412]">Advanced Medicine.</span>
            </h2>
            
            <p className="text-slate-600 text-[1.125rem] md:text-xl lg:text-[1.35rem] leading-[1.8] max-w-4xl font-medium text-center balance">
              Welcome to <span className="text-slate-900 font-bold">Mangalkamna Hospital</span> — a trusted healthcare institution serving our community for over <span className="text-[#cb1b1a] font-bold border-b-2 border-[#cb1b1a]/20">15 years</span>. We combine cutting-edge medical technology with a highly experienced team of specialists to provide world-class treatment across all major disciplines. Whether you need routine check-ups, advanced surgical procedures, or critical emergency care, we are here for you — every step of the way.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            <div className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#cb1b1a]/20 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(203,27,26,0.1)] transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#cb1b1a]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="text-[#cb1b1a]" size={28} strokeWidth={2.5} />
              </div>
              <p className="text-center font-bold text-slate-800 text-lg leading-tight">
                Certified <br />
                <span className="text-slate-500 font-medium text-sm">Specialists</span>
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#cb1b1a]/20 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(203,27,26,0.1)] transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#cb1b1a]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="text-[#cb1b1a]" size={28} strokeWidth={2.5} />
              </div>
              <p className="text-center font-bold text-slate-800 text-lg leading-tight">
                Modern <br />
                <span className="text-slate-500 font-medium text-sm">Technology</span>
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#cb1b1a]/20 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(203,27,26,0.1)] transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#cb1b1a]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="text-[#cb1b1a]" size={28} strokeWidth={2.5} />
              </div>
              <p className="text-center font-bold text-slate-800 text-lg leading-tight">
                24/7 Patient <br />
                <span className="text-slate-500 font-medium text-sm">Support</span>
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#cb1b1a]/20 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(203,27,26,0.1)] transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#cb1b1a]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="text-[#cb1b1a]" size={28} strokeWidth={2.5} />
              </div>
              <p className="text-center font-bold text-slate-800 text-lg leading-tight">
                Affordable <br />
                <span className="text-slate-500 font-medium text-sm">Packages</span>
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8 flex justify-center">
            <button className="flex items-center gap-3 text-[#681412] font-bold text-lg group">
              <span className="border-b-2 border-transparent group-hover:border-[#681412] transition-all pb-1">
                Learn More About Our Hospital
              </span>
              <span className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-[#681412] group-hover:text-white transition-colors">
                <ArrowRight size={20} />
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync('src/components/AboutSection.tsx', fileContent, 'utf8');
console.log('Successfully overwrote AboutSection.tsx');
