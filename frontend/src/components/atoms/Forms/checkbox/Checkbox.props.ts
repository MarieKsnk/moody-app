import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { ReactNode } from "react";

export interface ICheckboxProps {
  id: string;
  label: ReactNode;
  error?: FieldError;
  register: UseFormRegisterReturn;
  className?: string;
}
