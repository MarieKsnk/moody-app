import { AdminMobileNav } from "@/components/molecules/Admin_dashboard/Nav/AdminMobileNav";
import { AdminDesktopNav } from "@/components/molecules/Admin_dashboard/Nav/AdminDesktopNav";

export const AdminHeader = () => {
  return (
    <header className="admin-header">
      <div className="admin-mobile-nav">
        <AdminMobileNav />
      </div>
      <div className="admin-desktop-nav">
        <AdminDesktopNav />
      </div>
    </header>
  );
};
