import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface IInputProps {
  id: string;
  type: "text" | "email" | "password" | "file" | "number" | "url" | "text-area";
  register?: UseFormRegisterReturn;
  autoComplete?: string;
  error?: FieldError;
  ariaDescribedBy?: string;
  tabIndex?: number;
  accept?: string;
  placeholder?: string;
  autoFocus?: boolean;
  maxLength?: number;
  minLength?: number;
  min?: number;
  max?: number;
  className?: string;
}
