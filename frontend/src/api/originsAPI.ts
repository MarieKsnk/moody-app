import { OriginData } from "@/types/CategoriesData";

export async function fetchOrigins(): Promise<OriginData[]> {
  const res = await fetch("http://localhost:8000/api/categories/origins", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Erreur lors de la récupération des origines");
  }

  const data = await res.json();

  return data.origins;
}
