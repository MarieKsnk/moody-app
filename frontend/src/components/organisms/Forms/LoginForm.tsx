import { useForm } from "react-hook-form";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import { LoginFormData } from "@/types/forms/Login";
import { Input } from "@/components/atoms/Forms/input";
import { Label } from "@/components/atoms/Forms/label";
import { SubmitButton } from "@/components/atoms/Buttons/submit_button";
import { useAuthStore } from "@/stores/authStore";
import { AuthModal } from "@/components/molecules/Modals/auth_modal";

export default function LoginForm() {
  const router = useRouter();
  const setUser = useAuthStore((s) => s.setUser);
  const toggleAuth = useAuthStore((s) => s.toggleAuth);

  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/login",
        data
      );

      if (res.status === 201 && res.data.token) {
        localStorage.setItem("token", res.data.token);
        setUser(res.data.user);
        toggleAuth(true);
        setFirstName(res.data.user.firstName);
        setShowModal(true);
      }
    } catch (error) {
      console.log("Erreur de connexion:", error);
      alert("Erreur de connexion, veuillez vérifier vos identifiants.");
    }
  };

  return (
    <section className="form">
      <div className="form__container">
        <h1>Je me connecte</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="auth-form__form">
          <div className="auth-form__group">
            <Label htmlFor="email" required={true}>
              Adresse email
            </Label>
            <Input
              id="email"
              type="email"
              register={register("email", {
                required: "L'email est requis",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "L'email n'est pas valide",
                },
              })}
              error={errors.email}
            />
          </div>

          <div className="auth-form__group">
            <Label htmlFor="password" required={true}>
              Mot de passe
            </Label>
            <Input
              id="password"
              type="password"
              register={register("password", {
                required: "Le mot de passe est requis",
              })}
              error={errors.password}
            />
          </div>

          <SubmitButton label="Je me connecte" />

          <div className="auth-form__account">
            <p>Pas encore de compte ?</p>
            <Link href="/register" className="link">
              Rejoindre Moody
            </Link>
          </div>
        </form>
      </div>

      {showModal && (
        <AuthModal
          title={`Ravi·e de te revoir, ${firstName} !`}
          primaryLabel="Mon profil"
          primaryHref="/profile"
          secondaryLabel="Accueil"
          secondaryHref="/"
        />
      )}
    </section>
  );
}
