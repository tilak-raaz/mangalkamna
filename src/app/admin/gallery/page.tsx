"use client";

import { useEffect, useState } from "react";
import { ProtectedRoute } from "@/components/admin/ProtectedRoute";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { Plus, Trash2, Upload } from "lucide-react";

interface GalleryImage {
  id: string;
  imageURL: string;
  createdAt: string;
}

export default function GalleryManagement() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const cloudinaryCloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const cloudinaryUploadPreset =
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  const loadImages = async () => {
    setError("");

    try {
      const response = await fetch("/api/gallery", { cache: "no-store" });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to load gallery images.");
      }

      setImages(data.images || []);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to load gallery images.";
      setError(message);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);

  const uploadToCloudinary = async (file: File) => {
    if (!cloudinaryCloudName || !cloudinaryUploadPreset) {
      throw new Error(
        "Missing Cloudinary config. Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME and NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET in .env.local",
      );
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", cloudinaryUploadPreset);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      },
    );

    const data = await response.json();

    if (!response.ok || !data.secure_url) {
      throw new Error(data.error?.message || "Cloudinary upload failed.");
    }

    return data.secure_url as string;
  };

  const handleAddImage = async () => {
    if (!selectedFile) {
      alert("Please select an image file first.");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const imageURL = await uploadToCloudinary(selectedFile);

      const saveResponse = await fetch("/api/gallery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ imageURL }),
      });

      const saveData = await saveResponse.json();

      if (!saveResponse.ok) {
        throw new Error(saveData.error || "Failed to save gallery image.");
      }

      setImages((current) => [saveData.image, ...current]);
      setSelectedFile(null);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to upload image.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteImage = async (id: string) => {
    if (confirm("Delete this image?")) {
      setError("");

      try {
        const response = await fetch("/api/gallery", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to delete image.");
        }

        setImages((current) => current.filter((img) => img.id !== id));
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Failed to delete image.";
        setError(message);
      }
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
                    Upload Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      setSelectedFile(e.target.files?.[0] || null)
                    }
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb1b1a] text-slate-900 bg-white"
                  />
                </div>

                <div className="p-8 border-2 border-dashed border-slate-300 rounded-lg text-center bg-slate-50">
                  <Upload className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                  <p className="text-slate-600 mb-2">
                    Select an image file to upload to Cloudinary
                  </p>
                  <p className="text-sm text-slate-500">
                    Supports JPG, PNG, WebP up to 5MB
                  </p>
                </div>

                {error ? (
                  <div className="p-4 rounded-lg bg-red-50 text-red-700 border border-red-100 text-sm font-medium">
                    {error}
                  </div>
                ) : null}

                <button
                  onClick={handleAddImage}
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 bg-[#cb1b1a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#a51615] disabled:opacity-50 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  {isLoading ? "Uploading..." : "Upload and Save"}
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
                        src={image.imageURL}
                        alt="Gallery image"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                    </div>

                    <div className="p-4">
                      <p className="text-xs text-slate-500 mb-4">
                        Uploaded:{" "}
                        {new Date(image.createdAt).toLocaleDateString()}
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
