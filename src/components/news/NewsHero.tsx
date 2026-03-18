import { FileText } from "lucide-react";

export default function NewsHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-50 to-white overflow-hidden border-b border-slate-100">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-3 bg-red-50 rounded-2xl mb-8">
            <FileText className="w-8 h-8 text-[#cb1b1a]" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Health Insights, Hospital News &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cb1b1a] to-rose-600">
              Wellness Tips
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Stay informed with expert health advice, the latest medical
            breakthroughs, hospital announcements, and practical wellness tips —
            written by our specialists for you.
          </p>
        </div>
      </div>
    </section>
  );
}
