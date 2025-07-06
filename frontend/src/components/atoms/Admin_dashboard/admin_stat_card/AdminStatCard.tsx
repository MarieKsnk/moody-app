import React from "react";
import clsx from "clsx";
import type { IAdminStatCardProps } from "./AdminStatCard.props";

export const AdminStatCard = ({
  text,
  value,
  className,
}: IAdminStatCardProps) => (
  <div className={clsx("admin-stat-card", className)}>
    <span className="admin-stat-card__text">{text}</span>
    <span className="admin-stat-card__value">{value}</span>
  </div>
);
