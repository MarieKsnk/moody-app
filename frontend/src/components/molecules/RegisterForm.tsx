import { useState } from "react";
import axios from "axios";
import { RegisterFormData } from "@/types/atoms/RegisterFormData";

export default function RegisterForm() {
    const [ formData, setFormData ] = useState<RegisterFormData>({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
    })

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }

    // Rajouter handleSubmit

    return (
        <form>
            <div>
                <label htmlFor="firstnane">Prénom</label>
                <input type="text" name="firstname" id="firstname" onChange={handleChange} value={formData.firstname} required maxLength={20} />
            </div>

            <div>
                <label htmlFor="lastname">Nom</label>
                <input type="text" name="firstname" id="lastname" onChange={handleChange} value={formData.lastname} required maxLength={30} />
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