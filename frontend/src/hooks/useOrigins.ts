import { useQuery } from "@tanstack/react-query";
import { fetchOrigins } from "@/api/originsAPI";
import { OriginData } from "@/types/CategoriesData";

export function useOrigins() {
  return useQuery<OriginData[]>({
    queryKey: ["origins"],
    queryFn: fetchOrigins,
  });
}
