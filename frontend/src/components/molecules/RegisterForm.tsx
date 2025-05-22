import { useForm } from "react-hook-form";
import axios from "axios";
import { RegisterFormData } from "@/types/atoms/RegisterFormData";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormData>()

  const onSubmit = async (data: RegisterFormData) => {

    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("LastName", data.lastName);
    formData.append("email", data.email);
    formData.append("password", data.password)
    if(data.profilePicture && data.profilePicture.length > 0) {
      formData.append("profilePicture", data.profilePicture[0])
    }

    try {
      const res = await axios.post("http://localhost:8000/api/auth/register", data)

      if (res.status === 201) {
        alert(`Bienvenue sur Moody, ${data.firstName} !`)
        reset()
      }
    } catch (error) {
      console.error("Erreur d'inscription:", error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstName">Prénom</label>
        <input
          id="firstName"
          type="text"
          aria-invalid={errors.firstName ? "true" : "false"}
          aria-describedby="firstName-error"
          {...register("firstName", { required: "Le prénom est requis", maxLength: { value: 20, message: "20 caractères maximum"} })}
        />
        {errors.firstName && <p id="firstName-error" role="alert">{errors.firstName.message}</p>}
      </div>

      <div>
        <label htmlFor="lastName">Nom</label>
        <input
          id="lastName"
          type="text"
          aria-invalid={errors.lastName ? "true" : "false"}
          aria-describedby="lastName-error"
          {...register("lastName", { required: "Le nom est requis", maxLength: { value: 30, message: "30 caractères maximum"} })}
        />
        {errors.lastName && <p id="lastName-error" role="alert">{errors.lastName.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby="email-error"
          {...register("email", {
            required: "L'email est requis",
            pattern: { value: /\S+@\S+\.\S+/, message: "L'email n'est pas valide" },
            maxLength: { value: 50, message: "50 caractères maximum"},
          })}
        />
        {errors.email && <p id="email-error" role="alert">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="profilePicture">Photo de profil</label>
        <input
          id="profilePicture"
          type="file"
          accept="image/*"
          aria-invalid={errors.profilePicture ? "true" : "false"}
          aria-describedby="profilePicture-error"
          {...register("profilePicture")}
        />
        {errors.profilePicture && <p id="profilePicture-error" role="alert">{errors.profilePicture.message}</p>}
      </div>

      <div>
        <label htmlFor="password">Mot de passe</label>
        <input
          id="password"
          type="password"
          aria-invalid={errors.password ? "true" : "false"}
          aria-describedby="password-error"
          {...register("password", {
            required: "Le mot de passe est requis",
            minLength: { value: 6, message: "Minimum 6 caractères" },
            maxLength: { value: 15, message: "Maximum 15 caractères" },
          })}
        />
        <p id="password-help">6 caractères minimum</p>
        {errors.password && <p id="password-error" role="alert">{errors.password.message}</p>}
      </div>

      <div>
        <label htmlFor="rgpdAccepted">
            <input
            id="rgpdAccepted"
            type="checkbox"
            aria-invalid={errors.rgpdAccepted ? "true" : "false"}
            aria-describedby="rgpd-error"
            {...register("rgpdAccepted", {
                required: "Vous devez accepter les conditions pour continuer"
            })}
            />
            J’accepte la politique de confidentialité et les conditions d’utilisation.
        </label>
        {errors.rgpdAccepted && <p id="rgpd-error" role="role">{errors.rgpdAccepted.message}</p>}
        </div>


      <button type="submit">Je crée mon compte sur Moody</button>
    </form>
  )
}