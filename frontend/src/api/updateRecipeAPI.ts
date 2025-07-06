export async function fetchUpdateRecipe(
  id: string,
  formData: FormData,
  token: string | null
) {
  if (!token) throw new Error("Token manquant");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/recipes/${id}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    }
  );

  if (!res.ok) {
    console.error("Réponse échouée :", res.status, await res.text());
    throw new Error("Erreur lors de la mise à jour");
  }

  return res.json();
}
