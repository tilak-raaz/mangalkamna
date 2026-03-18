import { Play, Video } from "lucide-react";
import Image from "next/image";

export default function VideoGallery() {
  const videos = [
    {
      id: 1,
      title: "Hospital Overview & Virtual Tour",
      duration: "03:45",
      url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000",
      badge: "Overview",
    },
    {
      id: 2,
      title: "Heart Health Tips by Dr. Smith",
      duration: "05:20",
      url: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1000",
      badge: "Doctor Interview",
    },
    {
      id: 3,
      title: "My Recovery Journey: A Patient Story",
      duration: "04:15",
      url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000",
      badge: "Testimonial",
    },
    {
      id: 4,
      title: "Advanced Cardiology Department Highlights",
      duration: "02:30",
      url: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=1000",
      badge: "Department",
    },
    {
      id: 5,
      title: "Annual Blood Donation Drive 2024",
      duration: "01:50",
      url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000",
      badge: "Health Campaign",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="flex items-center justify-center gap-3 text-[#cb1b1a] font-bold tracking-[0.2em] uppercase text-sm mb-4">
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
            Video Library
            <span className="w-8 h-0.5 bg-[#cb1b1a]"></span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Watch & Learn
          </h2>
          <p className="text-lg text-slate-600">
            Take a virtual tour of our facilities, hear directly from our expert
            doctors, and watch inspiring patient recovery stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(203,27,26,0.1)] transition-all duration-300 border border-slate-100 ${index === 0 ? "md:col-span-2 lg:col-span-2" : ""}`}
            >
              {/* Video Thumbnail Area */}
              <div
                className={`relative w-full ${index === 0 ? "h-64 sm:h-80 md:h-[400px]" : "h-56"} bg-slate-900 overflow-hidden cursor-pointer`}
              >
                <Image
                  src={video.url}
                  alt={video.title}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 group-hover:bg-[#cb1b1a] group-hover:border-[#cb1b1a] group-hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.3)] group-hover:shadow-[0_0_30px_rgba(203,27,26,0.5)]">
                    <Play className="w-6 h-6 text-white ml-1 fill-white" />
                  </div>
                </div>

                {/* Duration Tag */}
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-lg text-sm font-medium flex items-center gap-1.5 border border-white/10">
                  <Video className="w-4 h-4 text-slate-300" />
                  {video.duration}
                </div>

                {/* Badge Tag */}
                <div className="absolute top-4 left-4 bg-[#cb1b1a] text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider shadow-md">
                  {video.badge}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#cb1b1a] transition-colors leading-snug">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
