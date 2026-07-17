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
  FileText,
  Building2,
  ClipboardList,
  BedDouble,
  MessagesSquare,
  SquareLibrary,
  Search,
  FilePlus2,
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
    {
      label: "Home Content",
      href: "/admin/content",
      icon: FileText,
    },
    {
      label: "About Us",
      href: "/admin/about",
      icon: SquareLibrary,
    },
    {
      label: "Departments",
      href: "/admin/departments",
      icon: Building2,
    },
    {
      label: "Page Addition",
      href: "/admin/page-addition",
      icon: FilePlus2,
    },
    {
      label: "Services",
      href: "/admin/services",
      icon: ClipboardList,
    },
    {
      label: "Patient Info",
      href: "/admin/patient-info",
      icon: BedDouble,
    },
    {
      label: "Testimonials",
      href: "/admin/testimonials",
      icon: MessagesSquare,
    },
    {
      label: "SEO",
      href: "/admin/seo",
      icon: Search,
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
        className={`fixed left-0 top-0 z-40 h-screen w-64 bg-white border-r border-slate-200 transform transition-transform md:translate-x-0 flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="p-4 border-b border-slate-200 shrink-0">
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
        <div className="px-4 py-3 border-b border-slate-200 bg-slate-50 shrink-0">
          <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-0.5">
            Logged in as
          </p>
          <p className="text-sm font-semibold text-slate-900 truncate">{adminId}</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 min-h-0 overflow-y-auto p-3 space-y-0.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-red-50 hover:text-[#cb1b1a] transition-colors group font-medium"
                onClick={() => setIsOpen(false)}
              >
                <Icon className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className="p-3 border-t border-slate-200 shrink-0">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 py-2.5 rounded-lg font-semibold text-sm transition-colors"
          >
            <LogOut className="w-4 h-4" />
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
