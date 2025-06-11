"use client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import type { ReactNode } from "react";

export const AuthWrapper = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { isLoading, isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isLoading, isAuthenticated]);

  if (isLoading || !isAuthenticated) {
    return <p>Chargement sécurisé…</p>;
  }

  return <>{children}</>;
};
