"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import type { ReactNode } from "react";
import LoginPage from "@/pages/login";

export const AuthWrapper = ({ children }: { children: ReactNode }) => {
  
  const router = useRouter();
  const { isLoading, isAuthenticated } = useAuth();

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated || isLoading) {
    return <p>Chargement…</p>;
  }

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return <>{children}</>;
};
