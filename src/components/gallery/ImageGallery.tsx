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
    "Events",
    "Awards",
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Main Reception",
      category: "Infrastructure",
      url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000",
      alt: "Hospital Reception",
    },
    {
      id: 2,
      title: "Modern ICU",
      category: "Infrastructure",
      url: "https://images.unsplash.com/photo-1538108149393-ceecd30fa9d0?auto=format&fit=crop&q=80&w=1000",
      alt: "Intensive Care Unit",
    },
    {
      id: 3,
      title: "Advanced MRI",
      category: "Equipment",
      url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000",
      alt: "MRI Scanner",
    },
    {
      id: 4,
      title: "Operation Theatre",
      category: "Equipment",
      url: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=1000",
      alt: "Surgical Equipment",
    },
    {
      id: 5,
      title: "Surgical Team",
      category: "Staff",
      url: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000",
      alt: "Doctors operating",
    },
    {
      id: 6,
      title: "Pediatrics Team",
      category: "Staff",
      url: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1000",
      alt: "Pediatricians",
    },
    {
      id: 7,
      title: "Patient Recovery",
      category: "Patient Care",
      url: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1000",
      alt: "Patient and Nurse",
    },
    {
      id: 8,
      title: "Health Camp 2023",
      category: "Events",
      url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000",
      alt: "Community blood donation",
    },
    {
      id: 9,
      title: "Excellence Award",
      category: "Awards",
      url: "https://images.unsplash.com/photo-1574607400030-cf2f9e42cb23?auto=format&fit=crop&q=80&w=1000",
      alt: "Medical Award Certificate",
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
