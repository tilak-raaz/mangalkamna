import { Play, PlayCircle } from "lucide-react";
import Image from "next/image";

export default function VideoTestimonials() {
  const videos = [
    {
      id: 1,
      name: "Rajesh Kumar",
      treatment: "Coronary Bypass Surgery",
      duration: "02:45",
      url: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      name: "Priya Sharma",
      treatment: "High-Risk Pregnancy",
      duration: "03:10",
      url: "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      name: "Anand Verma",
      treatment: "Joint Replacement Rehab",
      duration: "02:15",
      url: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="flex items-center justify-center gap-3 text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-sm mb-4">
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
            Watch Patient Stories
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Video Testimonials
          </h2>
          <p className="text-lg text-slate-600">
            Hear directly from our patients about their experiences, recovery
            journeys, and the care they received at our hospital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(203,27,26,0.1)] transition-all duration-300 border border-slate-100 p-2"
            >
              {/* Video Thumbnail Area */}
              <div className="relative w-full h-64 bg-slate-900 rounded-2xl overflow-hidden cursor-pointer">
                <Image
                  src={video.url}
                  alt={`Patient ${video.name}`}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 group-hover:bg-[#cb1b1a] group-hover:border-[#cb1b1a] group-hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.3)]">
                    <Play className="w-6 h-6 text-white ml-1 fill-white" />
                  </div>
                </div>

                {/* Duration Tag */}
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-lg text-sm font-medium flex items-center gap-1.5 border border-white/10">
                  <PlayCircle className="w-4 h-4 text-slate-300" />
                  {video.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#cb1b1a] transition-colors leading-snug mb-2">
                  {video.name}
                </h3>
                <p className="text-slate-500 font-medium">{video.treatment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
