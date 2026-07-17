"use client";

import { useEffect, useState } from "react";
import { ProtectedRoute } from "@/components/admin/ProtectedRoute";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { Plus, Trash2 } from "lucide-react";

interface RoomRecord {
  id: string;
  roomType: string;
  amenities: string;
  occupancy: string;
  insuranceDetails: string[];
}

const emptyForm = {
  roomType: "",
  amenities: "",
  occupancy: "",
  insuranceDetailsText: "",
};

function splitLines(value: string) {
  return value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

export default function PatientInfoAdminPage() {
  const [rooms, setRooms] = useState<RoomRecord[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const loadRooms = async () => {
    setError("");
    try {
      const response = await fetch("/api/patient-page", { cache: "no-store" });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to load room categories.");
      }

      setRooms(data.rooms || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load room categories.");
    }
  };

  useEffect(() => {
    loadRooms();
  }, []);

  const handleSubmit = async () => {
    const insuranceDetails = splitLines(form.insuranceDetailsText);

    if (!form.roomType.trim() || !form.amenities.trim() || !form.occupancy.trim()) {
      alert("Room type, amenities, and occupancy are required.");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/patient-page", {
        method: editingId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editingId,
          roomType: form.roomType,
          amenities: form.amenities,
          occupancy: form.occupancy,
          insuranceDetails,
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to save room category.");
      }

      if (editingId) {
        setRooms((current) =>
          current.map((room) => (room.id === editingId ? data.room : room)),
        );
      } else {
        setRooms((current) => [data.room, ...current]);
      }

      setForm(emptyForm);
      setEditingId(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save room category.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this room category?")) {
      return;
    }

    setError("");
    try {
      const response = await fetch("/api/patient-page", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to delete room category.");
      }

      setRooms((current) => current.filter((room) => room.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete room category.");
    }
  };

  return (
    <ProtectedRoute>
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 ml-0 md:ml-64">
          <div className="p-4 md:p-8 bg-white min-h-screen">
            <div className="mb-8 mt-12 md:mt-0 pb-6 border-b border-slate-200">
              <h1 className="text-4xl font-bold text-slate-900">Patient Info</h1>
              <p className="text-slate-600 mt-2">
                Edit the room categories component in patient_page.
              </p>
            </div>

            {error ? (
              <div className="mb-6 p-4 rounded-lg bg-red-50 text-red-700 border border-red-100 text-sm font-medium">
                {error}
              </div>
            ) : null}

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                {editingId ? "Edit Room Category" : "Add Room Category"}
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  value={form.roomType}
                  onChange={(e) => setForm((current) => ({ ...current, roomType: e.target.value }))}
                  placeholder="Room type"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-black"
                />
                <textarea
                  rows={4}
                  value={form.amenities}
                  onChange={(e) => setForm((current) => ({ ...current, amenities: e.target.value }))}
                  placeholder="Amenities"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-black"
                />
                <input
                  type="text"
                  value={form.occupancy}
                  onChange={(e) => setForm((current) => ({ ...current, occupancy: e.target.value }))}
                  placeholder="Occupancy"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-black"
                />
                <textarea
                  rows={4}
                  value={form.insuranceDetailsText}
                  onChange={(e) => setForm((current) => ({ ...current, insuranceDetailsText: e.target.value }))}
                  placeholder="Insurance details, one per line"
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
              {rooms.map((room) => (
                <div key={room.id} className="p-5 border border-slate-200 rounded-2xl bg-white shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{room.roomType}</h3>
                  <p className="text-slate-600 text-sm mb-1">{room.amenities}</p>
                  <p className="text-slate-500 text-sm mb-2">Occupancy: {room.occupancy}</p>
                  {room.insuranceDetails.length > 0 ? (
                    <ul className="list-disc pl-5 space-y-1 text-slate-600 text-sm mb-4">
                      {room.insuranceDetails.map((detail, index) => (
                        <li key={`${room.id}-${index}`}>{detail}</li>
                      ))}
                    </ul>
                  ) : null}
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setEditingId(room.id);
                        setForm({
                          roomType: room.roomType,
                          amenities: room.amenities,
                          occupancy: room.occupancy,
                          insuranceDetailsText: room.insuranceDetails.join("\n"),
                        });
                      }}
                      className="px-4 py-2 rounded-lg bg-blue-50 text-blue-700 font-semibold"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(room.id)}
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
