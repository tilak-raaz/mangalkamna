"use client";

import { useEffect, useState } from "react";
import { ProtectedRoute } from "@/components/admin/ProtectedRoute";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { Plus, Trash2 } from "lucide-react";

interface DepartmentDetailRecord {
  id: string;
  deptName: string;
  deptDesc: string;
  conditionsTreated: string[];
  keyProcedures: string[];
  doctorName: string;
  doctorDesc: string;
}

const emptyDetailForm = {
  deptName: "",
  deptDesc: "",
  conditionsTreatedText: "",
  keyProceduresText: "",
  doctorName: "",
  doctorDesc: "",
};

function splitLines(value: string) {
  return value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

export default function PageAdditionAdminPage() {
  const [departmentDetails, setDepartmentDetails] = useState<
    DepartmentDetailRecord[]
  >([]);
  const [detailForm, setDetailForm] = useState(emptyDetailForm);
  const [editingDetailId, setEditingDetailId] = useState<string | null>(null);
  const [isDetailLoading, setIsDetailLoading] = useState(false);
  const [error, setError] = useState("");

  const loadDepartmentDetails = async () => {
    setError("");
    try {
      const response = await fetch("/api/separate-dept", { cache: "no-store" });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to load pages.");
      }

      setDepartmentDetails(data.departmentDetails || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load pages.");
    }
  };

  useEffect(() => {
    loadDepartmentDetails();
  }, []);

  const handleSubmitDetail = async () => {
    if (!detailForm.deptName.trim()) {
      alert("Department name is required.");
      return;
    }

    setError("");
    setIsDetailLoading(true);

    try {
      const response = await fetch("/api/separate-dept", {
        method: editingDetailId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editingDetailId,
          deptName: detailForm.deptName,
          deptDesc: detailForm.deptDesc,
          conditionsTreated: splitLines(detailForm.conditionsTreatedText),
          keyProcedures: splitLines(detailForm.keyProceduresText),
          doctorName: detailForm.doctorName,
          doctorDesc: detailForm.doctorDesc,
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to save page.");
      }

      if (editingDetailId) {
        setDepartmentDetails((current) =>
          current.map((item) =>
            item.id === editingDetailId ? data.departmentDetail : item,
          ),
        );
      } else {
        setDepartmentDetails((current) => [...current, data.departmentDetail]);
      }

      setDetailForm(emptyDetailForm);
      setEditingDetailId(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save page.");
    } finally {
      setIsDetailLoading(false);
    }
  };

  const handleDeleteDetail = async (id: string) => {
    if (!confirm("Delete this page?")) {
      return;
    }

    setError("");
    try {
      const response = await fetch("/api/separate-dept", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to delete page.");
      }

      setDepartmentDetails((current) => current.filter((item) => item.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete page.");
    }
  };

  return (
    <ProtectedRoute>
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 ml-0 md:ml-64">
          <div className="p-4 md:p-8 bg-white min-h-screen">
            <div className="mb-8 mt-12 md:mt-0 pb-6 border-b border-slate-200">
              <h1 className="text-4xl font-bold text-slate-900">Page Addition</h1>
              <p className="text-slate-600 mt-2">
                Edit the separate_dept table. Each entry becomes its own
                department page at /departments/[slug], reusing the same
                template with this content: conditions treated, key
                procedures, and a doctor. The department name must match a
                department created in the Departments tab.
              </p>
            </div>

            {error ? (
              <div className="mb-6 p-4 rounded-lg bg-red-50 text-red-700 border border-red-100 text-sm font-medium">
                {error}
              </div>
            ) : null}

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                {editingDetailId ? "Edit Page" : "Add New Page"}
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  value={detailForm.deptName}
                  onChange={(e) =>
                    setDetailForm((current) => ({ ...current, deptName: e.target.value }))
                  }
                  placeholder="Department name (must match the department in Departments tab)"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-black"
                />
                <textarea
                  rows={4}
                  value={detailForm.deptDesc}
                  onChange={(e) =>
                    setDetailForm((current) => ({ ...current, deptDesc: e.target.value }))
                  }
                  placeholder="Department description"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-black"
                />

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Conditions Treated
                  </label>
                  <textarea
                    rows={6}
                    value={detailForm.conditionsTreatedText}
                    onChange={(e) =>
                      setDetailForm((current) => ({
                        ...current,
                        conditionsTreatedText: e.target.value,
                      }))
                    }
                    placeholder={"Enter one condition per line, e.g.\nUrinary Stones\nProstate Enlargement"}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg text-black"
                  />
                  <p className="text-sm text-slate-500 mt-1">
                    Each line becomes one bullet point.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Key Procedures
                  </label>
                  <textarea
                    rows={6}
                    value={detailForm.keyProceduresText}
                    onChange={(e) =>
                      setDetailForm((current) => ({
                        ...current,
                        keyProceduresText: e.target.value,
                      }))
                    }
                    placeholder={"Enter one procedure per line, e.g.\nLaser Lithotripsy\nRadical Prostatectomy"}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg text-black"
                  />
                  <p className="text-sm text-slate-500 mt-1">
                    Each line becomes one bullet point.
                  </p>
                </div>

                <input
                  type="text"
                  value={detailForm.doctorName}
                  onChange={(e) =>
                    setDetailForm((current) => ({ ...current, doctorName: e.target.value }))
                  }
                  placeholder="Doctor name"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-black"
                />
                <textarea
                  rows={3}
                  value={detailForm.doctorDesc}
                  onChange={(e) =>
                    setDetailForm((current) => ({ ...current, doctorDesc: e.target.value }))
                  }
                  placeholder="Doctor description / role"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-black"
                />

                <div className="flex gap-3">
                  <button
                    onClick={handleSubmitDetail}
                    disabled={isDetailLoading}
                    className="inline-flex items-center gap-2 bg-[#cb1b1a] text-white px-5 py-3 rounded-lg font-semibold disabled:opacity-50"
                  >
                    <Plus className="w-4 h-4" />
                    {editingDetailId ? "Update" : "Add"}
                  </button>
                  {editingDetailId ? (
                    <button
                      onClick={() => {
                        setDetailForm(emptyDetailForm);
                        setEditingDetailId(null);
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
              {departmentDetails.map((detail) => (
                <div key={detail.id} className="p-5 border border-slate-200 rounded-2xl bg-white shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{detail.deptName}</h3>
                  <p className="text-slate-600 text-sm mb-3">{detail.deptDesc}</p>

                  {detail.conditionsTreated.length > 0 ? (
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-slate-500 uppercase mb-1">
                        Conditions Treated
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-slate-600 text-sm">
                        {detail.conditionsTreated.map((condition, index) => (
                          <li key={`${detail.id}-condition-${index}`}>{condition}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {detail.keyProcedures.length > 0 ? (
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-slate-500 uppercase mb-1">
                        Key Procedures
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-slate-600 text-sm">
                        {detail.keyProcedures.map((procedure, index) => (
                          <li key={`${detail.id}-procedure-${index}`}>{procedure}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {detail.doctorName ? (
                    <p className="text-slate-700 text-sm mb-4">
                      <span className="font-semibold">{detail.doctorName}</span>
                      {detail.doctorDesc ? ` — ${detail.doctorDesc}` : ""}
                    </p>
                  ) : null}

                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setEditingDetailId(detail.id);
                        setDetailForm({
                          deptName: detail.deptName,
                          deptDesc: detail.deptDesc,
                          conditionsTreatedText: detail.conditionsTreated.join("\n"),
                          keyProceduresText: detail.keyProcedures.join("\n"),
                          doctorName: detail.doctorName,
                          doctorDesc: detail.doctorDesc,
                        });
                      }}
                      className="px-4 py-2 rounded-lg bg-blue-50 text-blue-700 font-semibold"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteDetail(detail.id)}
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
