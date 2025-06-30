import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchDeleteRecipe } from "@/api/deleteRecipeAPI";

export function useDeleteRecipe(recipeId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => fetchDeleteRecipe(recipeId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-recipes"] });
    },
    onError: (error) => {
      console.error("Erreur lors de la suppression :", error);
    },
  });
}
