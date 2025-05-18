import { useForm } from "react-hook-form";
import { useState } from "react";

type RegisterFormData = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
}

function RegisterForm() {
    <form>
        <label htmlFor="firstName">Prénom</label>
        <input id="firstName" type="text" />

        <label htmlFor="lastName">Nom</label>
        <input id="lastName" type="text" />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" />

        <label htmlFor="password">Mot de passe</label>
        <input id="password" type="password" />

        <button type="submit">Rejoindre Moody</button>
    </form>

}

export default RegisterForm;