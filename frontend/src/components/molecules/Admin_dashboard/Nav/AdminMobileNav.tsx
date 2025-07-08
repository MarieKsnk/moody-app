import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BurgerButton } from "@/components/atoms/Buttons/burger_button";
import { NavLink } from "@/components/atoms/Nav/nav_link";
import { LogoutButtonIcon } from "@/components/atoms/Buttons/logout_button_icon";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useAuthStore } from "@/stores/authStore";

export const AdminMobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const logout = useAuthStore((s) => s.logout);
  const queryClient = useQueryClient();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    queryClient.clear();
    router.replace("/");
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  return (
    <div className="admin-mobile-menu">
      <div className="admin-mobile-menu__header">
        <Link href="/admin">
          <Image
            src="/assets/logo_moody_light.svg"
            alt="Logo Moody"
            width={120}
            height={40}
            priority
          />
        </Link>
        <BurgerButton
          isOpen={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          ariaLabel={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          type="button"
          id="admin-burger-button"
          ariaControls="admin-mobile-navigation"
          ariaExpanded={isOpen}
        />
      </div>

      <nav
        id="admin-mobile-navigation"
        className="admin-mobile-menu__nav"
        aria-label="Navigation principale admin"
        aria-hidden={!isOpen}
        style={{ display: isOpen ? "flex" : "none" }}
      >
        {isOpen && (
          <>
            <ul className="admin-nav-bloc">
              <NavLink href="/admin" label="DASHBOARD" className="light" />
              <NavLink
                href="/admin/users"
                label="UTILISATEURS"
                className="light"
              />
              <NavLink
                href="/admin/recipes"
                label="RECETTES"
                className="light"
              />
              <NavLink
                href="/admin/recipes-pending"
                label="RECETTES EN ATTENTES"
                className="light"
              />
            </ul>
            <div className="admin-auth-bloc">
              <ul>
                <LogoutButtonIcon onClick={handleLogout} label="DÉCONNEXION" />
              </ul>
            </div>
          </>
        )}
      </nav>
    </div>
  );
};
