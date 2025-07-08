import Head from "next/head";
import { AdminHeader } from "@/components/organisms/Admin_dashboard/Nav/AdminHeader";
import { IAdminLayoutProps } from "./AdminLayout.props";
import { AdminDesktopNav } from "@/components/molecules/Admin_dashboard/Nav/AdminDesktopNav";

export const AdminLayout = ({ children }: IAdminLayoutProps) => {
  return (
    <>
      <Head>
        <title>Moody Admin – Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <div className="admin-layout">
        <AdminDesktopNav />
        <div className="admin-content">
          <AdminHeader />
          <main className="admin-main" id="main-content" tabIndex={-1}>
            {children}
          </main>
        </div>
      </div>
    </>
  );
};
