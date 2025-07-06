import { useQuery } from "@tanstack/react-query";
import {
  fetchUsersCount,
  fetchRecipesCount,
  fetchPendingRecipesCount,
} from "@/api/statsNumbersAPI";
import { useAuthStore } from "@/stores/authStore";
import { useIsClient } from "@/hooks/useIsClient";

export const useStatsNumber = () => {
  const isClient = useIsClient();
  const token = useAuthStore((s) => s.token);

  const enabled = isClient && !!token;

  const {
    data: usersCount,
    isLoading: usersLoading,
    error: usersError,
  } = useQuery({
    queryKey: ["usersCount", token],
    queryFn: () => fetchUsersCount(token),
    enabled,
    refetchInterval: 5000,
  });

  const {
    data: recipesCount,
    isLoading: recipesLoading,
    error: recipesError,
  } = useQuery({
    queryKey: ["recipesCount", token],
    queryFn: () => fetchRecipesCount(token),
    enabled,
    refetchInterval: 5000,
  });

  const {
    data: pendingCount,
    isLoading: pendingLoading,
    error: pendingError,
  } = useQuery({
    queryKey: ["pendingRecipesCount", token],
    queryFn: () => fetchPendingRecipesCount(token),
    enabled,
    refetchInterval: 5000,
  });

  return {
    usersCount,
    usersLoading,
    usersError,
    recipesCount,
    recipesLoading,
    recipesError,
    pendingCount,
    pendingLoading,
    pendingError,
  };
};
