import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchUpdateRecipe } from "@/api/updateRecipeAPI";
import { useAuthStore } from "@/stores/authStore";

export function useUpdateRecipe(recipeId: string) {
  const queryClient = useQueryClient();
  const token = useAuthStore((s) => s.token);

  return useMutation({
    mutationFn: (formData: FormData) =>
      fetchUpdateRecipe(recipeId, formData, token),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-recipes", token] });
      queryClient.invalidateQueries({ queryKey: ["recipe", recipeId] });
    },

    onError: (error: any) => {
      console.error("Erreur lors de la mise à jour :", error);
    },
  });
}
