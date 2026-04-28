"use client";

import { Star } from "lucide-react";

const profileImages = [
  "https://res.cloudinary.com/du5qoczcn/image/upload/v1773571642/WhatsApp_Image_2026-03-15_at_16.17.01_mft9qc.jpg",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
];

export default function AchievementsBar() {
  return (
    <div className="inline-flex items-center gap-3 sm:gap-6 md:gap-8 bg-white/90 backdrop-blur-sm border border-[#cb1b1a]/20 px-3 sm:px-5 md:px-6 py-2 sm:py-3 md:py-3.5 rounded-full shadow-md w-full sm:w-auto overflow-hidden sm:overflow-visible overflow-x-auto no-scrollbar">
      {/* Profile Images */}
      <div className="flex items-center -space-x-3 shrink-0">
        {profileImages.map((img, index) => (
          <div
            key={index}
            className="relative w-9 md:w-10 h-9 md:h-10 rounded-full border-2 border-white bg-cover bg-center overflow-hidden shadow-sm"
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}
      </div>

      {/* Divider */}
      <div className="w-px h-8 bg-[#cb1b1a]/20"></div>

      {/* Appointments Text */}
      <div className="flex flex-col items-start shrink-0">
        <span className="text-sm md:text-base font-bold text-[#681412]">
          15K+
        </span>
        <span className="text-[10px] sm:text-xs md:text-sm text-[#681412]/70 font-medium tracking-tight">
          Appointments
        </span>
      </div>

      {/* Divider */}
      <div className="hidden sm:block w-px h-6 sm:h-8 bg-[#cb1b1a]/20 shrink-0"></div>

      {/* Rating */}
      <div className="hidden sm:flex items-center gap-1 sm:gap-2 shrink-0">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={`sm:w-4 sm:h-4 ${
                i < 4
                  ? "fill-[#fbbf24] text-[#fbbf24]"
                  : "fill-[#fbbf24]/50 text-[#fbbf24]/50"
              }`}
            />
          ))}
        </div>
        <span className="ml-1 text-sm md:text-base font-bold text-[#681412]">
          4.7
        </span>
        <span className="hidden sm:inline text-xs md:text-sm text-[#681412]/70 font-medium">
          Ratings
        </span>
      </div>
    </div>
  );
}
