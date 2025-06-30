export async function fetchDeleteRecipe(id: string) {
  const token = localStorage.getItem("token");

  if (!token) throw new Error("Token manquant");

  const res = await fetch(`http://localhost:8000/api/recipes/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Erreur lors de la suppression");
  }

  return res.json();
}
