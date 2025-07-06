import React from "react";
import clsx from "clsx";
import { IAdminStatsListProps } from "./AdminStatsList.props";
import { AdminStatCard } from "@/components/atoms/Admin_dashboard/admin_stat_card";
export const AdminStatsList = ({ stats, className }: IAdminStatsListProps) => (
  <div className={clsx("admin-stats-list", className)}>
    {stats.map((stat) => (
      <AdminStatCard key={stat.text} {...stat} />
    ))}
  </div>
);
