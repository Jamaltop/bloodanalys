"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type User = {
  username: string;
  fullname?: string;
  email?: string;
  avatar: string;
};

type AuthContextType = {
  user: User | null;
  login: (user: User) => void;
  register: (user: User) => void;
  logout: () => void;
  updateName: (name: string) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("auth_user");
      if (raw) setUser(JSON.parse(raw));
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      if (user) localStorage.setItem("auth_user", JSON.stringify(user));
      else localStorage.removeItem("auth_user");
    } catch (e) {
      // ignore
    }
  }, [user]);

  const login = (u: User) => setUser(u);
  const register = (u: User) => setUser(u);
  const logout = () => setUser(null);
  const updateName = (name: string) =>
    setUser((prev) => (prev ? { ...prev, username: name } : prev));

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateName }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
