import React from "react";
import { IInputProps } from "./Input.props";

export const Input: React.FC<IInputProps> = ({
  id,
  type,
  register,
  autoComplete,
  error,
  ariaDescribedBy,
  tabIndex,
  accept,
  placeholder,
  autoFocus,
  maxLength,
  minLength,
  min,
  max,
}) => (
  <input
    id={id}
    type={type}
    {...register}
    autoComplete={autoComplete}
    tabIndex={tabIndex}
    accept={accept}
    placeholder={placeholder}
    autoFocus={autoFocus}
    maxLength={maxLength}
    minLength={minLength}
    min={min}
    max={max}
    aria-invalid={!!error}
    aria-describedby={ariaDescribedBy}
  />
);

