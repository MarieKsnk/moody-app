import { useRouter } from "next/router";
import { useRecipeById } from "@/hooks/useRecipeId";
import { RecipeComplete } from "@/components/organisms/recipe_id_page/recipe-complete";
import { AppLayout } from "@/components/layout/AppLayout";

export default function RecipePage() {
  const router = useRouter();
  const { id } = router.query;

  const { data: recipe, isLoading, isError } = useRecipeById(id as string);

  if (isLoading) return <p>Chargement de la recette...</p>;
  if (isError || !recipe) return <p>Recette introuvable.</p>;

  return (
    <AppLayout>
      <main className="recipe-page">
        <RecipeComplete recipe={recipe} />
      </main>
    </AppLayout>
  );
}
