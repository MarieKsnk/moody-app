import { useEffect } from "react";
import { useAuthStore } from "@/stores/authStore";
import { useQuery } from "@tanstack/react-query";
import { fetchMe } from "@/api/authAPI";
import { useIsClient } from "@/hooks/useIsClient";

const setToken = useAuthStore.getState().setToken;
const setUser = useAuthStore.getState().setUser;
const toggleAuth = useAuthStore.getState().toggleAuth;

export function useAuth() {
  const isClient = useIsClient();

  useEffect(() => {
    if (isClient) {
      const token = localStorage.getItem("token");
      if (token) setToken(token);
    }
  }, [isClient]);

  const token = useAuthStore((s) => s.token);

  const { data, isLoading, error } = useQuery({
    queryKey: ["me", token],
    queryFn: () => fetchMe(token),
    enabled: !!token,
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    if (data) {
      setUser(data);
      toggleAuth(true);
    } else if (error && token) {
      setUser(null);
      toggleAuth(false);
      setToken(null);
      localStorage.removeItem("token");
    }
  }, [data, error, token]);

  return {
    user: useAuthStore((s) => s.user),
    isAuthenticated: useAuthStore((s) => s.isAuthenticated),
    isLoading,
    token,
  };
}
