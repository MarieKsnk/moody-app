import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { fetchMe } from "@/api/auth";
import { useAuthStore } from "@/stores/authStore";
import { useIsClient } from "@/hooks/useIsClient";

export function useAuth() {
  const isClient = useIsClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["me"],
    queryFn: fetchMe,
    retry: false,
    enabled: isClient && !!localStorage.getItem("token"),
    staleTime: 5 * 60 * 1000,
  });

  const setUser = useAuthStore((s) => s.setUser);
  const toggleAuth = useAuthStore((s) => s.toggleAuth);

  useEffect(() => {
    if (data) {
      setUser(data);
      toggleAuth(true);
    } else if (error) {
      setUser(null);
      toggleAuth(false);
    }
  }, [data, error, setUser, toggleAuth]);

  const user = useAuthStore((s) => s.user);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  return { user, isAuthenticated, isLoading };
}
