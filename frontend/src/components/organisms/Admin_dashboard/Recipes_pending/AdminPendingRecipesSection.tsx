import { AdminTitleMain } from "@/components/atoms/Admin_dashboard/admin_title_main";
import { AdminPendingRecipesList } from "@/components/molecules/Admin_dashboard/Recipes_pending/AdminPendingRecipes";
import { AdminButton } from "@/components/atoms/Admin_dashboard/admin_button";

export const AdminPendingRecipesSection = () => {
  return (
    <section className="admin-recipes-section">
      <AdminTitleMain text="Recettes en attente de validation" />
      <AdminPendingRecipesList />
      <AdminButton href="/admin" label="Retour au dashboard" />
    </section>
  );
};
