import { User } from "@/types/User";

export async function fetchMe(): Promise<User> {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  if (!token) {
    throw new Error("Aucun token trouvé");
  }

  const res = await fetch("http://localhost:8000/api/users/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.status === 401) {
    localStorage.removeItem("token");
    throw new Error("Unauthorized");
  }

  if (!res.ok) {
    throw new Error("Erreur serveur");
  }

  const { user } = await res.json();
  return user;
}
