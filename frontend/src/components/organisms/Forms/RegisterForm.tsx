import { useForm } from "react-hook-form";
import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { RegisterFormData } from "@/types/forms/Register";
import { Input } from "../../atoms/Forms/input";
import { Label } from "@/components/atoms/Forms/label";
import { Checkbox } from "../../atoms/Forms/checkbox";
import { SubmitButton } from "@/components/atoms/Buttons/submit_button";
import { AuthModal } from "@/components/molecules/Modals/auth_modal";

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
  const [showModal, setShowModal] = useState(false);

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
        setShowModal(true);
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
    <section className="form">
      <div className="form__container">
        <h1>Je m'inscris sur Moody</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="auth-form__form">
          <div className="auth-form__group">
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
          </div>

          <div className="auth-form__group">
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
          </div>

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
                maxLength: { value: 50, message: "50 caractères maximum" },
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
                minLength: { value: 6, message: "Minimum 6 caractères" },
                maxLength: { value: 15, message: "Maximum 15 caractères" },
              })}
              error={errors.password}
            />
          </div>

          <div className="auth-form__group">
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
          </div>

          {previewUrl && (
            <div>
              <Image
                src={previewUrl}
                alt="Aperçu de la photo de profil"
                width={200}
                height={200}
                style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </div>
          )}

          <Checkbox
            id="rgpdAccepted"
            label="J’accepte les Conditions Générales d'Utilisation et reconnais avoir été informé que mes données personnelles seront utilisées tel que détaillé dans la Politique de protection des données personnelles"
            register={register("rgpdAccepted", {
              required: "Vous devez accepter les conditions pour continuer",
            })}
            error={errors.rgpdAccepted}
          />

          <SubmitButton label="Je cree mon compte sur Moody" type="submit" />
        </form>
      </div>

      {showModal && (
        <AuthModal
          title="Bienvenue sur Moody !"
          message="Ton compte a bien été créé."
          primaryLabel="Je me connecte"
          primaryHref="/login"
          secondaryLabel="Accueil"
          secondaryHref="/"
        />
      )}
    </section>
  );
}
