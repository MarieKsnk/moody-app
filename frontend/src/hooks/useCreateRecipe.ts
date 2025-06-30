import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchCreateRecipe } from "@/api/createRecipeAPI";

export const useCreateRecipe = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => fetchCreateRecipe(formData),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-recipes"] });
      queryClient.invalidateQueries({ queryKey: ["recipes"] });
    },

    onError: (error: any) => {
      console.error("Erreur lors de la création :", error);
    },
  });
};
