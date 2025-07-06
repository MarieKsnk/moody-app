import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import { useAuthStore } from "@/stores/authStore";
import { useUserRecipes } from "@/hooks/useUserRecipes";
import { ProfileSection } from "@/components/molecules/Profile/profileSection";
import { OwnRecipesList } from "@/components/molecules/Cards_list/own_recipes_list/OwnRecipesList";

export const ProfileMainSection: React.FC = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const logout = useAuthStore((state) => state.logout);
  const { user } = useAuth();
  const { recipes, isLoading, error } = useUserRecipes();

  const handleLogout = () => {
    logout();
    queryClient.clear();
    router.replace("/");
  };

  return (
    <div className="profile-page">
      {user && <ProfileSection user={user} onLogout={handleLogout} />}

      {isLoading && <p>Chargement...</p>}
      {error && <p>Erreur lors du chargement des recettes</p>}
      {recipes && (
        <OwnRecipesList
          title="Mes recettes"
          recipes={recipes}
          id="mes-recettes"
          className="own-recipe-list--profile"
        />
      )}
    </div>
  );
};
