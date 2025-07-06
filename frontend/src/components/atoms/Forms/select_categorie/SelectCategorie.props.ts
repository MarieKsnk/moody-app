import { UseFormRegisterReturn } from "react-hook-form";

export interface IOptionsProps {
  value: string;
  label: string;
}

export interface ISelectCategorieProps {
  id: string;
  options: IOptionsProps[];
  register: UseFormRegisterReturn;
  placeholder?: string;
  error?: boolean;
  className?: string;
}
