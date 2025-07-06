import { Recipe } from "@/types/RecipeData";

export async function fetchAllRecipes(): Promise<Recipe[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/recipes`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Erreur lors de la récupération des recettes");
  }

  return res.json();
}
