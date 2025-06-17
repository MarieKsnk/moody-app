import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface ITextareaProps {
  id: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  ariaDescribedBy?: string;
  tabIndex?: number;
  placeholder?: string;
  autoFocus?: boolean;
  maxLength?: number;
  minLength?: number;
  rows?: number;
  cols?: number;
}
