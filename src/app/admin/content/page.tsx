"use client";

import { useEffect, useState } from "react";
import { ProtectedRoute } from "@/components/admin/ProtectedRoute";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { ImagePlus, Plus, Save, Trash2 } from "lucide-react";
import Image from "next/image";

interface HomePageRecord {
  id: string;
  title: string;
  heroImages: string[];
  aboutUsText: string;
  whyChooseUsText: string;
}

interface TestimonialRecord {
  id: string;
  name: string;
  deptConcerned: string;
  reviewText: string;
}

interface DepartmentRecord {
  id: string;
  deptName: string;
  deptDesc: string;
}

const emptyHomeData: HomePageRecord = {
  id: "",
  title: "",
  heroImages: [],
  aboutUsText: "",
  whyChooseUsText: "",
};

const emptyTestimonial = {
  name: "",
  deptConcerned: "",
  reviewText: "",
};

const emptyDepartment = {
  deptName: "",
  deptDesc: "",
};

export default function HomeContentManagementPage() {
  const [homeData, setHomeData] = useState<HomePageRecord>(emptyHomeData);
  const [testimonials, setTestimonials] = useState<TestimonialRecord[]>([]);
  const [departments, setDepartments] = useState<DepartmentRecord[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isSavingHome, setIsSavingHome] = useState(false);
  const [error, setError] = useState("");

  const [selectedHeroFile, setSelectedHeroFile] = useState<File | null>(null);

  const [testimonialForm, setTestimonialForm] = useState(emptyTestimonial);
  const [editingTestimonialId, setEditingTestimonialId] = useState<string | null>(
    null,
  );

  const [departmentForm, setDepartmentForm] = useState(emptyDepartment);
  const [editingDepartmentId, setEditingDepartmentId] = useState<string | null>(
    null,
  );

  const cloudinaryCloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const cloudinaryUploadPreset =
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  const loadData = async () => {
    setError("");
    setIsLoading(true);

    try {
      const [homeResponse, testimonialsResponse, departmentsResponse] =
        await Promise.all([
          fetch("/api/home-page", { cache: "no-store" }),
          fetch("/api/home-testimonials", { cache: "no-store" }),
          fetch("/api/home-departments", { cache: "no-store" }),
        ]);

      const [homeDataJson, testimonialsData, departmentsData] =
        await Promise.all([
          homeResponse.json(),
          testimonialsResponse.json(),
          departmentsResponse.json(),
        ]);

      if (!homeResponse.ok) {
        throw new Error(homeDataJson.error || "Failed to load home page data.");
      }

      if (!testimonialsResponse.ok) {
        throw new Error(
          testimonialsData.error || "Failed to load testimonials data.",
        );
      }

      if (!departmentsResponse.ok) {
        throw new Error(
          departmentsData.error || "Failed to load departments data.",
        );
      }

      setHomeData(homeDataJson.homePage || emptyHomeData);
      setTestimonials(testimonialsData.testimonials || []);
      setDepartments(departmentsData.departments || []);
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

  const handleUploadHeroImage = async () => {
    if (!selectedHeroFile) {
      alert("Please select an image first.");
      return;
    }

    setError("");
    setIsSavingHome(true);

    try {
      const imageUrl = await uploadToCloudinary(selectedHeroFile);
      setHomeData((current) => ({
        ...current,
        heroImages: [...current.heroImages, imageUrl],
      }));
      setSelectedHeroFile(null);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Upload failed.";
      setError(message);
    } finally {
      setIsSavingHome(false);
    }
  };

  const handleSaveHomeData = async () => {
    if (!homeData.title.trim()) {
      alert("Home title is required.");
      return;
    }

    setError("");
    setIsSavingHome(true);

    try {
      const method = homeData.id ? "PUT" : "POST";
      const response = await fetch("/api/home-page", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: homeData.id,
          title: homeData.title,
          heroImages: homeData.heroImages,
          aboutUsText: homeData.aboutUsText,
          whyChooseUsText: homeData.whyChooseUsText,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to save home content.");
      }

      setHomeData(data.homePage || emptyHomeData);
      alert("Home page content saved.");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to save home content.";
      setError(message);
    } finally {
      setIsSavingHome(false);
    }
  };

  const removeHeroImage = (index: number) => {
    setHomeData((current) => ({
      ...current,
      heroImages: current.heroImages.filter((_, idx) => idx !== index),
    }));
  };

  const handleSubmitTestimonial = async () => {
    if (!testimonialForm.name.trim() || !testimonialForm.reviewText.trim()) {
      alert("Name and review text are required.");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/home-testimonials", {
        method: editingTestimonialId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editingTestimonialId,
          ...testimonialForm,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to save testimonial.");
      }

      if (editingTestimonialId) {
        setTestimonials((current) =>
          current.map((item) =>
            item.id === editingTestimonialId ? data.testimonial : item,
          ),
        );
      } else {
        setTestimonials((current) => [data.testimonial, ...current]);
      }

      setTestimonialForm(emptyTestimonial);
      setEditingTestimonialId(null);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to save testimonial.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteTestimonial = async (id: string) => {
    if (!confirm("Delete this testimonial?")) {
      return;
    }

    setError("");

    try {
      const response = await fetch("/api/home-testimonials", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to delete testimonial.");
      }

      setTestimonials((current) => current.filter((item) => item.id !== id));
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to delete testimonial.";
      setError(message);
    }
  };

  const handleSubmitDepartment = async () => {
    if (!departmentForm.deptName.trim() || !departmentForm.deptDesc.trim()) {
      alert("Department name and description are required.");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/home-departments", {
        method: editingDepartmentId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editingDepartmentId, ...departmentForm }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to save department.");
      }

      if (editingDepartmentId) {
        setDepartments((current) =>
          current.map((item) =>
            item.id === editingDepartmentId ? data.department : item,
          ),
        );
      } else {
        setDepartments((current) => [...current, data.department]);
      }

      setDepartmentForm(emptyDepartment);
      setEditingDepartmentId(null);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to save department.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteDepartment = async (id: string) => {
    if (!confirm("Delete this department?")) {
      return;
    }

    setError("");

    try {
      const response = await fetch("/api/home-departments", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to delete department.");
      }

      setDepartments((current) => current.filter((item) => item.id !== id));
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to delete department.";
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
              <h1 className="text-4xl font-bold text-slate-900">Site Content</h1>
              <p className="text-slate-600 mt-2">
                Edit Home, Testimonials, and Departments from Appwrite.
              </p>
            </div>

            {error ? (
              <div className="mb-6 p-4 rounded-lg bg-red-50 text-red-700 border border-red-100 text-sm font-medium">
                {error}
              </div>
            ) : null}

            <div className="space-y-8">
              <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Home Page Fields (home_page)
                </h2>

                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Title *
                    </label>
                    <input
                      type="text"
                      value={homeData.title}
                      onChange={(e) =>
                        setHomeData((current) => ({
                          ...current,
                          title: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb1b1a] text-black"
                      placeholder="Home page hero title"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      About Us Text
                    </label>
                    <textarea
                      rows={5}
                      value={homeData.aboutUsText}
                      onChange={(e) =>
                        setHomeData((current) => ({
                          ...current,
                          aboutUsText: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb1b1a] text-black"
                      placeholder="About section paragraph"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Why Choose Us Text
                    </label>
                    <textarea
                      rows={5}
                      value={homeData.whyChooseUsText}
                      onChange={(e) =>
                        setHomeData((current) => ({
                          ...current,
                          whyChooseUsText: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb1b1a] text-black"
                      placeholder="Why choose us paragraph"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Hero Image Upload
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-3">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          setSelectedHeroFile(e.target.files?.[0] || null)
                        }
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg text-black"
                      />
                      <button
                        onClick={handleUploadHeroImage}
                        disabled={isSavingHome}
                        className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-4 py-3 rounded-lg font-semibold hover:bg-slate-700 disabled:opacity-50"
                      >
                        <ImagePlus className="w-4 h-4" />
                        Upload to Cloudinary
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {homeData.heroImages.map((url, index) => (
                      <div
                        key={`${url}-${index}`}
                        className="border border-slate-200 rounded-lg p-3"
                      >
                        <div className="relative w-full h-36">
                          <Image
                            src={url}
                            alt={`Hero ${index + 1}`}
                            fill
                            className="object-cover rounded"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                        <button
                          onClick={() => removeHeroImage(index)}
                          className="mt-3 w-full inline-flex items-center justify-center gap-2 px-3 py-2 bg-red-50 text-red-600 rounded-lg font-semibold hover:bg-red-100"
                        >
                          <Trash2 className="w-4 h-4" />
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={handleSaveHomeData}
                    disabled={isSavingHome || isLoading}
                    className="inline-flex items-center justify-center gap-2 bg-[#cb1b1a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#a51615] disabled:opacity-50"
                  >
                    <Save className="w-5 h-5" />
                    {isSavingHome ? "Saving..." : "Save Home Page"}
                  </button>
                </div>
              </section>

              <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Testimonials (testimonials_page)
                </h2>

                <div className="space-y-3 mb-6">
                  <input
                    type="text"
                    placeholder="Name"
                    value={testimonialForm.name}
                    onChange={(e) =>
                      setTestimonialForm((current) => ({
                        ...current,
                        name: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg text-black"
                  />
                  <input
                    type="text"
                    placeholder="Department concerned"
                    value={testimonialForm.deptConcerned}
                    onChange={(e) =>
                      setTestimonialForm((current) => ({
                        ...current,
                        deptConcerned: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg text-black"
                  />
                  <textarea
                    rows={4}
                    placeholder="Review text"
                    value={testimonialForm.reviewText}
                    onChange={(e) =>
                      setTestimonialForm((current) => ({
                        ...current,
                        reviewText: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg text-black"
                  />
                  <button
                    onClick={handleSubmitTestimonial}
                    disabled={isLoading}
                    className="inline-flex items-center gap-2 bg-[#cb1b1a] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#a51615] disabled:opacity-50"
                  >
                    <Plus className="w-4 h-4" />
                    {editingTestimonialId
                      ? "Update Testimonial"
                      : "Add Testimonial"}
                  </button>
                </div>

                <div className="space-y-3">
                  {testimonials.map((item) => (
                    <div
                      key={item.id}
                      className="border border-slate-200 rounded-lg p-4"
                    >
                      <h3 className="font-bold text-slate-900">{item.name}</h3>
                      <p className="text-sm text-slate-500 mb-2">{item.deptConcerned}</p>
                      <p className="text-slate-700 text-sm mb-3">{item.reviewText}</p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setEditingTestimonialId(item.id);
                            setTestimonialForm({
                              name: item.name,
                              deptConcerned: item.deptConcerned,
                              reviewText: item.reviewText,
                            });
                          }}
                          className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 font-semibold"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteTestimonial(item.id)}
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

              <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Departments (department)
                </h2>

                <div className="space-y-3 mb-6">
                  <input
                    type="text"
                    placeholder="Department name"
                    value={departmentForm.deptName}
                    onChange={(e) =>
                      setDepartmentForm((current) => ({
                        ...current,
                        deptName: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg text-black"
                  />
                  <textarea
                    rows={4}
                    placeholder="Department description"
                    value={departmentForm.deptDesc}
                    onChange={(e) =>
                      setDepartmentForm((current) => ({
                        ...current,
                        deptDesc: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg text-black"
                  />
                  <button
                    onClick={handleSubmitDepartment}
                    disabled={isLoading}
                    className="inline-flex items-center gap-2 bg-[#cb1b1a] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#a51615] disabled:opacity-50"
                  >
                    <Plus className="w-4 h-4" />
                    {editingDepartmentId ? "Update Department" : "Add Department"}
                  </button>
                </div>

                <div className="space-y-3">
                  {departments.map((item) => (
                    <div
                      key={item.id}
                      className="border border-slate-200 rounded-lg p-4"
                    >
                      <h3 className="font-bold text-slate-900 mb-2">{item.deptName}</h3>
                      <p className="text-slate-700 text-sm mb-3">{item.deptDesc}</p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setEditingDepartmentId(item.id);
                            setDepartmentForm({
                              deptName: item.deptName,
                              deptDesc: item.deptDesc,
                            });
                          }}
                          className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 font-semibold"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteDepartment(item.id)}
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
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
