import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface IInputProps {
  id: string;
  label: string;
  type: "text" | "email" | "password" | "file" | "checkbox";
  error?: FieldError;
  register: UseFormRegisterReturn;
  ariaDescribedBy?: string;
  accept? : string;
}
