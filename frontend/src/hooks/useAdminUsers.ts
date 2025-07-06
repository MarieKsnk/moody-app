import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchAdminAllUsers,
  fetchUserById,
  fetchDeleteUser,
} from "@/api/adminUsersAPI";
import { useAuthStore } from "@/stores/authStore";

export function useAllUsers() {
  const token = useAuthStore((s) => s.token);

  return useQuery({
    queryKey: ["all-users"],
    queryFn: () => fetchAdminAllUsers(token),
    enabled: !!token,
    staleTime: 5 * 60 * 1000,
  });
}

export function useUserById(id: string | undefined) {
  const token = useAuthStore((s) => s.token);

  return useQuery({
    queryKey: ["admin-user", id, token],
    queryFn: () => fetchUserById(id as string, token),
    enabled: !!id && !!token,
    staleTime: 5 * 60 * 1000,
  });
}

export function useDeleteUser(userId: string) {
  const queryClient = useQueryClient();
  const token = useAuthStore((s) => s.token);

  return useMutation({
    mutationFn: () => fetchDeleteUser(userId, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-users"] });
    },
    onError: (error: any) => {
      console.error("Erreur lors de la suppression :", error);
    },
  });
}
