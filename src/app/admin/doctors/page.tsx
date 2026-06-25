"use client";

import { useEffect, useState } from "react";
import { ProtectedRoute } from "@/components/admin/ProtectedRoute";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { ImagePlus, Plus, Trash2, X } from "lucide-react";

interface DoctorRecord {
  id: string;
  name: string;
  speciality: string;
  doctorImage: string;
  experience: string;
  description: string;
  createdAt: string;
}

const emptyForm = {
  name: "",
  speciality: "",
  doctorImage: "",
  experience: "",
  description: "",
};

export default function DoctorsManagement() {
  const [doctors, setDoctors] = useState<DoctorRecord[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState(emptyForm);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const cloudinaryCloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const cloudinaryUploadPreset =
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  const loadDoctors = async () => {
    setError("");

    try {
      const response = await fetch("/api/doctors", { cache: "no-store" });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to load doctors.");
      }

      setDoctors(data.doctors || []);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to load doctors.";
      setError(message);
    }
  };

  useEffect(() => {
    loadDoctors();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData(emptyForm);
    setSelectedFile(null);
    setShowForm(false);
    setEditingId(null);
  };

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

  const handleSubmit = async () => {
    if (
      !formData.name ||
      !formData.speciality ||
      !formData.experience ||
      !formData.description
    ) {
      alert("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      let doctorImage = formData.doctorImage;

      if (selectedFile) {
        doctorImage = await uploadToCloudinary(selectedFile);
      }

      if (!doctorImage) {
        throw new Error("Please select a doctor image.");
      }

      const response = await fetch("/api/doctors", {
        method: editingId ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: editingId,
          ...formData,
          doctorImage,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to save doctor.");
      }

      if (editingId) {
        setDoctors((current) =>
          current.map((doctor) =>
            doctor.id === editingId ? data.doctor : doctor,
          ),
        );
      } else {
        setDoctors((current) => [data.doctor, ...current]);
      }

      resetForm();
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to save doctor.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditDoctor = (doctor: DoctorRecord) => {
    setFormData({
      name: doctor.name,
      speciality: doctor.speciality,
      doctorImage: doctor.doctorImage,
      experience: doctor.experience,
      description: doctor.description,
    });
    setSelectedFile(null);
    setEditingId(doctor.id);
    setShowForm(true);
  };

  const handleDeleteDoctor = async (id: string) => {
    if (!confirm("Are you sure you want to delete this doctor?")) {
      return;
    }

    setError("");

    try {
      const response = await fetch("/api/doctors", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to delete doctor.");
      }

      setDoctors((current) => current.filter((doctor) => doctor.id !== id));
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to delete doctor.";
      setError(message);
    }
  };

  const handleCancel = () => {
    resetForm();
  };

  return (
    <ProtectedRoute>
      <div className="flex">
        <AdminSidebar />

        <main className="flex-1 ml-0 md:ml-64">
          <div className="p-4 md:p-8 bg-white min-h-screen">
            <div className="flex justify-between items-center mb-8 mt-12 md:mt-0 pb-6 border-b border-slate-200">
              <div>
                <h1 className="text-4xl font-bold text-slate-900">
                  Doctors Management
                </h1>
                <p className="text-slate-600 mt-2">
                  Add or remove doctors from the Appwrite database
                </p>
              </div>
              <button
                onClick={() => setShowForm(true)}
                className="flex items-center gap-2 bg-[#cb1b1a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#a51615] transition-colors"
              >
                <Plus className="w-5 h-5" />
                Add Doctor
              </button>
            </div>

            {error ? (
              <div className="mb-6 p-4 rounded-lg bg-red-50 text-red-700 border border-red-100 text-sm font-medium">
                {error}
              </div>
            ) : null}

            {showForm && (
              <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-slate-900">
                      {editingId ? "Edit Doctor" : "Add New Doctor"}
                    </h2>
                    <button
                      onClick={handleCancel}
                      className="text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Dr. John Doe"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb1b1a] text-slate-900 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Speciality *
                      </label>
                      <input
                        type="text"
                        name="speciality"
                        value={formData.speciality}
                        onChange={handleInputChange}
                        placeholder="Cardiology"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb1b1a] text-slate-900 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Doctor Image *
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          setSelectedFile(e.target.files?.[0] || null)
                        }
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb1b1a] text-slate-900 bg-white"
                      />
                      <div className="mt-3 rounded-xl border border-dashed border-slate-200 bg-slate-50 p-4 flex items-center gap-3">
                        <ImagePlus className="w-5 h-5 text-slate-400" />
                        <div className="text-sm text-slate-600">
                          {selectedFile ? (
                            <span className="font-medium text-slate-900">
                              {selectedFile.name}
                            </span>
                          ) : formData.doctorImage ? (
                            <span>
                              Existing image will be kept unless you choose a
                              new file.
                            </span>
                          ) : (
                            <span>
                              Select an image file to upload to Cloudinary.
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Experience *
                      </label>
                      <input
                        type="text"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        placeholder="10 years"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb1b1a] text-slate-900 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Description *
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Doctor's bio and qualifications..."
                        rows={5}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb1b1a] text-slate-900 bg-white"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <button
                      onClick={handleCancel}
                      className="flex-1 px-6 py-3 border-2 border-slate-300 rounded-lg font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={isLoading}
                      className="flex-1 px-6 py-3 bg-[#cb1b1a] text-white rounded-lg font-semibold hover:bg-[#a51615] disabled:opacity-50 transition-colors"
                    >
                      {isLoading
                        ? "Saving..."
                        : editingId
                          ? "Update Doctor"
                          : "Add Doctor"}
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {doctors.length === 0 ? (
                <div className="col-span-full p-12 text-center bg-slate-50 rounded-lg border border-slate-200">
                  <p className="text-slate-500 text-lg">
                    No doctors added yet. Click "Add Doctor" to get started.
                  </p>
                </div>
              ) : (
                doctors.map((doctor) => (
                  <div
                    key={doctor.id}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-200"
                  >
                    {doctor.doctorImage && (
                      <img
                        src={doctor.doctorImage}
                        alt={doctor.name}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-1">
                        {doctor.name}
                      </h3>
                      <p className="text-[#cb1b1a] font-semibold mb-2">
                        {doctor.speciality}
                      </p>
                      <p className="text-sm text-slate-600 mb-4">
                        {doctor.experience}
                      </p>
                      <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                        {doctor.description}
                      </p>

                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditDoctor(doctor)}
                          className="flex-1 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors font-semibold"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteDoctor(doctor.id)}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-semibold"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                      </div>
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
