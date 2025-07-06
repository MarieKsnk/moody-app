import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchAdminPendingRecipes,
  acceptAdminRecipe,
  rejectAdminRecipe,
  fetchAdminAllAcceptedRecipes,
} from "@/api/adminRecipesAPI";
import { useAuthStore } from "@/stores/authStore";

export function useAdminPendingRecipes() {
  const queryClient = useQueryClient();
  const token = useAuthStore((s) => s.token);

  const {
    data: recipes,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["admin-pending-recipes"],
    queryFn: () => fetchAdminPendingRecipes(token),
    enabled: !!token,
    staleTime: 5 * 60 * 1000,
  });

  const accept = useMutation({
    mutationFn: (id: string) => acceptAdminRecipe(id, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-pending-recipes"] });
    },
    onError: (error: any) => {
      console.error("Erreur lors de l'acceptation :", error);
    },
  });

  const reject = useMutation({
    mutationFn: (id: string) => rejectAdminRecipe(id, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-pending-recipes"] });
    },
    onError: (error: any) => {
      console.error("Erreur lors du refus :", error);
    },
  });

  return {
    recipes,
    isLoading,
    error,
    refetch,
    accept,
    reject,
  };
}

export function useAdminAllAcceptedRecipes() {
  const token = useAuthStore((s) => s.token);

  return useQuery({
    queryKey: ["admin-all-accepted-recipes"],
    queryFn: () => fetchAdminAllAcceptedRecipes(token),
    enabled: !!token,
    staleTime: 5 * 60 * 1000,
  });
}
