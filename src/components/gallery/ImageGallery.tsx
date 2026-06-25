import Image from "next/image";

interface GalleryImage {
  id: string;
  imageURL: string;
  createdAt: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
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
            Our Gallery
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images.length === 0 ? (
            <div className="col-span-full p-12 text-center bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-slate-500 text-lg">
                No images available right now.
              </p>
            </div>
          ) : (
            images.map((item, index) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(203,27,26,0.1)] transition-all duration-500 bg-slate-100 aspect-square cursor-pointer"
              >
                <Image
                  src={item.imageURL}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block px-3 py-1 bg-[#cb1b1a] text-white text-xs font-bold rounded-lg mb-2 uppercase tracking-wide">
                    Gallery
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </h3>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
