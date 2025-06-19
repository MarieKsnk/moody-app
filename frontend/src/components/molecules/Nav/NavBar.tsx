import React from "react";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useAuthStore } from "@/stores/authStore";

export const NavBar: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const logout = useAuthStore((s) => s.logout);
  const queryClient = useQueryClient();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    queryClient.clear();
    router.replace("/");
  };

  if (isLoading) {
    return null;
  }

  return (
    <nav aria-label="Navigation principale">
      <ul>
        <li>
          <Link href="/">Accueil</Link>
        </li>

        {!isAuthenticated ? (
          <>
            <li>
              <Link href="/login">Connexion</Link>
            </li>
            <li>
              <Link href="/register">Inscription</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/profile">Mon profil</Link>
            </li>
            <li onClick={handleLogout} className="cursor-pointer">
              Logout
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
