"use client";

import { useEffect, useState } from "react";
import { ProtectedRoute } from "@/components/admin/ProtectedRoute";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { Plus, Trash2 } from "lucide-react";

interface ServiceRecord {
  id: string;
  name: string;
  points: string[];
}

const emptyForm = {
  name: "",
  pointsText: "",
};

function splitLines(value: string) {
  return value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

export default function ServicesAdminPage() {
  const [services, setServices] = useState<ServiceRecord[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const loadServices = async () => {
    setError("");
    try {
      const response = await fetch("/api/services-page", { cache: "no-store" });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to load services.");
      }

      setServices(data.services || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load services.");
    }
  };

  useEffect(() => {
    loadServices();
  }, []);

  const handleSubmit = async () => {
    const points = splitLines(form.pointsText);

    if (!form.name.trim() || points.length === 0) {
      alert("Service name and at least one point are required.");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/services-page", {
        method: editingId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editingId, name: form.name, points }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to save service.");
      }

      if (editingId) {
        setServices((current) =>
          current.map((service) => (service.id === editingId ? data.service : service)),
        );
      } else {
        setServices((current) => [data.service, ...current]);
      }

      setForm(emptyForm);
      setEditingId(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save service.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this service?")) {
      return;
    }

    setError("");
    try {
      const response = await fetch("/api/services-page", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to delete service.");
      }

      setServices((current) => current.filter((service) => service.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete service.");
    }
  };

  return (
    <ProtectedRoute>
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 ml-0 md:ml-64">
          <div className="p-4 md:p-8 bg-white min-h-screen">
            <div className="mb-8 mt-12 md:mt-0 pb-6 border-b border-slate-200">
              <h1 className="text-4xl font-bold text-slate-900">Services</h1>
              <p className="text-slate-600 mt-2">
                Edit the services page and store points as an array.
              </p>
            </div>

            {error ? (
              <div className="mb-6 p-4 rounded-lg bg-red-50 text-red-700 border border-red-100 text-sm font-medium">
                {error}
              </div>
            ) : null}

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                {editingId ? "Edit Service" : "Add Service"}
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm((current) => ({ ...current, name: e.target.value }))}
                  placeholder="Service name"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-black"
                />
                <textarea
                  rows={6}
                  value={form.pointsText}
                  onChange={(e) => setForm((current) => ({ ...current, pointsText: e.target.value }))}
                  placeholder="Enter one point per line"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-black"
                />
                <p className="text-sm text-slate-500">
                  Each line becomes one point in the points array.
                </p>
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
              {services.map((service) => (
                <div key={service.id} className="p-5 border border-slate-200 rounded-2xl bg-white shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.name}</h3>
                  <ul className="list-disc pl-5 space-y-1 text-slate-600 text-sm mb-4">
                    {service.points.map((point, index) => (
                      <li key={`${service.id}-${index}`}>{point}</li>
                    ))}
                  </ul>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setEditingId(service.id);
                        setForm({ name: service.name, pointsText: service.points.join("\n") });
                      }}
                      className="px-4 py-2 rounded-lg bg-blue-50 text-blue-700 font-semibold"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(service.id)}
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
