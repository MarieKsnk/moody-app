import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface IOptionsProps {
  value: string;
  label: string;
}

export interface ISelectIngredientProps {
  id: string;
  options: IOptionsProps[];
  register: UseFormRegisterReturn;
  error?: FieldError;
  placeholder?: string;
}
