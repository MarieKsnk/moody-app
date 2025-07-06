import { AdminWrapper } from "@/wrappers/AdminWrapper";
import { AdminLayout } from "@/components/layout/Admin_dashboard";
import { AdminPendingRecipesSection } from "@/components/organisms/Admin_dashboard/Recipes_pending/AdminPendingRecipesSection";

export default function AdminRecipesPendingPage() {
  return (
    <AdminWrapper>
      <AdminLayout>
        <AdminPendingRecipesSection />
      </AdminLayout>
    </AdminWrapper>
  );
}
