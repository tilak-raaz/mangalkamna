"use client";

import { useEffect, useState } from "react";
import { ProtectedRoute } from "@/components/admin/ProtectedRoute";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { Plus, Trash2, Upload } from "lucide-react";

interface GalleryImage {
  id: string;
  url: string;
  title: string;
  uploadedAt: string;
}

export default function GalleryManagement() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Load images from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("galleryImages");
    if (stored) {
      setImages(JSON.parse(stored));
    }
  }, []);

  const handleAddImage = () => {
    if (!imageUrl || !title) {
      alert("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const newImage: GalleryImage = {
        id: Date.now().toString(),
        url: imageUrl,
        title: title,
        uploadedAt: new Date().toLocaleDateString(),
      };

      const updated = [...images, newImage];
      setImages(updated);
      localStorage.setItem("galleryImages", JSON.stringify(updated));

      setTitle("");
      setImageUrl("");
      setIsLoading(false);
    }, 500);
  };

  const handleDeleteImage = (id: string) => {
    if (confirm("Delete this image?")) {
      const updated = images.filter((img) => img.id !== id);
      setImages(updated);
      localStorage.setItem("galleryImages", JSON.stringify(updated));
    }
  };

  return (
    <ProtectedRoute>
      <div className="flex">
        <AdminSidebar />

        {/* Main Content */}
        <main className="flex-1 ml-0 md:ml-64">
          <div className="p-4 md:p-8 bg-white min-h-screen">
            {/* Header */}
            <div className="mb-8 mt-12 md:mt-0 pb-6 border-b border-slate-200">
              <h1 className="text-4xl font-bold text-slate-900">
                Gallery Images
              </h1>
              <p className="text-slate-600 mt-2">
                Manage gallery images and media
              </p>
            </div>

            {/* Upload Section */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Add New Image
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Image Title
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g., Hospital Reception"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb1b1a] text-slate-900 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Image URL
                  </label>
                  <input
                    type="text"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="https://..."
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb1b1a] text-slate-900 bg-white"
                  />
                </div>

                <div className="p-8 border-2 border-dashed border-slate-300 rounded-lg text-center bg-slate-50">
                  <Upload className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                  <p className="text-slate-600 mb-2">
                    Or paste image URL above
                  </p>
                  <p className="text-sm text-slate-500">
                    Supports JPG, PNG, WebP up to 5MB
                  </p>
                </div>

                <button
                  onClick={handleAddImage}
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 bg-[#cb1b1a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#a51615] disabled:opacity-50 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  {isLoading ? "Uploading..." : "Add Image"}
                </button>
              </div>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.length === 0 ? (
                <div className="col-span-full p-12 text-center bg-slate-50 rounded-lg border border-slate-200">
                  <p className="text-slate-500 text-lg">
                    No images in gallery yet.
                  </p>
                </div>
              ) : (
                images.map((image) => (
                  <div
                    key={image.id}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-200 group"
                  >
                    <div className="relative h-48 overflow-hidden bg-slate-100">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                    </div>

                    <div className="p-4">
                      <h3 className="font-bold text-slate-900 mb-2">
                        {image.title}
                      </h3>
                      <p className="text-xs text-slate-500 mb-4">
                        Uploaded: {image.uploadedAt}
                      </p>

                      <button
                        onClick={() => handleDeleteImage(image.id)}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-semibold"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
