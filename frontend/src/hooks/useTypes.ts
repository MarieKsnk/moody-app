import { useQuery } from "@tanstack/react-query";
import { fetchTypes } from "@/api/typesAPI";
import { TypeData } from "@/types/CategoriesData";

export function useTypes() {
  return useQuery<TypeData[]>({
    queryKey: ["types"],
    queryFn: fetchTypes,
  });
}
