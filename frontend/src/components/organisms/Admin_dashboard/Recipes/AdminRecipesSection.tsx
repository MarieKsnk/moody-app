import React from "react";
import { AdminAllRecipes } from "@/components/molecules/Admin_dashboard/Recipes/AdminAllRecipes";
import { AdminButton } from "@/components/atoms/Admin_dashboard/admin_button";
import { AdminTitleMain } from "@/components/atoms/Admin_dashboard/admin_title_main";

export const AdminRecipesSection = () => {
  return (
    <section className="admin-recipes-section">
      <AdminTitleMain text="Toutes les recettes" />
      <AdminAllRecipes />
      <AdminButton href="/admin" label="Retour au dashboard" />
    </section>
  );
};
