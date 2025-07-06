import { RecipeCard } from "@/components/atoms/Cards/recipe_card/RecipeCard";
import { IAllRecipesListProps } from "./AllRecipesList.props";
import { DarkButton } from "@/components/atoms/Buttons/dark_button";
import Link from "next/link";

export const AllRecipesList = ({ recipes, limit }: IAllRecipesListProps) => {
  const limitedRecipes = limit ? [...recipes].slice(0, limit) : recipes;

  if (!Array.isArray(limitedRecipes) || limitedRecipes.length === 0) {
    return (
      <div className="all-recipes-list__empty">
        <p>Tu n’as pas encore de recettes en stock...</p>
        <DarkButton label="Ajouter une recette" href="/add-recipe" />
      </div>
    );
  }

  return (
    <div className="all-recipes-list__content">
      <ul className="all-recipes-list__grid">
        {limitedRecipes.map((recipe) => (
          <li key={recipe.id}>
            <Link href={`/recipes/${recipe.id}`}>
              <RecipeCard
                recipe={recipe}
                className="recipe-card--dark-border"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
