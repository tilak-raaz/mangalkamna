"use client";

import { useEffect, useState } from "react";
import { ProtectedRoute } from "@/components/admin/ProtectedRoute";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { Plus, Edit, Trash2, X } from "lucide-react";

interface Doctor {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  image: string;
  bio: string;
}

export default function DoctorsManagement() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    experience: "",
    image: "",
    bio: "",
  });

  // Load doctors from localStorage (demo purposes)
  useEffect(() => {
    const stored = localStorage.getItem("doctors");
    if (stored) {
      setDoctors(JSON.parse(stored));
    }
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddDoctor = () => {
    if (!formData.name || !formData.specialization) {
      alert("Please fill in required fields");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      if (editingId) {
        // Update existing doctor
        setDoctors((prev) =>
          prev.map((doc) =>
            doc.id === editingId ? { ...formData, id: editingId } : doc,
          ),
        );
        setEditingId(null);
      } else {
        // Add new doctor
        const newDoctor: Doctor = {
          ...formData,
          id: Date.now().toString(),
        };
        setDoctors((prev) => [...prev, newDoctor]);
      }

      // Save to localStorage
      localStorage.setItem(
        "doctors",
        JSON.stringify(
          editingId
            ? doctors.map((doc) =>
                doc.id === editingId ? { ...formData, id: editingId } : doc,
              )
            : [...doctors, { ...formData, id: Date.now().toString() }],
        ),
      );

      setFormData({
        name: "",
        specialization: "",
        experience: "",
        image: "",
        bio: "",
      });
      setShowForm(false);
      setIsLoading(false);
    }, 500);
  };

  const handleEditDoctor = (doctor: Doctor) => {
    setFormData({
      name: doctor.name,
      specialization: doctor.specialization,
      experience: doctor.experience,
      image: doctor.image,
      bio: doctor.bio,
    });
    setEditingId(doctor.id);
    setShowForm(true);
  };

  const handleDeleteDoctor = (id: string) => {
    if (confirm("Are you sure you want to delete this doctor?")) {
      const updated = doctors.filter((doc) => doc.id !== id);
      setDoctors(updated);
      localStorage.setItem("doctors", JSON.stringify(updated));
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({
      name: "",
      specialization: "",
      experience: "",
      image: "",
      bio: "",
    });
  };

  return (
    <ProtectedRoute>
      <div className="flex">
        <AdminSidebar />

        {/* Main Content */}
        <main className="flex-1 ml-0 md:ml-64">
          <div className="p-4 md:p-8 bg-white min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center mb-8 mt-12 md:mt-0 pb-6 border-b border-slate-200">
              <div>
                <h1 className="text-4xl font-bold text-slate-900">
                  Doctors Management
                </h1>
                <p className="text-slate-600 mt-2">
                  Add, edit, or remove doctors from the system
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

            {/* Form Modal */}
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
                        Doctor Name *
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
                        Specialization *
                      </label>
                      <input
                        type="text"
                        name="specialization"
                        value={formData.specialization}
                        onChange={handleInputChange}
                        placeholder="Cardiology"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb1b1a] text-slate-900 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Experience (Years)
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
                        Image URL
                      </label>
                      <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleInputChange}
                        placeholder="https://..."
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb1b1a] text-slate-900 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Bio
                      </label>
                      <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        placeholder="Doctor's bio and qualifications..."
                        rows={4}
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
                      onClick={handleAddDoctor}
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

            {/* Doctors List */}
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
                    {doctor.image && (
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-1">
                        {doctor.name}
                      </h3>
                      <p className="text-[#cb1b1a] font-semibold mb-2">
                        {doctor.specialization}
                      </p>
                      <p className="text-sm text-slate-600 mb-4">
                        {doctor.experience}
                      </p>
                      {doctor.bio && (
                        <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                          {doctor.bio}
                        </p>
                      )}

                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditDoctor(doctor)}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors font-semibold"
                        >
                          <Edit className="w-4 h-4" />
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
