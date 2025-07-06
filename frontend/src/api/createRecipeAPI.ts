import { Recipe } from "@/types/RecipeData";

export async function fetchCreateRecipe(
  formData: FormData,
  token: string | null
): Promise<Recipe> {
  if (!token) throw new Error("Token manquant");

  const res = await fetch("http://localhost:8000/api/recipes/add-recipe", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!res.ok) throw new Error("Erreur serveur");
  return res.json();
}
