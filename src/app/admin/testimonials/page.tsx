"use client";

import { useEffect, useState } from "react";
import { ProtectedRoute } from "@/components/admin/ProtectedRoute";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { Plus, Trash2 } from "lucide-react";

interface TestimonialRecord {
  id: string;
  name: string;
  deptConcerned: string;
  reviewText: string;
}

const emptyForm = {
  name: "",
  deptConcerned: "",
  reviewText: "",
};

export default function TestimonialsAdminPage() {
  const [testimonials, setTestimonials] = useState<TestimonialRecord[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const loadTestimonials = async () => {
    setError("");
    try {
      const response = await fetch("/api/home-testimonials", { cache: "no-store" });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to load testimonials.");
      }

      setTestimonials(data.testimonials || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load testimonials.");
    }
  };

  useEffect(() => {
    loadTestimonials();
  }, []);

  const handleSubmit = async () => {
    if (!form.name.trim() || !form.reviewText.trim()) {
      alert("Name and review text are required.");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/home-testimonials", {
        method: editingId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editingId, ...form }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to save testimonial.");
      }

      if (editingId) {
        setTestimonials((current) =>
          current.map((item) => (item.id === editingId ? data.testimonial : item)),
        );
      } else {
        setTestimonials((current) => [data.testimonial, ...current]);
      }

      setForm(emptyForm);
      setEditingId(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save testimonial.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
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
      setError(err instanceof Error ? err.message : "Failed to delete testimonial.");
    }
  };

  return (
    <ProtectedRoute>
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 ml-0 md:ml-64">
          <div className="p-4 md:p-8 bg-white min-h-screen">
            <div className="mb-8 mt-12 md:mt-0 pb-6 border-b border-slate-200">
              <h1 className="text-4xl font-bold text-slate-900">Testimonials</h1>
              <p className="text-slate-600 mt-2">
                Edit the testimonials_page table and add new testimonials.
              </p>
            </div>

            {error ? (
              <div className="mb-6 p-4 rounded-lg bg-red-50 text-red-700 border border-red-100 text-sm font-medium">
                {error}
              </div>
            ) : null}

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                {editingId ? "Edit Testimonial" : "Add Testimonial"}
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm((current) => ({ ...current, name: e.target.value }))}
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-black"
                />
                <input
                  type="text"
                  value={form.deptConcerned}
                  onChange={(e) =>
                    setForm((current) => ({ ...current, deptConcerned: e.target.value }))
                  }
                  placeholder="Department concerned"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-black"
                />
                <textarea
                  rows={5}
                  value={form.reviewText}
                  onChange={(e) =>
                    setForm((current) => ({ ...current, reviewText: e.target.value }))
                  }
                  placeholder="Review text"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-black"
                />
                <div className="flex gap-3">
                  <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="inline-flex items-center gap-2 bg-[#cb1b1a] text-white px-5 py-3 rounded-lg font-semibold disabled:opacity-50"
                  >
                    <Plus className="w-4 h-4" />
                    {editingId ? "Update" : "Add"}
                  </button>
                  {editingId ? (
                    <button
                      onClick={() => {
                        setForm(emptyForm);
                        setEditingId(null);
                      }}
                      className="px-5 py-3 rounded-lg border border-slate-300 font-semibold text-slate-700"
                    >
                      Cancel
                    </button>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {testimonials.map((item) => (
                <div key={item.id} className="p-5 border border-slate-200 rounded-2xl bg-white shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{item.name}</h3>
                  <p className="text-sm text-slate-500 mb-2">{item.deptConcerned}</p>
                  <p className="text-slate-600 text-sm mb-4">{item.reviewText}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setEditingId(item.id);
                        setForm({
                          name: item.name,
                          deptConcerned: item.deptConcerned,
                          reviewText: item.reviewText,
                        });
                      }}
                      className="px-4 py-2 rounded-lg bg-blue-50 text-blue-700 font-semibold"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-50 text-red-700 font-semibold"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
