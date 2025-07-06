import { User } from "@/types/User";
import { LoginFormData } from "@/types/forms/Login";
import { RegisterFormData } from "@/types/forms/Register";

export async function fetchMe(token: string | null): Promise<User> {
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

export async function fetchLogin(data: LoginFormData) {
  const res = await fetch("http://localhost:8000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Erreur de connexion");
  return res.json();
}

export async function fetchRegister(data: RegisterFormData) {
  const formData = new FormData();
  formData.append("firstName", data.firstName);
  formData.append("lastName", data.lastName);
  formData.append("email", data.email);
  formData.append("password", data.password);

  if (data.profilePicture && data.profilePicture.length > 0) {
    formData.append("profilePicture", data.profilePicture[0]);
  }
  if ("rgpdAccepted" in data) {
    formData.append("rgpdAccepted", String(data.rgpdAccepted));
  }

  const res = await fetch("http://localhost:8000/api/auth/register", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("Erreur serveur");
  return res.json();
}
