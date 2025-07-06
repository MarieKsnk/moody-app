import { useQuery } from "@tanstack/react-query";
import { fetchUserRecipes } from "@/api/userRecipesAPI";
import { Recipe } from "@/types/RecipeData";
import { useAuthStore } from "@/stores/authStore";
import { useIsClient } from "@/hooks/useIsClient";

export const useUserRecipes = () => {
  const isClient = useIsClient();
  const token = useAuthStore((s) => s.token);
  const userId = useAuthStore((s) => s.user?.id);

  const enabled = isClient && !!token && !!userId;

  const {
    data: recipes,
    isLoading,
    error,
    refetch,
  } = useQuery<Recipe[]>({
    queryKey: ["user-recipes", userId, token],
    queryFn: () => fetchUserRecipes(userId!, token),
    enabled,
    staleTime: 5 * 60 * 1000,
  });

  return {
    recipes,
    isLoading,
    error,
    refetch,
  };
};
