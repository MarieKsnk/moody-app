import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const AdminWrapper = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { user } = useAuthStore();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
  }, [hydrated, user, router]);

  if (!hydrated || user === null) {
    return <p>Vérification des droits d’accès…</p>;
  }

  if (user && user.role?.id !== "ADMIN") {
    return (
      <div className="admin-access-denied" role="alert" aria-live="assertive">
        <h2>Accès refusé</h2>
        <p>
          L’accès à cet espace est strictement réservé aux administrateurs
          Moody.
          <br />
          <br />
          <a href="/">Retour à l’accueil</a>
        </p>
      </div>
    );
  }

  return <>{children}</>;
};
