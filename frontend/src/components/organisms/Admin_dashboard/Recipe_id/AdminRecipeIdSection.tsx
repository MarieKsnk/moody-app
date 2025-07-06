// src/components/sections/AdminRecipeIdSection.tsx

import { useRouter } from "next/router";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useRecipeById } from "@/hooks/useRecipeId";
import { useDeleteRecipe } from "@/hooks/useDeleteRecipe";
import { useAdminPendingRecipes } from "@/hooks/useAdminRecipes";
import { RecipeComplete } from "@/components/organisms/Recipe_id/recipe-complete";
import { ButtonsModal } from "@/components/molecules/Modals/buttons_modal";
import { AdminModerationButton } from "@/components/atoms/Admin_dashboard/admin_accept_button";
import { ActionLinkButton } from "@/components/atoms/Buttons/action_link_button";
import { ActionClickButton } from "@/components/atoms/Buttons/action_click_button";
import { AdminButton } from "@/components/atoms/Admin_dashboard/admin_button";

export const AdminRecipeIdSection = () => {
  const router = useRouter();
  const { id } = router.query;

  const { token } = useAuth();
  const {
    data: recipe,
    isLoading,
    isError,
    refetch,
  } = useRecipeById(id as string, token);

  const { mutate: deleteRecipe } = useDeleteRecipe(id as string);
  const { accept, reject } = useAdminPendingRecipes();
  const [showModal, setShowModal] = useState(false);

  if (isLoading) {
    return (
      <div className="admin-recipe-section">
        <p className="admin-recipe-section__loading">
          Chargement de la recette...
        </p>
      </div>
    );
  }

  if (isError || !recipe) {
    return (
      <div className="admin-recipe-section">
        <p className="admin-recipe-section__error">
          Recette introuvable ou accès interdit.
        </p>
      </div>
    );
  }

  const handleAccept = () => {
    accept.mutate(recipe.id, {
      onSuccess: () => {
        alert("Recette acceptée !");
        refetch();
        router.push("/admin/recipes");
      },
      onError: () => {
        alert("Erreur lors de l'acceptation.");
      },
    });
  };

  const handleReject = () => {
    reject.mutate(recipe.id, {
      onSuccess: () => {
        alert("Recette refusée !");
        refetch();
        router.push("/admin/recipes");
      },
      onError: () => {
        alert("Erreur lors du refus.");
      },
    });
  };

  const handleDelete = () => {
    deleteRecipe(undefined, {
      onSuccess: () => {
        alert("Recette supprimée");
        router.push("/admin/recipes");
      },
      onError: () => {
        alert("Erreur lors de la suppression");
      },
    });
  };

  return (
    <section className="admin-recipe-section">
      <RecipeComplete recipe={recipe} />

      {recipe.status === "pending" && (
        <div className="admin-recipe-section__moderation">
          <AdminModerationButton
            label="Refuser"
            onClick={handleReject}
            iconSrc="/icons/close-pink.svg"
          />
          <AdminModerationButton
            label="Accepter"
            onClick={handleAccept}
            iconSrc="/icons/accept-pink.svg"
          />
        </div>
      )}

      <div className="admin-recipe-section__buttons">
        <ActionLinkButton
          href={`/admin/edit/${recipe.id}`}
          label="Modifier cette recette"
        />
        <ActionClickButton
          label="Supprimer cette recette"
          onClick={() => setShowModal(true)}
        />
        <AdminButton
          href="/admin/recipes"
          label="Toutes les recettes"
          className="button-return"
        />
      </div>

      {showModal && (
        <ButtonsModal
          title={"Suppression"}
          message={"Es-tu sûr·e de vouloir supprimer la recette ?"}
          primaryLabel="Supprimer la recette"
          primaryOnClick={handleDelete}
          secondaryLabel="Annuler"
          secondaryOnClick={() => setShowModal(false)}
        />
      )}
    </section>
  );
};
