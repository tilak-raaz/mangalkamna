"use client";
import { useState } from "react";
import Image from "next/image";

export default function ImageGallery() {
  const [activeTab, setActiveTab] = useState("All");

  const categories = [
    "All",
    "Infrastructure",
    "Equipment",
    "Staff",
    "Patient Care",
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Hospital Building",
      category: "Infrastructure",
      url: "https://res.cloudinary.com/du5qoczcn/image/upload/q_auto/f_auto/v1776351564/0D5A8773_fwziak.jpg",
      alt: "Hospital Building Exterior",
    },
    {
      id: 2,
      title: "Modern Facilities",
      category: "Infrastructure",
      url: "https://res.cloudinary.com/du5qoczcn/image/upload/v1776351601/0D5A8817_ww3a6w.jpg",
      alt: "Modern Facilities",
    },
    {
      id: 3,
      title: "Advanced Equipment",
      category: "Equipment",
      url: "https://res.cloudinary.com/du5qoczcn/image/upload/v1776352150/0D5A8872_ucuav8.jpg",
      alt: "Advanced Equipment",
    },
    {
      id: 4,
      title: "Operation Theatre",
      category: "Patient Care",
      url: "https://res.cloudinary.com/du5qoczcn/image/upload/v1776351794/0D5A8868_gcenpe.jpg",
      alt: "Operation Theatre",
    },
    {
      id: 5,
      title: "Recovery Rooms",
      category: "Infrastructure",
      url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
      alt: "Recovery Rooms",
    },
    {
      id: 6,
      title: "Our Medical Team",
      category: "Staff",
      url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
      alt: "Medical Team",
    },
    {
      id: 7,
      title: "Patient Support",
      category: "Patient Care",
      url: "https://images.unsplash.com/photo-1527613426406-382276532454?q=80&w=2070&auto=format&fit=crop",
      alt: "Patient Support",
    },
  ];

  const filteredItems =
    activeTab === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="flex items-center justify-center gap-3 text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-sm mb-4">
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
            Gallery
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Browse by Category
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeTab === category
                  ? "bg-[#cb1b1a] text-white shadow-[0_8px_16px_rgba(203,27,26,0.25)]"
                  : "bg-slate-50 text-slate-600 hover:bg-red-50 hover:text-[#cb1b1a] border border-slate-100 hover:border-red-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(203,27,26,0.1)] transition-all duration-500 bg-slate-100 aspect-square cursor-pointer"
            >
              <Image
                src={item.url}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block px-3 py-1 bg-[#cb1b1a] text-white text-xs font-bold rounded-lg mb-2 uppercase tracking-wide">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
