"use client";

import { ProtectedRoute } from "@/components/admin/ProtectedRoute";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { Users, Image, Video } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Doctor {
  id: string;
  name: string;
}

interface GalleryImage {
  id: string;
  url: string;
  title: string;
}

interface VideoItem {
  id: string;
  title: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [doctorCount, setDoctorCount] = useState(0);
  const [imageCount, setImageCount] = useState(0);
  const [videoCount, setVideoCount] = useState(0);

  useEffect(() => {
    // Load doctors count
    const doctorsData = localStorage.getItem("doctors");
    if (doctorsData) {
      const doctors: Doctor[] = JSON.parse(doctorsData);
      setDoctorCount(doctors.length);
    }

    // Load gallery images count
    const imagesData = localStorage.getItem("galleryImages");
    if (imagesData) {
      const images: GalleryImage[] = JSON.parse(imagesData);
      setImageCount(images.length);
    }

    // Load videos count
    const videosData = localStorage.getItem("videos");
    if (videosData) {
      const videos: VideoItem[] = JSON.parse(videosData);
      setVideoCount(videos.length);
    }
  }, []);

  const stats = [
    {
      label: "Total Doctors",
      value: doctorCount.toString(),
      icon: Users,
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "Gallery Images",
      value: imageCount.toString(),
      icon: Image,
      color: "bg-green-50 text-green-600",
    },
    {
      label: "Videos",
      value: videoCount.toString(),
      icon: Video,
      color: "bg-purple-50 text-purple-600",
    },
  ];

  const quickActions = [
    {
      icon: Users,
      title: "Manage Doctors",
      description: "Add, edit, or remove doctors",
      href: "/admin/doctors",
    },
    {
      icon: Image,
      title: "Gallery Images",
      description: "Manage gallery images",
      href: "/admin/gallery",
    },
    {
      icon: Video,
      title: "Videos",
      description: "Upload or edit videos",
      href: "/admin/videos",
    },
  ];

  return (
    <ProtectedRoute>
      <div className="flex">
        <AdminSidebar />

        {/* Main Content */}
        <main className="flex-1 ml-0 md:ml-64">
          <div className="p-4 md:p-8 bg-white min-h-screen">
            {/* Header */}
            <div className="mb-12 mt-12 md:mt-0 pb-6 border-b border-slate-200">
              <h1 className="text-4xl font-bold text-slate-900 mb-2">
                Dashboard
              </h1>
              <p className="text-slate-600">
                Welcome to Mangalkamna Hospital Admin Panel
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-200"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-500 text-sm font-medium mb-1">
                          {stat.label}
                        </p>
                        <p className="text-4xl font-bold text-slate-900">
                          {stat.value}
                        </p>
                      </div>
                      <div className={`p-3 rounded-lg ${stat.color}`}>
                        <Icon className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Quick Actions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => router.push(action.href)}
                      className="p-6 border-2 border-slate-200 rounded-lg hover:border-[#cb1b1a] hover:bg-red-50 transition-colors text-left group cursor-pointer"
                    >
                      <Icon className="w-8 h-8 text-[#cb1b1a] mb-3 group-hover:scale-110 transition-transform" />
                      <h3 className="font-bold text-slate-900">
                        {action.title}
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">
                        {action.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
