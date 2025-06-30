import { Recipe } from "@/types/RecipeData";

export interface IOwnRecipeListProps {
  title: string;
  recipes: Recipe[];
  showButtons?: boolean;
  limit?: number;
  id?: string;
  className?: string;
}
