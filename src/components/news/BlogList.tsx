"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, User } from "lucide-react";

const CATEGORIES = [
  "All",
  "Urology Care",
  "Kidney Care",
  "Kidney Disease Management",
  "Urological Procedures",
  "Prostate Health",
  "Male Infertility",
  "Preventive Care",
  "Patient Testimonials",
  "Hospital News & Announcements",
];

const ARTICLES = [
  {
    id: "1",
    title: "Comprehensive Guide to Kidney Disease: Prevention and Management",
    category: "Kidney Care",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80",
    date: "Apr 20, 2026",
    readTime: "6 min read",
    author: "Dr. Shekhar Vajpeyi",
    excerpt:
      "Learn about chronic kidney disease, its risk factors, and evidence-based management strategies to protect your renal health.",
    slug: "kidney-disease-prevention-management",
  },
  {
    id: "2",
    title: "Understanding Urology: Common Conditions and Treatment Options",
    category: "Urology Care",
    image:
      "https://images.unsplash.com/photo-1628595351029-c29e9620e401?auto=format&fit=crop&q=80",
    date: "Apr 15, 2026",
    readTime: "5 min read",
    author: "Dr. Vinayak Vajpeyi",
    excerpt:
      "From prostate health to urinary tract infections, explore common urological conditions and modern treatment approaches.",
    slug: "understanding-urology-treatment",
  },
  {
    id: "3",
    title: "Prostate Health: When to Seek Medical Attention",
    category: "Prostate Health",
    image:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80",
    date: "Apr 10, 2026",
    readTime: "5 min read",
    author: "Dr. Shekhar Vajpeyi",
    excerpt:
      "Understanding prostate enlargement, cancer screening, and available treatment options for optimal prostate health.",
    slug: "prostate-health-care",
  },
  {
    id: "4",
    title: "Kidney Stone Surgery: Advanced Minimally Invasive Techniques",
    category: "Urological Procedures",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80",
    date: "Apr 05, 2026",
    readTime: "6 min read",
    author: "Dr. Vinayak Vajpeyi",
    excerpt:
      "Explore modern approaches to kidney stone removal including RIRS, PCNL, and laser lithotripsy for better outcomes.",
    slug: "kidney-stone-surgery-techniques",
  },
  {
    id: "5",
    title: "Male Infertility: Causes, Diagnosis, and Modern Treatments",
    category: "Male Infertility",
    image:
      "https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?auto=format&fit=crop&q=80",
    date: "Mar 28, 2026",
    readTime: "7 min read",
    author: "Dr. Shekhar Vajpeyi",
    excerpt:
      "Comprehensive guide to male infertility evaluation and treatment options, including surgical and advanced medical interventions.",
    slug: "male-infertility-treatment",
  },
  {
    id: "6",
    title: "Dialysis vs Transplant: Understanding Your Renal Replacement Options",
    category: "Kidney Disease Management",
    image:
      "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&q=80",
    date: "Mar 22, 2026",
    readTime: "6 min read",
    author: "Mangalkamna Hospital Team",
    excerpt:
      "Learn about different renal replacement therapies and how to choose the right option for your kidney care journey.",
    slug: "renal-replacement-options",
  },
  {
    id: "7",
    title: "Mangalkamna Hospital Upgrades Advanced Laser Lithotripsy Services",
    category: "Hospital News & Announcements",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80",
    date: "Mar 15, 2026",
    readTime: "3 min read",
    author: "Admin",
    excerpt:
      "We are proud to introduce state-of-the-art laser technology for urological procedures, improving precision and ensuring faster patient recovery.",
    slug: "new-laser-urology-services",
  },
  {
    id: "8",
    title: "Free Urology & Kidney Health Camp in Agra: Over 500 Patients Screened",
    category: "Hospital News & Announcements",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173eff3e8fc?auto=format&fit=crop&q=80",
    date: "Mar 10, 2026",
    readTime: "3 min read",
    author: "Admin",
    excerpt:
      "A look back at our recent community health drive organized by Mangalkamna Hospital to spread awareness about early detection of kidney diseases.",
    slug: "urology-health-camp-report",
  },
];
export default function BlogList() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles =
    activeCategory === "All"
      ? ARTICLES
      : ARTICLES.filter((article) => article.category === activeCategory);

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Categories */}
        <div className="mb-12 overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex gap-3 min-w-max">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#cb1b1a] text-white shadow-md shadow-red-200"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <Link
              key={article.id}
              href={`/news/${article.slug}`}
              className="group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#cb1b1a]">
                  {article.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#cb1b1a]" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-[#cb1b1a]" />
                    By {article.author}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#cb1b1a] transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-sm font-bold text-[#cb1b1a] group-hover:text-rose-600 transition-colors">
                    Read Full Article
                  </span>
                  <span className="text-xs text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md group-hover:bg-red-50 group-hover:text-[#cb1b1a] transition-colors">
                    {article.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              No Articles Found
            </h3>
            <p className="text-slate-600">
              Try selecting a different category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
