import { useQuery } from "@tanstack/react-query";
import { fetchAllRecipes } from "@/api/allRecipeAPI";

export const useAllRecipes = () => {
  return useQuery({
    queryKey: ["all-recipes"],
    queryFn: fetchAllRecipes,
  });
};
