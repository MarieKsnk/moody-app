import { OriginData } from "@/types/CategoriesData";

export async function fetchOrigins(): Promise<OriginData[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/categories/origins`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Erreur lors de la récupération des origines");
  }

  const data = await res.json();

  return data.origins;
}
