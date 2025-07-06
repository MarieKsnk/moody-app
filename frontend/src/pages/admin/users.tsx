import { AdminWrapper } from "@/wrappers/AdminWrapper";
import { AdminLayout } from "@/components/layout/Admin_dashboard";
import { AdminUsersSection } from "@/components/organisms/Admin_dashboard/Users/AdminUsersSection";

export default function AdminUsersPage() {
  return (
    <AdminWrapper>
      <AdminLayout>
        <AdminUsersSection />
      </AdminLayout>
    </AdminWrapper>
  );
}
