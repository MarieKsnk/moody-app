import { Recipe } from "@/types/RecipeData";

export interface IOwnRecipeCardProps {
  recipe: Recipe;
  imageClassName?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
}
