export async function fetchDeleteRecipe(id: string, token: string | null) {
  if (!token) throw new Error("Token manquant");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/recipes/${id}`,
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
