import { TitleIcon } from "@/components/atoms/Titles/titleIcon";
import { AllRecipesList } from "@/components/molecules/Cards_list/all_recipes_list";
import { useAllRecipes } from "@/hooks/useAllRecipe";

export const AllRecipesMainSection = () => {
  const { data: recipes, isLoading, error } = useAllRecipes();

  if (isLoading) return <p>Chargement des recettes...</p>;
  if (error || !recipes) return <p>Une erreur est survenue.</p>;

  return (
    <section className="all-recipes-section">
      <TitleIcon title="Toutes les recettes" />
      <AllRecipesList recipes={recipes} />
    </section>
  );
};
