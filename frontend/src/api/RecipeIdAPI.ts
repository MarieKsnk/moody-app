import { Recipe } from "@/types/RecipeData";

export async function fetchRecipeId(
  id: string,
  token: string | null
): Promise<Recipe> {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/recipes/${id}`,
    {
      method: "GET",
      headers,
    }
  );

  if (!res.ok) {
    console.error("Erreur API (fetchRecipeId)", res.status);
    throw new Error("Erreur lors de la récupération de la recette");
  }

  return res.json();
}
