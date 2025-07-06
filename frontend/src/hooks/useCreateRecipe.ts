import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchCreateRecipe } from "@/api/createRecipeAPI";
import { useAuthStore } from "@/stores/authStore";

export function useCreateRecipe() {
  const queryClient = useQueryClient();
  const token = useAuthStore((s) => s.token);

  return useMutation({
    mutationFn: (formData: FormData) => fetchCreateRecipe(formData, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-recipes"] });
      queryClient.invalidateQueries({ queryKey: ["recipes"] });
    },
    onError: (error: any) => {
      console.error("Erreur lors de la création :", error);
    },
  });
}
