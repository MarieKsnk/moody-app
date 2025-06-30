import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchUpdateRecipe } from "@/api/updateRecipeAPI";

export function useUpdateRecipe(recipeId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => fetchUpdateRecipe(recipeId, formData),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-recipes"] });
      queryClient.invalidateQueries({ queryKey: ["recipe", recipeId] });
    },

    onError: (error: any) => {
      console.error("Erreur lors de la mise à jour :", error);
    },
  });
}
