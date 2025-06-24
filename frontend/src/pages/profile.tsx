import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import { useAuthStore } from "@/stores/authStore";
import { useUserRecipes } from "@/hooks/useUserRecipes";
import { AppLayout } from "@/components/layout/AppLayout";
import { AuthWrapper } from "@/wrappers/AuthWrapper";
import { ProfileSection } from "@/components/molecules/profileSection";
import { OwnRecipesList } from "@/components/molecules/OwnRecipesList";

export default function ProfilePage() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const logout = useAuthStore((state) => state.logout);
  const { user } = useAuth();

  const { data: recipes, isLoading, error } = useUserRecipes();

  const handleLogout = () => {
    logout();
    queryClient.clear();
    router.replace("/");
  };

  console.log("Recettes récupérées côté profile :", recipes);

  return (
    <AuthWrapper>
      <AppLayout>
        <main className="profile-page">
          {user && <ProfileSection user={user} onLogout={handleLogout} />}

          {isLoading && <p>Chargement...</p>}
          {error && <p>Erreur lors du chargement des recettes</p>}
          {recipes && <OwnRecipesList title="Mes recettes" recipes={recipes} />}
        </main>
      </AppLayout>
    </AuthWrapper>
  );
}
