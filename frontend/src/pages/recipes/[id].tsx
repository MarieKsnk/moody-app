import { useRouter } from "next/router";
import { useRecipeById } from "@/hooks/useRecipeId";
import { RecipeComplete } from "@/components/organisms/Recipe_id/recipe-complete";
import { AppLayout } from "@/components/layout/AppLayout";
import { useAuth } from "@/hooks/useAuth";
import { useDeleteRecipe } from "@/hooks/useDeleteRecipe";
import { useState } from "react";
import { RecipeButtons } from "@/components/molecules/Recipe_id_page/recipe_buttons";
import { DeleteRecipeModal } from "@/components/molecules/Modals/delete_recipe_modal";

export default function RecipePage() {
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuth();

  const { data: recipe, isLoading, isError } = useRecipeById(id as string);
  const { mutate: deleteRecipe } = useDeleteRecipe(id as string);

  const [showModal, setShowModal] = useState(false);

  if (isLoading) return <p>Chargement de la recette...</p>;
  if (isError || !recipe) return <p>Recette introuvable.</p>;

  const handleDelete = () => {
    deleteRecipe(undefined, {
      onSuccess: () => {
        alert("Recette supprimée");
        router.push("/profile");
      },
      onError: () => {
        alert("Erreur lors de la suppression");
      },
    });
  };

  const userAuthor = recipe?.user?.id === user?.id;

  return (
    <AppLayout>
      <main className="recipe-page">
        <RecipeComplete recipe={recipe} />

        {recipe?.user?.id === user?.id && (
          <RecipeButtons
            recipeId={recipe.id}
            onClick={() => setShowModal(true)}
            userAuthor={userAuthor}
          />
        )}

        {showModal && (
          <DeleteRecipeModal
            onConfirm={handleDelete}
            onCancel={() => setShowModal(false)}
          />
        )}
      </main>
    </AppLayout>
  );
}
