import { useQuery } from "@tanstack/react-query";
import { fetchDiets } from "@/api/dietsAPI";
import { DietData } from "@/types/CategoriesData";

export function useDiets() {
  return useQuery<DietData[]>({
    queryKey: ["diets"],
    queryFn: fetchDiets,
  });
}
