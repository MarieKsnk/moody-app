import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface ICheckboxProps {
  id: string;
  label: string;
  error?: FieldError;
  register: UseFormRegisterReturn;
  className?: string;
}
