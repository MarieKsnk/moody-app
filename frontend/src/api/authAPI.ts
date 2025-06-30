import { User } from "@/types/User";

export async function fetchMe(): Promise<User> {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Token manquant");
  }

  const res = await fetch("http://localhost:8000/api/users/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.status === 401) {
    localStorage.removeItem("token");
    throw new Error("Utilisateur non autorisé");
  }

  if (!res.ok) {
    throw new Error("Erreur serveur");
  }

  const { user } = await res.json();
  return user;
}
