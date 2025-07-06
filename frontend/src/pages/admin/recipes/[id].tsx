import { AdminWrapper } from "@/wrappers/AdminWrapper";
import { AdminLayout } from "@/components/layout/Admin_dashboard";
import { AdminRecipeIdSection } from "@/components/organisms/Admin_dashboard/Recipe_id/AdminRecipeIdSection";

export default function AdminRecipeById() {
  return (
    <AdminWrapper>
      <AdminLayout>
        <AdminRecipeIdSection />
      </AdminLayout>
    </AdminWrapper>
  );
}
