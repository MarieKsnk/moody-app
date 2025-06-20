import { Recipe } from "@/types/RecipeData";
import { OwnRecipeCard } from "@/components/atoms/OwnRecipeCard/OwnRecipeCard";
import { DarkButton } from "../atoms/DarkButton";

interface UserRecipeListProps {
  recipes: Recipe[];
}

export const UserRecipeList = ({ recipes }: UserRecipeListProps) => {
  return (
    <section className="own-recipe-list">

      {recipes.length === 0 ? (
        <div className="user-recipe-list__empty">
        <p>Tu n’as pas encore de recettes en stock...</p>
        <DarkButton label="Ajouter une recette" href="/add-recipe"/>
        </div>
      ) : (
        <ul className="user-recipe-list__grid">
          {recipes.map((recipe) => (
            <OwnRecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </ul>
      )}
    </section>
  );
};
