import { MoodData } from "@/types/CategoriesData";

export async function fetchMoods(): Promise<MoodData[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/categories/moods`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Erreur lors de la récupération des moods");
  }

  const data = await res.json();

  return data.moods;
}
