"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, User } from "lucide-react";

const CATEGORIES = [
  "All",
  "Heart Health",
  "Women's Health",
  "Child Health & Parenting",
  "Nutrition & Diet",
  "Mental Health & Wellness",
  "Cancer Awareness",
  "Bone & Joint Health",
  "Diabetes Management",
  "Hospital News & Announcements",
  "Health Camps & Events",
];

const ARTICLES = [
  {
    id: "1",
    title: "10 Warning Signs of Heart Disease You Should Never Ignore",
    category: "Heart Health",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80",
    date: "Aug 15, 2024",
    readTime: "5 min read",
    author: "Dr. Sarah Johnson",
    excerpt:
      "Learn to recognize the early warning signs of heart disease and when to seek medical attention immediately.",
    slug: "10-warning-signs-heart-disease",
  },
  {
    id: "2",
    title: "Diabetes & Foot Care: What Every Patient Needs to Know",
    category: "Diabetes Management",
    image:
      "https://images.unsplash.com/photo-1628595351029-c29e9620e401?auto=format&fit=crop&q=80",
    date: "Aug 12, 2024",
    readTime: "4 min read",
    author: "Dr. Abhishek Kumar",
    excerpt:
      "Proper foot care is essential for diabetic patients. Here are the daily routines you need to follow.",
    slug: "diabetes-foot-care",
  },
  {
    id: "3",
    title: "Breastfeeding Benefits: A Complete Guide for New Mothers",
    category: "Women's Health",
    image:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80",
    date: "Aug 10, 2024",
    readTime: "6 min read",
    author: "Dr. Priya Sharma",
    excerpt:
      "Understanding the crucial benefits of breastfeeding for both the newborn and the mother.",
    slug: "breastfeeding-benefits-guide",
  },
  {
    id: "4",
    title: "How to Protect Your Joints as You Age",
    category: "Bone & Joint Health",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80",
    date: "Aug 08, 2024",
    readTime: "5 min read",
    author: "Dr. Rajesh Verma",
    excerpt:
      "Simple lifestyle changes and exercises that can help maintain joint mobility and prevent osteoarthritis.",
    slug: "protect-joints-aging",
  },
  {
    id: "5",
    title: "Understanding Cancer Screening: What Tests You Need & When",
    category: "Cancer Awareness",
    image:
      "https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?auto=format&fit=crop&q=80",
    date: "Aug 05, 2024",
    readTime: "7 min read",
    author: "Dr. Anisha Patel",
    excerpt:
      "A comprehensive guide to cancer screening guidelines by age and risk factors.",
    slug: "understanding-cancer-screening",
  },
  {
    id: "6",
    title: "Monsoon Health Tips: Prevent Common Infections This Season",
    category: "Nutrition & Diet",
    image:
      "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&q=80",
    date: "Aug 02, 2024",
    readTime: "4 min read",
    author: "Dr. Amit Desai",
    excerpt:
      "Stay healthy during the rainy season with these practical tips to avoid water-borne diseases.",
    slug: "monsoon-health-tips",
  },
  {
    id: "7",
    title: "[Hospital Name] Launches New Robotic Surgery Program",
    category: "Hospital News & Announcements",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80",
    date: "Jul 28, 2024",
    readTime: "3 min read",
    author: "Admin",
    excerpt:
      "We are proud to introduce state-of-the-art robotic surgery, improving precision and recovery times.",
    slug: "new-robotic-surgery-program",
  },
  {
    id: "8",
    title: "Free Health Camp Report: 500 Patients Screened",
    category: "Health Camps & Events",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173eff3e8fc?auto=format&fit=crop&q=80",
    date: "Jul 25, 2024",
    readTime: "3 min read",
    author: "Admin",
    excerpt:
      "A look back at our recent community health drive in the local district.",
    slug: "health-camp-report",
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
