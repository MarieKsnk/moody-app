import { Recipe } from "@/types/RecipeData";

export async function fetchUserRecipes(
  userId: string,
  token: string | null
): Promise<Recipe[]> {
  if (!userId) {
    throw new Error("Utilisateur non connecté");
  }

  if (!token) {
    throw new Error("Token manquant");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/users/${userId}/recipes`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  if (!res.ok) {
    throw new Error("Erreur lors de la récupération des recettes");
  }

  return res.json();
}
