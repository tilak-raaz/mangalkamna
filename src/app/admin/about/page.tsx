"use client";

import { useEffect, useState } from "react";
import { ProtectedRoute } from "@/components/admin/ProtectedRoute";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { ImagePlus, Plus, Save, Trash2 } from "lucide-react";
import Image from "next/image";

interface AboutUsContentRecord {
  contentId: string;
  OurStoryText: string;
  image: string;
}

interface AboutUsLeaderRecord {
  id: string;
  leaderName: string;
  leaderDept: string;
  leaderDesc: string;
  leaderImg: string;
}

const emptyAboutUsContent: AboutUsContentRecord = {
  contentId: "",
  OurStoryText: "",
  image: "",
};

const emptyAboutUsLeader = {
  leaderName: "",
  leaderDept: "",
  leaderDesc: "",
  leaderImg: "",
};

export default function AboutUsAdminPage() {
  const [aboutUsContent, setAboutUsContent] =
    useState<AboutUsContentRecord>(emptyAboutUsContent);
  const [aboutUsLeaders, setAboutUsLeaders] = useState<AboutUsLeaderRecord[]>(
    [],
  );

  const [isLoading, setIsLoading] = useState(false);
  const [isSavingAboutUs, setIsSavingAboutUs] = useState(false);
  const [error, setError] = useState("");

  const [selectedAboutUsImageFile, setSelectedAboutUsImageFile] =
    useState<File | null>(null);
  const [selectedLeaderImageFile, setSelectedLeaderImageFile] =
    useState<File | null>(null);

  const [aboutUsLeaderForm, setAboutUsLeaderForm] =
    useState(emptyAboutUsLeader);
  const [editingAboutUsLeaderId, setEditingAboutUsLeaderId] = useState<
    string | null
  >(null);

  const cloudinaryCloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const cloudinaryUploadPreset =
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  const loadData = async () => {
    setError("");
    setIsLoading(true);

    try {
      const [aboutUsPageResponse, aboutUsLeadersResponse] = await Promise.all(
        [
          fetch("/api/about-us-page", { cache: "no-store" }),
          fetch("/api/about-us-leaders", { cache: "no-store" }),
        ],
      );

      const [aboutUsData, aboutUsLeadersData] = await Promise.all([
        aboutUsPageResponse.json(),
        aboutUsLeadersResponse.json(),
      ]);

      if (!aboutUsPageResponse.ok) {
        throw new Error(aboutUsData.error || "Failed to load About Us content.");
      }

      if (!aboutUsLeadersResponse.ok) {
        throw new Error(
          aboutUsLeadersData.error || "Failed to load About Us leaders.",
        );
      }

      setAboutUsContent(aboutUsData.aboutUs?.content || emptyAboutUsContent);
      setAboutUsLeaders(aboutUsLeadersData.leaders || []);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to load data.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
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

  const handleUploadAboutUsImage = async () => {
    if (!selectedAboutUsImageFile) {
      alert("Please select an image first.");
      return;
    }

    setError("");
    setIsSavingAboutUs(true);

    try {
      const imageUrl = await uploadToCloudinary(selectedAboutUsImageFile);
      setAboutUsContent((current) => ({
        ...current,
        image: imageUrl,
      }));
      setSelectedAboutUsImageFile(null);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Upload failed.";
      setError(message);
    } finally {
      setIsSavingAboutUs(false);
    }
  };

  const handleSaveAboutUsContent = async () => {
    if (!aboutUsContent.OurStoryText.trim()) {
      alert("Our Story text is required.");
      return;
    }

    setError("");
    setIsSavingAboutUs(true);

    try {
      const method = aboutUsContent.contentId ? "PUT" : "POST";
      const response = await fetch("/api/about-us-page", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contentId: aboutUsContent.contentId,
          OurStoryText: aboutUsContent.OurStoryText,
          image: aboutUsContent.image,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to save About Us content.");
      }

      setAboutUsContent(data.content || emptyAboutUsContent);
      alert("About Us content saved.");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to save About Us content.";
      setError(message);
    } finally {
      setIsSavingAboutUs(false);
    }
  };

  const handleUploadLeaderImage = async () => {
    if (!selectedLeaderImageFile) {
      alert("Please select leader image first.");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const imageUrl = await uploadToCloudinary(selectedLeaderImageFile);
      setAboutUsLeaderForm((current) => ({
        ...current,
        leaderImg: imageUrl,
      }));
      setSelectedLeaderImageFile(null);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Upload failed.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitAboutUsLeader = async () => {
    if (
      !aboutUsLeaderForm.leaderName.trim() ||
      !aboutUsLeaderForm.leaderDept.trim() ||
      !aboutUsLeaderForm.leaderDesc.trim()
    ) {
      alert("Leader name, department and description are required.");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/about-us-leaders", {
        method: editingAboutUsLeaderId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editingAboutUsLeaderId,
          ...aboutUsLeaderForm,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to save leader.");
      }

      if (editingAboutUsLeaderId) {
        setAboutUsLeaders((current) =>
          current.map((leader) =>
            leader.id === editingAboutUsLeaderId ? data.leader : leader,
          ),
        );
      } else {
        setAboutUsLeaders((current) => [...current, data.leader]);
      }

      setAboutUsLeaderForm(emptyAboutUsLeader);
      setEditingAboutUsLeaderId(null);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to save leader.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteAboutUsLeader = async (id: string) => {
    if (!confirm("Delete this leader?")) {
      return;
    }

    setError("");

    try {
      const response = await fetch("/api/about-us-leaders", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to delete leader.");
      }

      setAboutUsLeaders((current) => current.filter((leader) => leader.id !== id));
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to delete leader.";
      setError(message);
    }
  };

  return (
    <ProtectedRoute>
      <div className="flex">
        <AdminSidebar />

        <main className="flex-1 ml-0 md:ml-64">
          <div className="p-4 md:p-8 bg-white min-h-screen">
            <div className="mb-8 mt-12 md:mt-0 pb-6 border-b border-slate-200">
              <h1 className="text-4xl font-bold text-slate-900">About Us</h1>
              <p className="text-slate-600 mt-2">
                Edit the about_us_page table: Our Story, image, and Leadership.
              </p>
            </div>

            {error ? (
              <div className="mb-6 p-4 rounded-lg bg-red-50 text-red-700 border border-red-100 text-sm font-medium">
                {error}
              </div>
            ) : null}

            <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Our Story
              </h2>

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Our Story Paragraph *
                  </label>
                  <textarea
                    rows={6}
                    value={aboutUsContent.OurStoryText}
                    onChange={(e) =>
                      setAboutUsContent((current) => ({
                        ...current,
                        OurStoryText: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb1b1a] text-black"
                    placeholder="Our Story paragraph"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    About Image Upload
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-3">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        setSelectedAboutUsImageFile(e.target.files?.[0] || null)
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg text-black"
                    />
                    <button
                      onClick={handleUploadAboutUsImage}
                      disabled={isSavingAboutUs}
                      className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-4 py-3 rounded-lg font-semibold hover:bg-slate-700 disabled:opacity-50"
                    >
                      <ImagePlus className="w-4 h-4" />
                      Upload to Cloudinary
                    </button>
                  </div>
                </div>

                {aboutUsContent.image ? (
                  <div className="border border-slate-200 rounded-lg p-3 max-w-sm">
                    <div className="relative w-full h-40">
                      <Image
                        src={aboutUsContent.image}
                        alt="About Us"
                        fill
                        className="object-cover rounded"
                        sizes="(max-width: 768px) 100vw, 30vw"
                      />
                    </div>
                  </div>
                ) : null}

                <button
                  onClick={handleSaveAboutUsContent}
                  disabled={isSavingAboutUs || isLoading}
                  className="inline-flex items-center justify-center gap-2 bg-[#cb1b1a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#a51615] disabled:opacity-50"
                >
                  <Save className="w-5 h-5" />
                  {isSavingAboutUs ? "Saving..." : "Save Our Story"}
                </button>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Leadership Section
              </h2>

              <div className="space-y-3 mb-6">
                <input
                  type="text"
                  placeholder="Leader name"
                  value={aboutUsLeaderForm.leaderName}
                  onChange={(e) =>
                    setAboutUsLeaderForm((current) => ({
                      ...current,
                      leaderName: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-black"
                />
                <input
                  type="text"
                  placeholder="Department"
                  value={aboutUsLeaderForm.leaderDept}
                  onChange={(e) =>
                    setAboutUsLeaderForm((current) => ({
                      ...current,
                      leaderDept: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-black"
                />
                <textarea
                  rows={4}
                  placeholder="Description"
                  value={aboutUsLeaderForm.leaderDesc}
                  onChange={(e) =>
                    setAboutUsLeaderForm((current) => ({
                      ...current,
                      leaderDesc: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-black"
                />

                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-3">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      setSelectedLeaderImageFile(e.target.files?.[0] || null)
                    }
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg text-black"
                  />
                  <button
                    onClick={handleUploadLeaderImage}
                    disabled={isLoading}
                    className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-4 py-3 rounded-lg font-semibold hover:bg-slate-700 disabled:opacity-50"
                  >
                    <ImagePlus className="w-4 h-4" />
                    Upload Leader Image
                  </button>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleSubmitAboutUsLeader}
                    disabled={isLoading}
                    className="inline-flex items-center gap-2 bg-[#cb1b1a] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#a51615] disabled:opacity-50"
                  >
                    <Plus className="w-4 h-4" />
                    {editingAboutUsLeaderId ? "Update Leader" : "Add Leader"}
                  </button>
                  {editingAboutUsLeaderId ? (
                    <button
                      onClick={() => {
                        setEditingAboutUsLeaderId(null);
                        setAboutUsLeaderForm(emptyAboutUsLeader);
                        setSelectedLeaderImageFile(null);
                      }}
                      className="px-5 py-2.5 rounded-lg border border-slate-300 font-semibold text-slate-700"
                    >
                      Cancel
                    </button>
                  ) : null}
                </div>
              </div>

              <div className="space-y-3">
                {aboutUsLeaders.map((leader) => (
                  <div
                    key={leader.id}
                    className="border border-slate-200 rounded-lg p-4"
                  >
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h4 className="font-bold text-slate-900">{leader.leaderName}</h4>
                        <p className="text-sm text-slate-500 mb-1">{leader.leaderDept}</p>
                        <p className="text-slate-700 text-sm mb-2">{leader.leaderDesc}</p>
                      </div>
                      {leader.leaderImg ? (
                        <div className="relative w-24 h-24 rounded-lg overflow-hidden border border-slate-200">
                          <Image
                            src={leader.leaderImg}
                            alt={leader.leaderName}
                            fill
                            className="object-cover"
                            sizes="96px"
                          />
                        </div>
                      ) : null}
                    </div>

                    <div className="flex gap-2 mt-3">
                      <button
                        onClick={() => {
                          setEditingAboutUsLeaderId(leader.id);
                          setAboutUsLeaderForm({
                            leaderName: leader.leaderName,
                            leaderDept: leader.leaderDept,
                            leaderDesc: leader.leaderDesc,
                            leaderImg: leader.leaderImg,
                          });
                          setSelectedLeaderImageFile(null);
                        }}
                        className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 font-semibold"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteAboutUsLeader(leader.id)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 font-semibold"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
