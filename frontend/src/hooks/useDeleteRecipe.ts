import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchDeleteRecipe } from "@/api/deleteRecipeAPI";
import { useAuthStore } from "@/stores/authStore";

export function useDeleteRecipe(recipeId: string) {
  const queryClient = useQueryClient();
  const token = useAuthStore((s) => s.token);

  return useMutation({
    mutationFn: () => fetchDeleteRecipe(recipeId, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-recipes", token] });
    },
    onError: (error: any) => {
      console.error("Erreur lors de la suppression :", error);
    },
  });
}
