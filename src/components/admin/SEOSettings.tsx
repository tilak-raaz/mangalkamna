"use client";

import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { Save, AlertCircle, CheckCircle, Loader } from "lucide-react";

interface SEOSettings {
  id?: string;
  pageTitle: string;
  metaDescription: string;
  metaKeywords: string;
  updatedAt?: string;
}

export function SEOSettingsForm() {
  const [formData, setFormData] = useState<SEOSettings>({
    pageTitle: "",
    metaDescription: "",
    metaKeywords: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  // Fetch SEO settings on mount
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch("/api/seo");
        const data = await response.json();

        if (data.success && data.seoSettings) {
          setFormData({
            id: data.seoSettings.id,
            pageTitle: data.seoSettings.pageTitle || "",
            metaDescription: data.seoSettings.metaDescription || "",
            metaKeywords: data.seoSettings.metaKeywords || "",
            updatedAt: data.seoSettings.updatedAt,
          });
        }
      } catch (error) {
        console.error("Error fetching SEO settings:", error);
        setMessage({
          type: "error",
          text: "Failed to load SEO settings",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    try {
      const response = await fetch("/api/seo", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({
          type: "success",
          text: "SEO settings updated successfully!",
        });
        setFormData(data.seoSettings);
      } else {
        setMessage({
          type: "error",
          text: data.error || "Failed to update SEO settings",
        });
      }
    } catch (error) {
      console.error("Error updating SEO settings:", error);
      setMessage({
        type: "error",
        text: "An error occurred while updating settings",
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader className="w-8 h-8 text-[#cb1b1a] animate-spin" />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      {/* Message Alert */}
      {message && (
        <div
          className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
            message.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {message.type === "success" ? (
            <CheckCircle className="w-5 h-5 shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 shrink-0" />
          )}
          <span>{message.text}</span>
        </div>
      )}

      {/* Page Title */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Page Title *
        </label>
        <input
          type="text"
          name="pageTitle"
          value={formData.pageTitle}
          onChange={handleChange}
          maxLength={256}
          placeholder="Your Hospital Name"
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb1b1a]"
          required
        />
        <p className="text-xs text-slate-500 mt-1">
          {formData.pageTitle.length}/256 characters
        </p>
      </div>

      {/* Meta Description */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Meta Description *
        </label>
        <textarea
          name="metaDescription"
          value={formData.metaDescription}
          onChange={handleChange}
          maxLength={500}
          placeholder="Brief description of your hospital..."
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb1b1a] resize-none"
          rows={3}
          required
        />
        <p className="text-xs text-slate-500 mt-1">
          {formData.metaDescription.length}/500 characters
        </p>
      </div>

      {/* Meta Keywords */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Meta Keywords (comma-separated)
        </label>
        <textarea
          name="metaKeywords"
          value={formData.metaKeywords}
          onChange={handleChange}
          placeholder="hospital, healthcare, medical, doctors..."
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb1b1a] resize-none"
          rows={2}
        />
      </div>

      {/* Save Button */}
      <div className="flex gap-4 pt-6 border-t">
        <button
          type="submit"
          disabled={saving}
          className="flex items-center gap-2 bg-[#cb1b1a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {saving ? (
            <>
              <Loader className="w-5 h-5 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save className="w-5 h-5" />
              Save SEO Settings
            </>
          )}
        </button>
      </div>

      {/* Last Updated Info */}
      {formData.updatedAt && (
        <p className="text-xs text-slate-500 mt-4">
          Last updated: {new Date(formData.updatedAt).toLocaleString()}
        </p>
      )}
    </form>
  );
}
