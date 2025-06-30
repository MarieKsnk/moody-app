import { Recipe } from "@/types/RecipeData";

export interface IRecipeCardProps {
  recipe: Recipe;
  imageAlt?: string;
  className?: string;
}
