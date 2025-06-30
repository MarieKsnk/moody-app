import { useQuery } from "@tanstack/react-query";
import { fetchRecipesByMood } from "@/api/recipesByMoodAPI";
import { Recipe } from "@/types/RecipeData";

export function useRecipesByMood(moodId: string) {
  return useQuery<Recipe[]>({
    queryKey: ["recipesByMood", moodId],
    queryFn: () => fetchRecipesByMood(moodId),
    enabled: !!moodId, // ✅ important pour éviter les appels avec undefined
  });
}
