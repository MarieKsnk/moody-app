import { TitleIcon } from "@/components/atoms/Titles/titleIcon";
import { AllRecipesList } from "@/components/molecules/Cards_list/all_recipes_list";
import { useAllRecipes } from "@/hooks/useAllRecipe";
import { DarkButton } from "@/components/atoms/Buttons/dark_button";

export const LatestRecipes = () => {
  const { data: recipes, isLoading, error } = useAllRecipes();

  if (isLoading) return <p>Chargement des dernières recettes...</p>;
  if (error || !recipes) return <p>Erreur lors du chargement des recettes.</p>;

  return (
    <section className="latest-recipes">
      <TitleIcon title="Les dernieres recettes" />
      <AllRecipesList recipes={recipes} limit={6} />
      <DarkButton href="/all-recipes" label="Toutes les recettes" />
    </section>
  );
};
