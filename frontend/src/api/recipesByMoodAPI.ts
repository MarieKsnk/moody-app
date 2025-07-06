import { Recipe } from "@/types/RecipeData";

export async function fetchRecipesByMood(moodId: string): Promise<Recipe[]> {
  const res = await fetch(
    `http://localhost:8000/api/recipes/by-mood/${moodId}`
  );

  if (!res.ok) {
    throw new Error("Erreur lors de la récupération des recettes");
  }

  const data = await res.json();
  return data.recipes;
}
