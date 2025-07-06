export async function fetchDeleteMe(token: string | null) {
  if (!token) throw new Error("Token manquant");

  const res = await fetch("http://localhost:8000/api/users/me", {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Erreur lors de la suppression du compte");
  }

  return res.json();
}
