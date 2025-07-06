import { useQuery } from "@tanstack/react-query";
import { fetchMoods } from "@/api/moodsAPI";
import { MoodData } from "@/types/CategoriesData";

export function useMoods() {
  return useQuery<MoodData[]>({
    queryKey: ["moods"],
    queryFn: fetchMoods,
  });
}
