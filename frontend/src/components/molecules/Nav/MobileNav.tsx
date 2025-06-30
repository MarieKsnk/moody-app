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
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (isLoading) return null;

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
          ariaLabel="Ouvrir ou fermer le menu"
          type="button"
          id="burger-button"
        />
      </div>

      {isOpen && (
        <nav className="mobile-menu__nav" aria-label="Navigation principale">
          <ul>
            <li className="nav-bloc">
              <ul>
                <NavLink href="/" label="ACCUEIL" className="light" />
                <li className="mobile-menu__submenu">
                  <SubMenuToggle
                    label="LES RECETTES"
                    isOpen={isRecipesOpen}
                    onClick={() => setIsRecipesOpen((prev) => !prev)}
                    id="submenu-recipes"
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
                </li>
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
            </li>
            {!isAuthenticated ? (
              <li className="auth-bloc">
                <ul>
                  <NavLink href="/login" label="CONNEXION" className="dark" />
                  <NavLink
                    href="/register"
                    label="INSCRIPTION"
                    className="dark"
                  />
                </ul>
              </li>
            ) : (
              <li className="auth-bloc">
                <ul>
                  <ProfileLink href="/profile" label="MON PROFIL" />
                  <LogoutButtonIcon
                    onClick={handleLogout}
                    label="DECONNEXION"
                  />
                </ul>
              </li>
            )}
          </ul>
        </nav>
      )}
    </div>
  );
};
