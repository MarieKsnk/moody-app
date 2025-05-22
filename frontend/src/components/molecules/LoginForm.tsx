import { useForm } from "react-hook-form";
import axios from "axios";
import { LoginFormData } from "@/types/atoms/LoginFormData";
import { useRouter } from "next/router";

export default function LoginForm() {

    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>()

    const onSubmit = async (data: LoginFormData) => {
        try {
            const res = await axios.post("http://Localhost:8000/api/auth/login", data)

            if (res.status === 201 && res.data.token) {
                localStorage.setItem("token", res.data.token)
                alert(`Ravie de te revoir, ${data.firstName} !`)
                router.push("/")
            }
        } catch (error) {
                console.log("Erreur de connexion:", error)
                alert("Erreur de connexion, veuillez vérifier vos identifiants.")
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="email">Email</label>
                <input
                id="email" 
                type="email"
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby="email-error"
                {...register("email", {
                    required: "L'email est requis",
                    pattern: { value: /\S+@S+\.\S+/, message: "L'email n'est pas valide" },
                })}
                />
                {errors.email && <p id="email-error" role="alert">{errors.email.message}</p>}
            </div>

            <div>
                <label htmlFor="password">Mot de passe</label>
                <input
                id="password" 
                type="password"
                aria-invalid={errors.password ? "true" : "false"}
                aria-describedby="password-error"
                {...register("password", {
                    required: "Le mot de pass est requis"})}
                />
                {errors.password && <p id="password-error" role="alert">{errors.password.message}</p>}
            </div>

            <div>
                <button type="submit">Je me connecte</button>
            </div>

            <div>
                <p>Pas encore de compte ?</p>
                <p>Rejoindre Moody</p>
            </div>


        </form>
    )
}