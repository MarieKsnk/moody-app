import { Recipe } from "@/types/RecipeData";

export interface IOwnRecipeCardProps {
  recipe: Recipe;
  imageAlt?: string;
  className?: string;
}
