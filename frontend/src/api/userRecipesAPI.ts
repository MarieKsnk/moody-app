import { Recipe } from "@/types/RecipeData";
import { useAuthStore } from "@/stores/authStore";

export async function fetchUserRecipes(): Promise<Recipe[]> {
  const user = useAuthStore.getState().user;

  if (!user) {
    throw new Error("Utilisateur non connecté");
  }

  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Token manquant");
  }



  const res = await fetch(`http://localhost:8000/api/users/${user.id}/recipes`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Erreur lors de la récupération des recettes de ${user.firstName}`);
  }

  return res.json();
}
