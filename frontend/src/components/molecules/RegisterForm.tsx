import { useForm } from "react-hook-form";
import axios from "axios";
import { RegisterFormData } from "@/types/forms/Register";
import { Input } from "../atoms/Input";
import { Checkbox } from "../atoms/Checkbox";
import { Submit } from "../atoms/Submit/Submit";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<RegisterFormData>()

  const onSubmit = async (data: RegisterFormData) => {

    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("password", data.password)
    if(data.profilePicture && data.profilePicture.length > 0) {
      formData.append("profilePicture", data.profilePicture[0])
    }

    try {
      const res = await axios.post("http://localhost:8000/api/auth/register", formData, {
        headers: {
        "Content-Type": "multipart/form-data",
      },})

      if (res.status === 201) {
        alert(`Bienvenue sur Moody, ${data.firstName} !`)
        reset()
      }
    } catch (error: any) {

  console.error("Erreur axios :", error);

  const errorFile = error?.response?.data;

  if (errorFile.field && errorFile.message) {
    setError(errorFile.field, {
      message: errorFile.message,
    });
  } else {
    alert("Erreur lors de l'inscription.");
  }
}
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <Input
        id="firstName"
        type="text"
        label="Mon prénom :"
        register={register("firstName", {
          required: "Le prénom est requis",
          maxLength: { value: 20, message: "20 caractères maximum" },
        })}
        error={errors.firstName}
      />

      <Input
        id="lastName"
        type="text"
        label="Mon nom :"
        register={register("lastName", {
          required: "Le nom est requis",
          maxLength: { value: 30, message: "30 caractères maximum" },
        })}
        error={errors.lastName}
      />

      <Input
        id="email"
        type="email"
        label="Mon adresse email :"
        register={register("email", {
          required: "L'email est requis",
          pattern: { value: /\S+@\S+\.\S+/, message: "L'email n'est pas valide" },
          maxLength: { value: 50, message: "50 caractères maximum" },
        })}
        error={errors.email}
      />

      <Input
        id="profilePicture"
        type="file"
        label="Ma photo de profil (non obligatoire) :"
        register={register("profilePicture")}
        error={errors.profilePicture}
      />

      <Input
        id="password"
        type="password"
        label="Mon mot de passe :"
        register={register("password", {
          required: "Le mot de passe est requis",
          minLength: { value: 6, message: "Minimum 6 caractères" },
          maxLength: { value: 15, message: "Maximum 15 caractères" },
        })}
        error={errors.password}
      />

      <Checkbox
        id="rgpdAccepted"
        label="J’accepte la politique de confidentialité et les conditions d’utilisation."
        register={register("rgpdAccepted", {
          required: "Vous devez accepter les conditions pour continuer"
        })}
        error={errors.rgpdAccepted}
      />

      <Submit
      type="submit"
      label="Je crée mon compte sur Moody"/>

    </form>
  )
}