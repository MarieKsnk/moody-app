import React, { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "@/stores/authStore";
import { Logo } from "@/components/atoms/Nav/logo";
import { ProfileLink } from "@/components/atoms/Buttons/profile_link";
import { LogoutButtonIcon } from "@/components/atoms/Buttons/logout_button_icon";
import { SubMenuToggle } from "@/components/atoms/Nav/sub_menu_toggle";
import { NavLink } from "@/components/atoms/Nav/nav_link";

export const DesktopNav: React.FC = () => {
  const [isRecipesOpen, setIsRecipesOpen] = useState(false);
  const { isAuthenticated, isLoading } = useAuth();
  const logout = useAuthStore((s) => s.logout);
  const queryClient = useQueryClient();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    queryClient.clear();
    router.replace("/");
  };

  if (isLoading) return null;

  return (
    <div className="desktop-menu">
      <div className="desktop-menu__top">
        <ul className="item left">
          {isAuthenticated ? (
            <ProfileLink href="/profile" label="MON PROFIL" />
          ) : (
            <NavLink href="/login" label="CONNEXION" />
          )}
        </ul>
        <div className="item center">
        </div>
        <ul className="item right">
          {isAuthenticated ? (
            <LogoutButtonIcon onClick={handleLogout} label="DÉCONNEXION" />
          ) : (
            <NavLink href="/register" label="INSCRIPTION" />
          )}
        </ul>
      </div>

      <nav
        className={`desktop-menu__bottom ${
          isAuthenticated ? "" : "only-recipes"
        }`}
        aria-label="Navigation secondaire"
      >
        <div
          className={`item left with-submenu ${isRecipesOpen ? "open" : ""}`}
        >
          <SubMenuToggle
            label="LES RECETTES"
            isOpen={isRecipesOpen}
            onClick={() => setIsRecipesOpen((p) => !p)}
            id="desktop-submenu-recipes"
          />
          <ul
            id="desktop-submenu-recipes"
            className="submenu"
            role="menu"
            aria-label="Sous-menu Les recettes"
          >
            <NavLink
              href="/recipes/moods"
              label="Recettes par mood"
              className="light"
            />
            <NavLink
              href="/all-recipes"
              label="Toutes les recettes"
              className="all-recipes"
            />
          </ul>
        </div>

        {isAuthenticated && (
          <>
            <ul className="item center">
              <NavLink
                href="/profile#mes-recettes"
                label="MES RECETTES"
                className="light"
              />
            </ul>
            <ul className="item right">
              <NavLink
                href="/add-recipe"
                label="AJOUTER UNE RECETTE"
                className="light"
              />
            </ul>
          </>
        )}
      </nav>
    </div>
  );
};
