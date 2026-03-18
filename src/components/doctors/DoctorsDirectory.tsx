"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Stethoscope,
  GraduationCap,
  Globe,
  CalendarClock,
  CalendarCheck,
} from "lucide-react";
import {
  doctorsData,
  getUniqueDepartments,
  type Doctor,
} from "@/data/doctorsData";

export default function DoctorsDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [availabilityFilter, setAvailabilityFilter] = useState("All");

  const departments = ["All", ...getUniqueDepartments()];

  const filteredDoctors = useMemo(() => {
    return doctorsData.filter((doctor: Doctor) => {
      const matchName = doctor.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchDept =
        selectedDept === "All" || doctor.specialization === selectedDept;

      let matchAvailability = true;
      if (availabilityFilter === "Available Today") {
        matchAvailability = doctor.isAvailableToday === true;
      }

      return matchName && matchDept && matchAvailability;
    });
  }, [searchTerm, selectedDept, availabilityFilter]);

  return (
    <section className="py-20 bg-slate-50 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Fillter Bar */}
        <div className="bg-white rounded-2xl md:rounded-full shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] p-4 md:p-6 mb-12 flex flex-col md:flex-row gap-4 border border-slate-100 z-20 relative">
          {/* Search by Name */}
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search doctor by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-xl md:rounded-full focus:ring-2 focus:ring-[#cb1b1a]/20 focus:bg-white transition-all text-slate-700 font-medium placeholder:font-normal"
            />
          </div>

          {/* Spacer / Divider on Desktop */}
          <div className="hidden md:block w-px bg-slate-200 mx-2 self-stretch my-2"></div>

          {/* Department Filter */}
          <div className="flex-1 md:max-w-[250px]">
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl md:rounded-full focus:ring-2 focus:ring-[#cb1b1a]/20 focus:bg-white transition-all text-slate-700 font-medium appearance-none cursor-pointer"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                backgroundPosition: "right 0.5rem center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "1.5em 1.5em",
                paddingRight: "2.5rem",
              }}
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept === "All" ? "All Departments" : dept}
                </option>
              ))}
            </select>
          </div>

          {/* Spacer / Divider on Desktop */}
          <div className="hidden md:block w-px bg-slate-200 mx-2 self-stretch my-2"></div>

          {/* Availability Filter */}
          <div className="flex-1 md:max-w-[200px]">
            <select
              value={availabilityFilter}
              onChange={(e) => setAvailabilityFilter(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl md:rounded-full focus:ring-2 focus:ring-[#cb1b1a]/20 focus:bg-white transition-all text-slate-700 font-medium appearance-none cursor-pointer"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                backgroundPosition: "right 0.5rem center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "1.5em 1.5em",
                paddingRight: "2.5rem",
              }}
            >
              <option value="All">Any Availability</option>
              <option value="Available Today">Available Today</option>
            </select>
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-slate-500 font-medium">
            Showing{" "}
            <span className="font-bold text-slate-900">
              {filteredDoctors.length}
            </span>{" "}
            specialist(s)
          </h2>
        </div>

        {/* Grid of Doctors */}
        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {filteredDoctors.map((doctor: Doctor) => (
              <div
                key={doctor.id}
                className="group flex flex-col sm:flex-row bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-[#cb1b1a]/30 hover:shadow-[0_20px_40px_-15px_rgba(203,27,26,0.1)] transition-all duration-300"
              >
                {/* Photo Section */}
                <div className="w-full sm:w-2/5 md:w-1/3 relative h-64 sm:h-auto bg-slate-100 overflow-hidden shrink-0">
                  <Image
                    src={doctor.photo}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {doctor.isAvailableToday && (
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/90 backdrop-blur-md text-white text-xs font-bold rounded-full shadow-lg">
                      <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                      Available Today
                    </div>
                  )}
                </div>

                {/* Info Section */}
                <div className="flex-1 p-6 relative flex flex-col">
                  {/* Decorative faint icon in bg */}
                  <Stethoscope className="absolute top-6 right-6 w-24 h-24 text-slate-50 opacity-50 pointer-events-none -rotate-12 transition-transform group-hover:scale-110 duration-500" />

                  <div className="relative z-10 flex-1">
                    <span className="text-[#cb1b1a] font-bold text-xs uppercase tracking-wider mb-2 block">
                      {doctor.specialization}
                    </span>
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-1 group-hover:text-[#681412] transition-colors">
                      {doctor.name}
                    </h3>
                    <p className="text-slate-600 font-medium text-sm mb-4 border-b border-slate-100 pb-4">
                      {doctor.designation}
                    </p>

                    <div className="space-y-2.5 mb-6">
                      <div className="flex items-start gap-2.5 text-sm text-slate-600">
                        <GraduationCap className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                        <span className="font-medium leading-snug">
                          {doctor.qualifications}
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5 text-sm text-slate-600">
                        <Globe className="w-4 h-4 text-slate-400 shrink-0" />
                        <span className="font-medium">
                          {doctor.languages.join(", ")}
                        </span>
                      </div>
                      <div className="flex items-start gap-2.5 text-sm text-slate-600">
                        <CalendarClock className="w-4 h-4 text-[#cb1b1a] mt-0.5 shrink-0" />
                        <span className="font-medium text-slate-700">
                          {doctor.opdSchedule}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="relative z-10 pt-4 flex items-center justify-between gap-4 mt-auto">
                    <Link
                      href={`/doctors/${doctor.slug}`}
                      className="text-sm font-bold text-slate-500 hover:text-[#cb1b1a] transition-colors"
                    >
                      View Profile
                    </Link>
                    <Link
                      href="#appointment"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#681412] text-white text-sm font-bold rounded-full hover:bg-[#cb1b1a] hover:shadow-md hover:shadow-[#cb1b1a]/20 transition-all duration-300"
                    >
                      <CalendarCheck size={16} />
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center py-20 bg-white rounded-3xl border border-slate-100">
            <div className="text-center max-w-md mx-auto">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                <Search size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                No doctors found
              </h3>
              <p className="text-slate-500 mb-6">
                We couldn&apos;t find any specialist matching your current
                filters. Try changing the department or search term.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedDept("All");
                  setAvailabilityFilter("All");
                }}
                className="text-[#cb1b1a] font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
