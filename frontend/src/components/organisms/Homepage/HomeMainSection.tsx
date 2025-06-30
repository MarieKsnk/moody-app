import { HomeBanner } from "@/components/molecules/Homepage/HomeBanner";
import ProfilePreview from "@/components/molecules/Homepage/ProfilePreview";
import { OwnRecipesList } from "@/components/molecules/Cards_list/own_recipes_list/OwnRecipesList";
import { useUserRecipes } from "@/hooks/useUserRecipes";

export const HomeMainSection = () => {
  const { data: recipes, isLoading, error } = useUserRecipes();

  return (
    <div className="home-main">
      <div className="home-main__banner">
        <HomeBanner />
      </div>

      <section className="home-main__profile">
        <ProfilePreview />
      </section>

      <section className="home-main__recipes">
        {isLoading && <p>Chargement...</p>}
        {error && <p>Erreur lors du chargement des recettes</p>}
        {recipes && (
          <OwnRecipesList
            title="Mes dernieres recettes"
            recipes={recipes}
            showButtons={true}
            limit={3}
            className="own-recipe-list--home"
          />
        )}
      </section>
    </div>
  );
};
