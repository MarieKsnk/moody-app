import { AdminButton } from "@/components/atoms/Admin_dashboard/admin_button";
import { AdminTitleMain } from "@/components/atoms/Admin_dashboard/admin_title_main";
import { AdminAllUsers } from "@/components/molecules/Admin_dashboard/Users/AdminAllUsers";

export const AdminUsersSection = () => {
  return (
    <section className="admin-users-section">
      <AdminTitleMain text="Tous les utilisateurs" />
      <AdminAllUsers />

      <AdminButton href="/admin" label="Retour au dashboard" />
    </section>
  );
};
