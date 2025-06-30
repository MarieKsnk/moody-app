import React from "react";
import clsx from "clsx";
import { ITextareaProps } from "./Textarea.props";

export const Textarea: React.FC<ITextareaProps> = ({
  id,
  className,
  register,
  error,
  ariaDescribedBy,
  tabIndex,
  placeholder,
  autoFocus,
  maxLength,
  minLength,
  rows = 4,
  cols,
}) => (
  <textarea
    id={id}
    className={clsx("textarea", className)}
    {...register}
    tabIndex={tabIndex}
    placeholder={placeholder}
    autoFocus={autoFocus}
    maxLength={maxLength}
    minLength={minLength}
    rows={rows}
    cols={cols}
    aria-invalid={!!error}
    aria-describedby={ariaDescribedBy}
  />
);
