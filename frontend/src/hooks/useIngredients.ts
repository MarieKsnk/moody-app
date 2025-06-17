import { useQuery } from "@tanstack/react-query";
import { fetchIngredients } from "@/api/ingredientsAPI";

export function useIngredients() {
  return useQuery({
    queryKey: ["ingredients"],
    queryFn: fetchIngredients,
  });
}
