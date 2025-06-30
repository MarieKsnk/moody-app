export async function fetchUpdateRecipe(id: string, formData: FormData) {
  const token = localStorage.getItem("token");

  if (!token) throw new Error("Token manquant");

  const res = await fetch(`http://localhost:8000/api/recipes/${id}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Erreur lors de la mise à jour");
  }

  return res.json();
}
