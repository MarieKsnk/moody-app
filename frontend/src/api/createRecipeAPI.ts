export async function fetchCreateRecipe(formData: FormData): Promise<any> {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Token manquant");
  }

  const response = await fetch("http://localhost:8000/api/recipes/add-recipe", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Erreur lors de la création de la recette");
  }

  return response.json();
}
