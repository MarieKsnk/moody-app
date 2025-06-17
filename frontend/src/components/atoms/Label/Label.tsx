import React from "react";
import { ILabelProps } from "./Label.props";

export const Label: React.FC<ILabelProps> = ({
  htmlFor,
  children,
  required,
}) => (
  <label htmlFor={htmlFor}>
    {children}
    {required && (
      <span aria-hidden="true" title="Champ obligatoire">
        *
      </span>
    )}
  </label>
);
