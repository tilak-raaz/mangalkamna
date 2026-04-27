import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

const newsArticles = [
  {
    id: 1,
    title: "Preventing Kidney Stones: Hydration and Dietary Changes",
    category: "Urology",
    date: "April 18, 2026",
    excerpt:
      "Discover the most effective lifestyle modifications and dietary adjustments to prevent the formation of painful kidney stones and maintain optimal renal health.",
    image:
      "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&q=80&w=2670",
  },
  {
    id: 2,
    title: "Understanding Prostate Health: When to Get Screened",
    category: "Urology",
    date: "April 05, 2026",
    excerpt:
      "An essential guide to the warning signs of prostate enlargement (BPH) and the critical importance of regular PSA screenings for early detection.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=2670",
  },
  {
    id: 3,
    title: "Managing Overactive Bladder: Modern Treatment Options",
    category: "Urology",
    date: "March 22, 2026",
    excerpt:
      "Explore the latest advancements in treating overactive bladder, ranging from targeted behavioral therapies and medications to minimally invasive procedures.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2670",
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#cb1b1a]/5 to-[#681412]/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-[85rem] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="flex items-center gap-3 text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-sm mb-4">
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
            Our Blog
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
            Latest News & <span className="text-[#681412]">Health Tips</span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
            Stay updated with the latest medical advancements, healthy living
            advice, and hospital news from our expert medical team.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <article
              key={article.id}
              className="flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-[0_20px_50px_rgba(104,20,18,0.1)] hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  style={{ backgroundImage: `url('${article.image}')` }}
                ></div>
                {/* Category Tag Over Image */}
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-white/95 backdrop-blur-sm text-[#cb1b1a] text-xs font-black uppercase tracking-widest rounded-full shadow-sm">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="flex flex-col flex-grow p-6 md:p-8">
                {/* Meta details */}
                <div className="flex items-center gap-4 text-slate-500 text-sm font-medium mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={16} className="text-[#681412]/60" />
                    <span>{article.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug mb-4 group-hover:text-[#681412] transition-colors line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-600 leading-relaxed line-clamp-3 mb-8 flex-grow">
                  {article.excerpt}
                </p>

                {/* Read More Link */}
                <div className="mt-auto">
                  <Link
                    href={`/news/${article.id}`}
                    className="inline-flex items-center gap-2 text-[#681412] font-bold text-[15px] group/btn"
                  >
                    <span className="border-b-2 border-transparent group-hover/btn:border-[#681412] transition-all pb-0.5">
                      Read More
                    </span>
                    <span className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center group-hover/btn:bg-[#681412] group-hover/btn:text-white transition-colors">
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Global CTA Button */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/news"
            className="flex items-center gap-3 bg-[#681412] text-white px-10 py-5 rounded-full font-bold hover:bg-[#a51615] transition-all duration-300 shadow-xl shadow-[#681412]/20 hover:shadow-[#681412]/40 group text-lg hover:-translate-y-1"
          >
            <span>View All Articles & Health Tips</span>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#681412] transition-colors">
              <ArrowRight
                size={18}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
