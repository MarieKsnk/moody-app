export async function fetchUsersCount(token: string | null): Promise<number> {
  if (!token) throw new Error("Token manquant");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/admin/stats/users`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Erreur lors de la récupération du nombre d'utilisateurs");
  }
  const data = await res.json();
  return data.count;
}

export async function fetchRecipesCount(token: string | null): Promise<number> {
  if (!token) throw new Error("Token manquant");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/admin/stats/recipes`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Erreur lors de la récupération du nombre de recettes");
  }
  const data = await res.json();
  return data.count;
}

export async function fetchPendingRecipesCount(
  token: string | null
): Promise<number> {
  if (!token) throw new Error("Token manquant");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/admin/stats/pending-recipes`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Erreur lors de la récupération des recettes en attente");
  }
  const data = await res.json();
  return data.count;
}
