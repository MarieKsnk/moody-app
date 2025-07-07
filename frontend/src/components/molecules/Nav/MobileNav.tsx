import { useState, useEffect } from "react";
import { Logo } from "@/components/atoms/Nav/logo";
import { BurgerButton } from "@/components/atoms/Buttons/burger_button";
import { NavLink } from "@/components/atoms/Nav/nav_link";
import { ProfileLink } from "@/components/atoms/Buttons/profile_link";
import { LogoutButtonIcon } from "@/components/atoms/Buttons/logout_button_icon";
import { useAuth } from "@/hooks/useAuth";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useAuthStore } from "@/stores/authStore";
import { SubMenuToggle } from "@/components/atoms/Nav/sub_menu_toggle";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRecipesOpen, setIsRecipesOpen] = useState(false);
  const { isAuthenticated, isLoading } = useAuth();
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
    <div className="mobile-menu">
      <div className="mobile-menu__header">
        <Logo
          href="/"
          alt="Logo Moody"
          width={150}
          height={40}
          className="logo-moody"
          ariaLabel="Accueil"
        />

        <BurgerButton
          isOpen={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          ariaLabel={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          type="button"
          id="burger-button"
          ariaControls="mobile-navigation"
          ariaExpanded={isOpen}
        />
      </div>

      {isOpen && (
        <nav
          id="mobile-navigation"
          className="mobile-menu__nav"
          aria-label="Navigation principale"
        >
          <div className="nav-bloc">
            <ul>
              <NavLink href="/" label="ACCUEIL" className="light" />
              <div className="mobile-menu__submenu">
                <SubMenuToggle
                  label="LES RECETTES"
                  isOpen={isRecipesOpen}
                  onClick={() => setIsRecipesOpen((prev) => !prev)}
                  id="submenu-recipes"
                  className="submenu-recipes"
                />
                {isRecipesOpen && (
                  <ul
                    id="submenu-recipes"
                    className="mobile-menu__links"
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
                )}
              </div>
              {isAuthenticated && (
                <>
                  <NavLink
                    href="/profile#mes-recettes"
                    label="MES RECETTES"
                    className="light"
                  />
                  <NavLink
                    href="/add-recipe"
                    label="AJOUTER UNE RECETTE"
                    className="light"
                  />
                </>
              )}
            </ul>
          </div>

          <div className="auth-bloc">
            <ul>
              {!isAuthenticated ? (
                <>
                  <NavLink href="/login" label="CONNEXION" className="dark" />
                  <NavLink
                    href="/register"
                    label="INSCRIPTION"
                    className="dark"
                  />
                </>
              ) : (
                <>
                  <ProfileLink href="/profile" label="MON PROFIL" />
                  <LogoutButtonIcon
                    onClick={handleLogout}
                    label="DÉCONNEXION"
                  />
                </>
              )}
            </ul>
          </div>
        </nav>
      )}
    </div>
  );
};
