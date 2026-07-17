"use client";

import { useEffect, useState } from "react";
import { ProtectedRoute } from "@/components/admin/ProtectedRoute";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { Plus, Trash2 } from "lucide-react";

interface SeoDetailRecord {
  id: string;
  pageTitle: string;
  metaDescription: string;
  metaKeywords: string;
  seoScore: number;
  lastCrawled: string;
}

const emptyForm = {
  pageTitle: "",
  metaDescription: "",
  metaKeywords: "",
};

export default function SeoAdminPage() {
  const [seoDetails, setSeoDetails] = useState<SeoDetailRecord[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingSeoScore, setEditingSeoScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const loadSeoDetails = async () => {
    setError("");
    try {
      const response = await fetch("/api/seo-details", { cache: "no-store" });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to load SEO details.");
      }

      setSeoDetails(data.seoDetails || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load SEO details.");
    }
  };

  useEffect(() => {
    loadSeoDetails();
  }, []);

  const handleSubmit = async () => {
    if (
      !form.pageTitle.trim() ||
      !form.metaDescription.trim() ||
      !form.metaKeywords.trim()
    ) {
      alert("Page title, meta description, and meta keywords are required.");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/seo-details", {
        method: editingId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editingId,
          pageTitle: form.pageTitle,
          metaDescription: form.metaDescription,
          metaKeywords: form.metaKeywords,
          seoScore: editingSeoScore,
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to save SEO detail.");
      }

      if (editingId) {
        setSeoDetails((current) =>
          current.map((item) => (item.id === editingId ? data.seoDetail : item)),
        );
      } else {
        setSeoDetails((current) => [data.seoDetail, ...current]);
      }

      setForm(emptyForm);
      setEditingId(null);
      setEditingSeoScore(0);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save SEO detail.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this SEO detail?")) {
      return;
    }

    setError("");
    try {
      const response = await fetch("/api/seo-details", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to delete SEO detail.");
      }

      setSeoDetails((current) => current.filter((item) => item.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete SEO detail.");
    }
  };

  return (
    <ProtectedRoute>
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 ml-0 md:ml-64">
          <div className="p-4 md:p-8 bg-white min-h-screen">
            <div className="mb-8 mt-12 md:mt-0 pb-6 border-b border-slate-200">
              <h1 className="text-4xl font-bold text-slate-900">SEO Details</h1>
              <p className="text-slate-600 mt-2">
                Edit page title, meta description, and meta keywords per page.
              </p>
            </div>

            {error ? (
              <div className="mb-6 p-4 rounded-lg bg-red-50 text-red-700 border border-red-100 text-sm font-medium">
                {error}
              </div>
            ) : null}

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                {editingId ? "Edit SEO Detail" : "Add SEO Detail"}
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  value={form.pageTitle}
                  onChange={(e) =>
                    setForm((current) => ({ ...current, pageTitle: e.target.value }))
                  }
                  placeholder="Page title (e.g. Home, About Us, Services)"
                  maxLength={256}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-black"
                />
                <textarea
                  rows={3}
                  value={form.metaDescription}
                  onChange={(e) =>
                    setForm((current) => ({
                      ...current,
                      metaDescription: e.target.value,
                    }))
                  }
                  placeholder="Meta description"
                  maxLength={500}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-black"
                />
                <input
                  type="text"
                  value={form.metaKeywords}
                  onChange={(e) =>
                    setForm((current) => ({ ...current, metaKeywords: e.target.value }))
                  }
                  placeholder="Meta keywords, comma separated"
                  maxLength={300}
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
                        setEditingSeoScore(0);
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
              {seoDetails.map((item) => (
                <div key={item.id} className="p-5 border border-slate-200 rounded-2xl bg-white shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.pageTitle}</h3>
                  <p className="text-slate-600 text-sm mb-2">{item.metaDescription}</p>
                  <p className="text-slate-500 text-xs mb-2">Keywords: {item.metaKeywords}</p>
                  {item.lastCrawled ? (
                    <p className="text-slate-400 text-xs mb-4">
                      Last updated: {new Date(item.lastCrawled).toLocaleString()}
                    </p>
                  ) : null}
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setEditingId(item.id);
                        setEditingSeoScore(item.seoScore);
                        setForm({
                          pageTitle: item.pageTitle,
                          metaDescription: item.metaDescription,
                          metaKeywords: item.metaKeywords,
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
