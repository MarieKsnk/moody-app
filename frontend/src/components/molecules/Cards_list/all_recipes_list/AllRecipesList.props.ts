import { Recipe } from "@/types/RecipeData";

export interface IAllRecipesListProps {
  recipes: Recipe[];
  limit?: number;
}
