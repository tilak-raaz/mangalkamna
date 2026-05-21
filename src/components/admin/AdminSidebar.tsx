"use client";

import { useAdmin } from "@/lib/adminContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  LogOut,
  LayoutDashboard,
  Users,
  Image,
  Video,
  Home,
} from "lucide-react";
import { useState } from "react";

export function AdminSidebar() {
  const { logout, adminId } = useAdmin();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push("/admin");
  };

  const navItems = [
    {
      label: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Doctors",
      href: "/admin/doctors",
      icon: Users,
    },
    {
      label: "Gallery",
      href: "/admin/gallery",
      icon: Image,
    },
    {
      label: "Videos",
      href: "/admin/videos",
      icon: Video,
    },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden p-2 bg-[#1f2937] text-white rounded-lg hover:bg-[#111827]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 h-screen w-64 bg-white border-r border-slate-200 transform transition-transform md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-slate-200">
          <Link href="/admin/dashboard" className="flex items-center gap-3">
            <div className="p-2 bg-[#cb1b1a] rounded">
              <LayoutDashboard className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-lg font-bold text-slate-900">
                Mangalkamna
              </span>
              <p className="text-xs text-slate-500">Admin</p>
            </div>
          </Link>
        </div>

        {/* Admin Info */}
        <div className="p-6 border-b border-slate-200 bg-slate-50">
          <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
            Logged in as
          </p>
          <p className="text-lg font-semibold text-slate-900">{adminId}</p>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-700 hover:bg-red-50 hover:text-[#cb1b1a] transition-colors group font-medium"
                onClick={() => setIsOpen(false)}
              >
                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Divider */}
        <div className="mx-4 my-4 border-t border-slate-200"></div>

        {/* Logout Button */}
        <div className="p-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 py-3 rounded-lg font-semibold transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
