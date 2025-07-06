import React from "react";
import { AdminTitleMain } from "@/components/atoms/Admin_dashboard/admin_title_main";
import { AdminStatsList } from "@/components/molecules/Admin_dashboard/Homepage/admin_stats_list";
import { AdminLatestUsers } from "@/components/molecules/Admin_dashboard/Homepage/AdminLatestUsers";
import { useStatsNumber } from "@/hooks/useStatsNumbers";
import { AdminTitle } from "@/components/atoms/Admin_dashboard/admin_title";
import { AdminButton } from "@/components/atoms/Admin_dashboard/admin_button";
import { AdminLatestAcceptedRecipes } from "@/components/molecules/Admin_dashboard/Homepage/AdminLatestRecipes";

export const AdminHomeSection = () => {
  const {
    usersCount,
    usersLoading,
    usersError,
    recipesCount,
    recipesLoading,
    recipesError,
    pendingCount,
    pendingLoading,
    pendingError,
  } = useStatsNumber();

  const stats = [
    {
      text: "Nombre d'utilisateurs",
      value: usersLoading ? "..." : usersCount ?? "—",
    },
    {
      text: "Nombre de recettes",
      value: recipesLoading ? "..." : recipesCount ?? "—",
    },
    {
      text: "Recettes en attente",
      value: pendingLoading ? "..." : pendingCount ?? "—",
    },
  ];

  const isError = usersError || recipesError || pendingError;

  return (
    <div className="admin-home-section">
      <section className="admin-home-section__stats">
        <AdminTitleMain text="Dashboard admin" />
        <AdminStatsList stats={stats} />
      </section>
      <section className="admin-home-section__latest-users">
        <AdminTitle text="Nouveaux inscrits" />
        <AdminLatestUsers />
        <AdminButton href="/admin/users" label="Tous les utilisateurs" />
      </section>
      <section className="admin-home-section__latest-recipes">
        <AdminTitle text="Nouvelles recettes" />
        <AdminLatestAcceptedRecipes />
        <AdminButton href="/admin/recipes" label="Toutes les recettes" />
      </section>
    </div>
  );
};
