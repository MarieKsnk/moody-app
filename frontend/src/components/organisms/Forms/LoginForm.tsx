import { useForm } from "react-hook-form";
import axios from "axios";
import { LoginFormData } from "@/types/forms/Login";
import { Input } from "@/components/atoms/Input";
import { Label } from "@/components/atoms/Label";
import { SubmitButton } from "@/components/atoms/Buttons/SubmitButton";
import { useRouter } from "next/router";
import { useAuthStore } from "@/stores/authStore";

export default function LoginForm() {
  const router = useRouter();
  const setUser = useAuthStore((s) => s.setUser);
  const toggleAuth = useAuthStore((s) => s.toggleAuth);

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
        const firstName = res.data.user.firstName;
        alert(`Ravie de te revoir, ${firstName} !`);
        router.replace("/");
      }
    } catch (error) {
      console.log("Erreur de connexion:", error);
      alert("Erreur de connexion, veuillez vérifier vos identifiants.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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

      <SubmitButton label="Je me connecte" />

      <div>
        <p>Pas encore de compte ?</p>
        <p>Rejoindre Moody</p>
      </div>
    </form>
  );
}
