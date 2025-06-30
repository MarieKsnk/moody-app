import { Recipe } from "@/types/RecipeData";

export interface ICategorieBlockProps {
  title: string;
  recipe: Recipe;
  className?: string;
  buttonVariant?: "light" | "dark";
  buttonHref: string;
}
