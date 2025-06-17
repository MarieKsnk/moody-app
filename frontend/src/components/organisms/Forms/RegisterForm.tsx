import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
import { RegisterFormData } from "@/types/forms/Register";
import { Input } from "../../atoms/Input";
import { Label } from "@/components/atoms/Label";
import { Checkbox } from "../../atoms/Checkbox";
import { SubmitButton } from "@/components/atoms/Buttons/SubmitButton";
import { useRouter } from "next/router";

export default function RegisterForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm<RegisterFormData>();

  const profilePictureFile = watch("profilePicture")?.[0];
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (profilePictureFile) {
      const url = URL.createObjectURL(profilePictureFile);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }
    setPreviewUrl(null);
  }, [profilePictureFile]);

  const onSubmit = async (data: RegisterFormData) => {
    const formData = new FormData();

    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("password", data.password);

    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

    if (data.profilePicture && data.profilePicture.length > 0) {
      const file = data.profilePicture[0];
      if (!allowedTypes.includes(file.type)) {
        setError("profilePicture", {
          message: "Seuls les fichiers JPEG, PNG et WebP sont autorisés !",
        });
        return;
      }
      formData.append("profilePicture", file);
    }

    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.status === 201) {
        alert(`Bienvenue sur Moody, ${data.firstName} !`);
        router.push("/login");
      }
    } catch (error: any) {
      const errorFile = error?.response?.data;

      if (errorFile?.field && errorFile?.message) {
        setError(errorFile.field, { message: errorFile.message });
        return;
      }

      if (error.response?.status === 409 && errorFile?.error) {
        setError("email", { message: errorFile.error });
        return;
      }

      alert("Erreur lors de l'inscription.");
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="firstName" required={true}>
        Nom
      </Label>
      <Input
        id="firstName"
        type="text"
        register={register("firstName", {
          required: "Le prénom est requis",
          maxLength: { value: 20, message: "20 caractères maximum" },
        })}
        error={errors.firstName}
      />

      <Label htmlFor="lastName" required={true}>
        Prenom
      </Label>
      <Input
        id="lastName"
        type="text"
        register={register("lastName", {
          required: "Le nom est requis",
          maxLength: { value: 30, message: "30 caractères maximum" },
        })}
        error={errors.lastName}
      />

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
          maxLength: { value: 50, message: "50 caractères maximum" },
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
          minLength: { value: 6, message: "Minimum 6 caractères" },
          maxLength: { value: 15, message: "Maximum 15 caractères" },
        })}
        error={errors.password}
      />

      <Label htmlFor="profilePicture" required={false}>
        Photo de profil
      </Label>
      <Input
        id="profilePicture"
        type="file"
        accept="image/png,image/jpeg,image/webp"
        register={register("profilePicture")}
        error={errors.profilePicture}
      />

      {previewUrl && (
        <img
          src={previewUrl}
          alt="Aperçu de la photo de profil"
          style={{
            width: 120,
            height: 120,
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      )}

      <Checkbox
        id="rgpdAccepted"
        label="J’accepte les Conditions Générales d'Utilisation et reconnais avoir été informé que mes données personnelles seront utilisées tel que détaillé dans la Politique de protection des données personnelles *"
        register={register("rgpdAccepted", {
          required: "Vous devez accepter les conditions pour continuer",
        })}
        error={errors.rgpdAccepted}
      />

      <SubmitButton label="Je crée mon compte sur Moody" type="submit" />
    </form>
  );
}
