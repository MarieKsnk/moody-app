import React from "react";
import clsx from "clsx";
import type { IAdminTitleProps } from "./AdminTitle.props";

export const AdminTitle = ({ text, className }: IAdminTitleProps) => (
  <h1 className={clsx("admin-title", className)}>{text}</h1>
);
