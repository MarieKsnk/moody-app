import { useState } from "react";
import axios from "axios";
import { RegisterFormData } from "@/types/atoms/RegisterFormData";

export default function RegisterForm() {
    const [ formData, setFormData ] = useState<RegisterFormData>({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
    })

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const newUser = await axios.post("http://localhost:8000/api/auth/register", formData)

            if (newUser.status === 201) {
                alert(`${formData.firstName}, vous etes maintenant inscrit sur Moody ! `)
            } else {
                alert("Une erreure est survenue.");
            }

        } catch(error) {
            console.log("Erreur lors de l'inscription :", error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">Prénom</label>
                <input type="text" name="firstName" id="firstName" onChange={handleChange} value={formData.firstName} required maxLength={20} />
            </div>

            <div>
                <label htmlFor="lastName">Nom</label>
                <input type="text" name="lastName" id="lastName" onChange={handleChange} value={formData.lastName} required maxLength={30} />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={handleChange} value={formData.email} required maxLength={50}/>
            </div>

            <div>
                <label htmlFor="password">Mot de passe</label>
                <input type="password" name="password" id="password" onChange={handleChange} value={formData.password} required maxLength={15} />
            </div>

            <button type="submit">Je créer mon compte</button>
        </form>
    )
}