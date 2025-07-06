import { useQuery } from "@tanstack/react-query";
import { fetchRecipeId } from "@/api/RecipeIdAPI";
import { Recipe } from "@/types/RecipeData";

export function useRecipeById(id: string, token: string | null) {
  return useQuery<Recipe>({
    queryKey: ["recipe", id],
    queryFn: () => fetchRecipeId(id, token),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
}
