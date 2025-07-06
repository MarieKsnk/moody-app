import { Recipe } from "@/types/RecipeData";

export async function fetchAdminPendingRecipes(
  token: string | null
): Promise<Recipe[]> {
  if (!token) throw new Error("Token manquant");

  const res = await fetch("http://localhost:8000/api/admin/recipes/pending", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) throw new Error("Erreur de récupération des recettes à valider");
  return res.json();
}

export async function acceptAdminRecipe(
  id: string,
  token: string | null
): Promise<Recipe> {
  if (!token) throw new Error("Token manquant");

  const res = await fetch(
    `http://localhost:8000/api/admin/recipes/${id}/accept`,
    {
      method: "PATCH",
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  if (!res.ok) throw new Error("Erreur lors de l’acceptation de la recette");
  const data = await res.json();
  return data.recipe;
}

export async function rejectAdminRecipe(
  id: string,
  token: string | null
): Promise<Recipe> {
  if (!token) throw new Error("Token manquant");

  const res = await fetch(
    `http://localhost:8000/api/admin/recipes/${id}/reject`,
    {
      method: "PATCH",
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  if (!res.ok) throw new Error("Erreur lors du refus de la recette");
  const data = await res.json();
  return data.recipe;
}

export async function fetchAdminAllAcceptedRecipes(
  token: string | null
): Promise<Recipe[]> {
  if (!token) throw new Error("Token manquant");

  const res = await fetch("http://localhost:8000/api/admin/recipes", {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) throw new Error("Erreur lors de la récupération des recettes");
  const data = await res.json();
  return data.recipes;
}
