import { AdminHeader } from "@/components/organisms/Admin_dashboard/Nav/AdminHeader";
import { IAdminLayoutProps } from "./AdminLayout.props";
import { AdminDesktopNav } from "@/components/molecules/Admin_dashboard/Nav/AdminDesktopNav";

export const AdminLayout = ({ children }: IAdminLayoutProps) => {
  return (
    <div className="admin-layout">
      <AdminDesktopNav />
      <div className="admin-content">
        <AdminHeader />
        <main className="admin-main" id="main-content" tabIndex={-1}>
          {children}
        </main>
      </div>
    </div>
  );
};
