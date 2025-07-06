import { User } from "@/types/User";

export async function fetchAdminAllUsers(
  token: string | null
): Promise<User[]> {
  if (!token) throw new Error("Token manquant");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/admin/users`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Erreur lors de la récupération des utilisateurs");
  }

  return res.json();
}

export async function fetchUserById(
  id: string,
  token: string | null
): Promise<User> {
  if (!id) throw new Error("ID utilisateur manquant");
  if (!token) throw new Error("Token manquant");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/admin/users/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Erreur lors de la récupération de l'utilisateur");
  }

  return res.json();
}

export async function fetchDeleteUser(id: string, token: string | null) {
  if (!id) throw new Error("ID utilisateur manquant");
  if (!token) throw new Error("Token manquant");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/admin/users/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Erreur lors de la suppression");
  }

  return res.json();
}
