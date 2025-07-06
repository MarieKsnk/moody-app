import { Recipe } from "@/types/RecipeData";

export async function fetchRecipeId(id: string): Promise<Recipe> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/recipes/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Erreur lors de la récupération de la recette");
  }

  return res.json();
}
