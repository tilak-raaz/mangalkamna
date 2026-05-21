"use client";

import { useEffect, useState } from "react";
import { ProtectedRoute } from "@/components/admin/ProtectedRoute";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { Plus, Trash2, Play } from "lucide-react";

interface Video {
  id: string;
  title: string;
  url: string;
  category: string;
  uploadedAt: string;
}

export default function VideosManagement() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [category, setCategory] = useState("testimonials");
  const [isLoading, setIsLoading] = useState(false);

  // Load videos from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("videos");
    if (stored) {
      setVideos(JSON.parse(stored));
    }
  }, []);

  const handleAddVideo = () => {
    if (!videoUrl || !title) {
      alert("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const newVideo: Video = {
        id: Date.now().toString(),
        title: title,
        url: videoUrl,
        category: category,
        uploadedAt: new Date().toLocaleDateString(),
      };

      const updated = [...videos, newVideo];
      setVideos(updated);
      localStorage.setItem("videos", JSON.stringify(updated));

      setTitle("");
      setVideoUrl("");
      setCategory("testimonials");
      setIsLoading(false);
    }, 500);
  };

  const handleDeleteVideo = (id: string) => {
    if (confirm("Delete this video?")) {
      const updated = videos.filter((vid) => vid.id !== id);
      setVideos(updated);
      localStorage.setItem("videos", JSON.stringify(updated));
    }
  };

  const categories = [
    { value: "testimonials", label: "Testimonials" },
    { value: "procedures", label: "Procedures" },
    { value: "facilities", label: "Facilities" },
    { value: "training", label: "Training" },
    { value: "other", label: "Other" },
  ];

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
                Videos Management
              </h1>
              <p className="text-slate-600 mt-2">
                Manage testimonials and promotional videos
              </p>
            </div>

            {/* Upload Section */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Add New Video
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Video Title
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g., Patient Testimonial - John Doe"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb1b1a] text-slate-900 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb1b1a] text-slate-900 bg-white"
                  >
                    {categories.map((cat) => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Video URL (YouTube or Direct)
                  </label>
                  <input
                    type="text"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    placeholder="https://youtube.com/embed/..."
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb1b1a] text-slate-900 bg-white"
                  />
                </div>

                <div className="p-8 border-2 border-dashed border-slate-300 rounded-lg text-center bg-slate-50">
                  <Play className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                  <p className="text-slate-600 mb-2">Paste video URL above</p>
                  <p className="text-sm text-slate-500">
                    Supports YouTube, Vimeo, or direct video links
                  </p>
                </div>

                <button
                  onClick={handleAddVideo}
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 bg-[#cb1b1a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#a51615] disabled:opacity-50 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  {isLoading ? "Adding..." : "Add Video"}
                </button>
              </div>
            </div>

            {/* Videos List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.length === 0 ? (
                <div className="col-span-full p-12 text-center bg-white rounded-2xl border border-slate-100">
                  <p className="text-slate-500 text-lg">No videos added yet.</p>
                </div>
              ) : (
                videos.map((video) => (
                  <div
                    key={video.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-slate-100 group"
                  >
                    <div className="relative h-48 overflow-hidden bg-slate-900">
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                        <Play className="w-16 h-16 text-white/30" />
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                    </div>

                    <div className="p-4">
                      <h3 className="font-bold text-slate-900 mb-2">
                        {video.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm mb-4">
                        <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full font-semibold">
                          {video.category}
                        </span>
                        <span className="text-slate-500">
                          {video.uploadedAt}
                        </span>
                      </div>

                      <button
                        onClick={() => handleDeleteVideo(video.id)}
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
