import { useForm } from "react-hook-form";
import axios from "axios";
import { LoginFormData } from "@/types/forms/Login";
import { useRouter } from "next/router";
import { Input } from "../atoms/Input";
import { Submit } from "../atoms/Submit/Submit";

export default function LoginForm() {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>();

    const onSubmit = async (data: LoginFormData) => {
        try {
            const res = await axios.post("http://Localhost:8000/api/auth/login", data);

            if (res.status === 201 && res.data.token) {
                localStorage.setItem("token", res.data.token);
                const firstName = res.data.user.firstName;
                alert(`Ravie de te revoir, ${firstName} !`);
                router.push("/profile");
            }
        } catch (error) {
            console.log("Erreur de connexion:", error);
            alert("Erreur de connexion, veuillez vérifier vos identifiants.");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                id="email"
                type="email"
                label="Mon adresse email :"
                register={register("email", {
                    required: "L'email est requis",
                    pattern: { value: /\S+@\S+\.\S+/, message: "L'email n'est pas valide" },
                })}
                error={errors.email}
            />

            <Input
                id="password"
                type="password"
                label="Mon mot de passe :"
                register={register("password", {
                    required: "Le mot de passe est requis",
                })}
                error={errors.password}
            />

            <Submit 
                type="submit" 
                label="Je me connecte" 
            />

            <div>
                <p>Pas encore de compte ?</p>
                <p>Rejoindre Moody</p>
            </div>
        </form>
    );
}
