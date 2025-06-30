import { AppLayout } from "@/components/layout/AppLayout";
import { useAllRecipes } from "@/hooks/useAllRecipe";
import { AllRecipesMainSection } from "@/components/organisms/All_recipes/AllRecipesMainSection";

export default function AllRecipesPage() {
  const { data: recipes, isLoading, isError } = useAllRecipes();

  if (isLoading) return <p>Chargement...</p>;
  if (isError || !recipes) return <p>Erreur de chargement.</p>;

  return (
    <AppLayout>
      <AllRecipesMainSection />
    </AppLayout>
  );
}
