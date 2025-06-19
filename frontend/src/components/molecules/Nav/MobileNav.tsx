import { useState, useEffect } from "react";
import Logo from "@/components/atoms/Logo/Logo";
import BurgerButton from "@/components/atoms/BurgerButton/BurgerButton";
import NavLink from "@/components/atoms/NavLink/NavLink";
import ProfileLink from "@/components/atoms/ProfileLink/ProfileLink";
import { LogoutButton } from "@/components/atoms/LogoutButton";
import { useAuth } from "@/hooks/useAuth";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useAuthStore } from "@/stores/authStore";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
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
                <NavLink href="/" label="LES RECETTES" className="light" />
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
                  <LogoutButton onClick={handleLogout} label="DECONNEXION" />
                </ul>
              </li>
            )}
          </ul>
        </nav>
      )}
    </div>
  );
}
