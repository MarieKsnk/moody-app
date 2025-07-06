"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import type { ReactNode } from "react";

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
    router.push("/login");
  }

  return <>{children}</>;
};
