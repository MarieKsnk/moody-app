import { AdminWrapper } from "@/wrappers/AdminWrapper";
import { AdminLayout } from "@/components/layout/Admin_dashboard";
import { AdminRecipesSection } from "@/components/organisms/Admin_dashboard/Recipes/AdminRecipesSection";

export default function AdminRecipesPage() {
  return (
    <AdminWrapper>
      <AdminLayout>
        <AdminRecipesSection />
      </AdminLayout>
    </AdminWrapper>
  );
}
