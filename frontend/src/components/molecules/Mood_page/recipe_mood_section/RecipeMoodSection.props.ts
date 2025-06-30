import { Recipe } from "@/types/RecipeData";

export interface IRecipeMoodSectionProps {
  title: string;
  recipes: Recipe[];
  borderColor?: "dark" | "pink";
}
