"use client";

import React, { createContext, useState, useContext, useCallback } from "react";
import { seedInitialData } from "./seedData";

interface AdminContextType {
  isAuthenticated: boolean;
  adminId: string | null;
  login: (id: string, password: string) => boolean;
  logout: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminId, setAdminId] = useState<string | null>(null);

  const login = useCallback((id: string, password: string) => {
    // Simple client-side validation (production should use backend)
    if (id === "admin" && password === "admin123") {
      setIsAuthenticated(true);
      setAdminId(id);
      localStorage.setItem(
        "adminAuth",
        JSON.stringify({ id, timestamp: Date.now() }),
      );
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    setAdminId(null);
    localStorage.removeItem("adminAuth");
  }, []);

  // Check for existing session on mount and seed initial data
  React.useEffect(() => {
    // Seed initial data on first load
    seedInitialData();

    const stored = localStorage.getItem("adminAuth");
    if (stored) {
      try {
        const { id } = JSON.parse(stored);
        setIsAuthenticated(true);
        setAdminId(id);
      } catch (e) {
        localStorage.removeItem("adminAuth");
      }
    }
  }, []);

  return (
    <AdminContext.Provider value={{ isAuthenticated, adminId, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdmin must be used within AdminProvider");
  }
  return context;
}
