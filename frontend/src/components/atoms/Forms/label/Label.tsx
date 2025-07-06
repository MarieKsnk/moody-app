import React from "react";
import clsx from "clsx";
import { ILabelProps } from "./Label.props";

export const Label: React.FC<ILabelProps> = ({
  htmlFor,
  children,
  required,
  className,
}) => (
  <label htmlFor={htmlFor} className={clsx("label", className)}>
    {children}
    {required && (
      <span
        aria-hidden="true"
        title="Champ obligatoire"
        className="label__required"
      >
        *
      </span>
    )}
  </label>
);
