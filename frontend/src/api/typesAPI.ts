import { TypeData } from "@/types/CategoriesData";

export async function fetchTypes(): Promise<TypeData[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/categories/types`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Erreur lors de la récupération des types");
  }

  const data = await res.json();

  return data.types;
}
