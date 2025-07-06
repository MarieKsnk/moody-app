import { Recipe } from "@/types/RecipeData";

export interface ICategorieBlockProps {
  title: string;
  recipes: Recipe[];
  className?: string;
  buttonVariant?: "light" | "dark";
  buttonHref: string;
}
