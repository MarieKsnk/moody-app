import Link from "next/link";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useAuthStore } from "@/stores/authStore";
import { NavLink } from "@/components/atoms/Nav/nav_link";
import { LogoutButtonIcon } from "@/components/atoms/Buttons/logout_button_icon";

export const AdminDesktopNav = () => {
  const logout = useAuthStore((s) => s.logout);
  const queryClient = useQueryClient();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    queryClient.clear();
    router.replace("/");
  };
  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar__logo">
        <Link href="/admin">
          <Image
            src="/assets/logo_moody_light.svg"
            alt="Logo Moody"
            width={200}
            height={60}
            priority
          />
        </Link>
      </div>
      <nav
        className="admin-sidebar__menu"
        aria-label="Navigation admin desktop"
      >
        <div className="admin-nav-bloc">
          <NavLink href="/admin" label="DASHBOARD" className="light" />
          <NavLink href="/admin/users" label="UTILISATEURS" className="light" />
          <NavLink href="/admin/recipes" label="RECETTES" className="light" />
          <NavLink
            href="/admin/recipes-pending"
            label="RECETTES EN ATTENTES"
            className="light"
          />
        </div>
        <div className="admin-auth-bloc">
          <ul>
            <LogoutButtonIcon
              onClick={handleLogout}
              label="DECONNEXION"
              className="logout-button--light"
            />
          </ul>
        </div>
      </nav>
    </aside>
  );
};
