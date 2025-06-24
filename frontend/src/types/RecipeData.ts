import { MoodData, TypeData, DietData, OriginData } from "./CategoriesData";
import { IngredientItem } from "./RecipeFormData";
import { User } from "./User";

export type CompleteIngredientItem = {
  id: string;
  recipeId: string;
  ingredientId: string;
  quantity: string;
  ingredient: {
    id: string;
    name: string;
  };
};

export type Recipe = {
  id: string;
  userId: string;
  user?: User;

  title: string;
  description?: string;
  instructions: string;
  recipePicture: string;
  recipeUrl?: string;

  prepTime: number;
  cookTime: number;
  serve: number;

  status: "pending" | "validated" | "rejected";
  createdAt: string;

  ingredients: CompleteIngredientItem[];

  moods: {
    mood: MoodData;
  }[];

  diets: {
    diet: DietData;
  }[];

  origins: {
    origin: OriginData;
  }[];

  types: {
    type: TypeData;
  }[];
};
