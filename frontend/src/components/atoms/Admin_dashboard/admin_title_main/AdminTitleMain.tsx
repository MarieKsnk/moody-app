import React from "react";
import clsx from "clsx";
import type { IAdminTitleMainProps } from "./AdminTitleMain.props";

export const AdminTitleMain = ({ text, className }: IAdminTitleMainProps) => (
  <h1 className={clsx("admin-title-main", className)}>{text}</h1>
);
