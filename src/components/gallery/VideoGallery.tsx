export default function VideoGallery() {
  const videos = [
    {
      id: 1,
      title: "Hospital Overview & Virtual Tour",
      duration: "03:45",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
      badge: "Overview",
    },
    {
      id: 2,
      title: "Advanced Facilities Tour",
      duration: "05:20",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
      badge: "Facilities",
    },
    {
      id: 3,
      title: "Advanced Cardiology Department Highlights",
      duration: "04:15",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
      badge: "Department",
    },
    {
      id: 4,
      title: "Operation Theatre Innovations",
      duration: "02:30",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
      badge: "Equipment",
    },
    {
      id: 5,
      title: "Annual Hospital Events",
      duration: "01:50",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
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
              {/* Video Area */}
              <div
                className={`relative w-full ${index === 0 ? "h-64 sm:h-80 md:h-[400px]" : "h-56"} bg-slate-900 overflow-hidden`}
              >
                <video
                  src={video.url}
                  controls
                  preload="metadata"
                  className="w-full h-full object-cover"
                />

                {/* Badge Tag */}
                <div className="absolute top-4 left-4 bg-[#cb1b1a] text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider shadow-md pointer-events-none">
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
