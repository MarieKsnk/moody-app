import { DietData } from "@/types/CategoriesData";

export async function fetchDiets(): Promise<DietData[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/categories/diets`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Erreur lors de la récupération des régimes alimentaires");
  }

  const data = await res.json();

  return data.diets;
}
