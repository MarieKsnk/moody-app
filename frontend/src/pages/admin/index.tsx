import { AdminWrapper } from "@/wrappers/AdminWrapper";
import { AdminLayout } from "@/components/layout/Admin_dashboard";
import { AdminHomeSection } from "@/components/organisms/Admin_dashboard/Homepage/AdminHomeSection";

export default function AdminDashboard() {
  return (
    <AdminWrapper>
      <AdminLayout>
        <AdminHomeSection />
      </AdminLayout>
    </AdminWrapper>
  );
}
