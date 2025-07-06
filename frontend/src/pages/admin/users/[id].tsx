import { AdminWrapper } from "@/wrappers/AdminWrapper";
import { AdminLayout } from "@/components/layout/Admin_dashboard";
import { AdminUserIdSection } from "@/components/organisms/Admin_dashboard/User_id/AdminUserIdSection";

export default function AdminUserById() {
  return (
    <AdminWrapper>
      <AdminLayout>
        <AdminUserIdSection />
      </AdminLayout>
    </AdminWrapper>
  );
}
