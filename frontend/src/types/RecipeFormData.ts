export type IngredientItem = {
  ingredientId: string;
  quantity: string;
};

export type Ingredient = {
  id: string;
  name: string;
};

export type RecipeFormData = {
  title: string;
  description?: string;
  recipePicture?: FileList | undefined;
  recipeUrl?: string;
  ingredientList: IngredientItem[];
  instructions: string;
  prepTime: number;
  cookTime: number;
  serve: number;
  moodIds: string[];
  typeIds: string[];
  dietIds: string[];
  originIds: string[];
};
