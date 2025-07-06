import { Ingredient } from "@/types/RecipeFormData";

export async function fetchIngredients(): Promise<Ingredient[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/ingredients`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Erreur lors de la récupération des ingrédients");
  }

  const data = await res.json();

  return data.ingredients;
}
