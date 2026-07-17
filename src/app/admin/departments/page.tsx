"use client";

import { useEffect, useState } from "react";
import { ProtectedRoute } from "@/components/admin/ProtectedRoute";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { Plus, Trash2 } from "lucide-react";

interface DepartmentRecord {
  id: string;
  deptName: string;
  deptDesc: string;
}

const emptyForm = {
  deptName: "",
  deptDesc: "",
};

export default function DepartmentsAdminPage() {
  const [departments, setDepartments] = useState<DepartmentRecord[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const loadDepartments = async () => {
    setError("");
    try {
      const response = await fetch("/api/home-departments", { cache: "no-store" });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to load departments.");
      }

      setDepartments(data.departments || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load departments.");
    }
  };

  useEffect(() => {
    loadDepartments();
  }, []);

  const handleSubmit = async () => {
    if (!form.deptName.trim() || !form.deptDesc.trim()) {
      alert("Department name and description are required.");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/home-departments", {
        method: editingId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editingId, ...form }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to save department.");
      }

      if (editingId) {
        setDepartments((current) =>
          current.map((department) =>
            department.id === editingId ? data.department : department,
          ),
        );
      } else {
        setDepartments((current) => [data.department, ...current]);
      }

      setForm(emptyForm);
      setEditingId(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save department.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
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

      setDepartments((current) => current.filter((department) => department.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete department.");
    }
  };

  return (
    <ProtectedRoute>
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 ml-0 md:ml-64">
          <div className="p-4 md:p-8 bg-white min-h-screen">
            <div className="mb-8 mt-12 md:mt-0 pb-6 border-b border-slate-200">
              <h1 className="text-4xl font-bold text-slate-900">Departments</h1>
              <p className="text-slate-600 mt-2">
                Edit the department table and add new departments.
              </p>
            </div>

            {error ? (
              <div className="mb-6 p-4 rounded-lg bg-red-50 text-red-700 border border-red-100 text-sm font-medium">
                {error}
              </div>
            ) : null}

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                {editingId ? "Edit Department" : "Add Department"}
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  value={form.deptName}
                  onChange={(e) => setForm((current) => ({ ...current, deptName: e.target.value }))}
                  placeholder="Department name"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-black"
                />
                <textarea
                  rows={5}
                  value={form.deptDesc}
                  onChange={(e) => setForm((current) => ({ ...current, deptDesc: e.target.value }))}
                  placeholder="Department description"
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
              {departments.map((department) => (
                <div key={department.id} className="p-5 border border-slate-200 rounded-2xl bg-white shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{department.deptName}</h3>
                  <p className="text-slate-600 text-sm mb-4">{department.deptDesc}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setEditingId(department.id);
                        setForm({ deptName: department.deptName, deptDesc: department.deptDesc });
                      }}
                      className="px-4 py-2 rounded-lg bg-blue-50 text-blue-700 font-semibold"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(department.id)}
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
