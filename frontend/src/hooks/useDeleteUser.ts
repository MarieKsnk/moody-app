import { useMutation } from "@tanstack/react-query";
import { fetchDeleteMe } from "@/api/deleteUserAPI";
import { useAuthStore } from "@/stores/authStore";

export function useDeleteMe() {
  const logout = useAuthStore((s) => s.logout);

  const token = useAuthStore((s) => s.token);

  return useMutation({
    mutationFn: () => fetchDeleteMe(token),
    onSuccess: () => {
      logout();
    },
    onError: (error: any) => {
      console.error("Erreur lors de la suppression du compte :", error);
    },
  });
}
