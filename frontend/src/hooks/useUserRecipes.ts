import { useQuery } from "@tanstack/react-query";
import { fetchUserRecipes } from "@/api/userRecipesAPI";
import { Recipe } from "@/types/RecipeData";
import { useAuthStore } from "@/stores/authStore";

export function useUserRecipes() {

    const user = useAuthStore((s) => s.user);
    
  return useQuery<Recipe[]>({
    queryKey: ["user-recipes"],
    queryFn: fetchUserRecipes,
    enabled: !!user,
    staleTime: 5 * 60 * 1000, 
  });
}
