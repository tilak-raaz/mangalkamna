"use client";

import { ProtectedRoute } from "@/components/admin/ProtectedRoute";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { SEOSettingsForm } from "@/components/admin/SEOSettings";

export default function SEOSettingsPage() {
  return (
    <ProtectedRoute>
      <div className="flex gap-6 md:gap-8 min-h-screen bg-slate-50 p-4 md:p-8">
        {/* Sidebar */}
        <AdminSidebar />

        {/* Main Content */}
        <main className="flex-1 md:ml-64">
          <div className="max-w-6xl">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-slate-900 mb-2">
                SEO Settings
              </h1>
              <p className="text-slate-600">
                Manage the website's page title, meta description, and keywords.
              </p>
            </div>

            {/* Info Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-1">📝 Title</h3>
                <p className="text-sm text-blue-800">
                  Your website's main title for search engines
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 mb-1">
                  📄 Description
                </h3>
                <p className="text-sm text-green-800">
                  Brief description shown in search results
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h3 className="font-semibold text-purple-900 mb-1">
                  🎯 Keywords
                </h3>
                <p className="text-sm text-purple-800">
                  Meta keywords for search indexing
                </p>
              </div>
            </div>

            {/* SEO Settings Form */}
            <SEOSettingsForm />
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
