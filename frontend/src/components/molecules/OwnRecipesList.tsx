import { Recipe } from "@/types/RecipeData";
import { OwnRecipeCard } from "@/components/atoms/OwnRecipeCard/OwnRecipeCard";
import { LightButton } from "../atoms/lightButton";
import { TitleIcon } from "../atoms/titleIcon";
import { DarkButton } from "../atoms/DarkButton";
import Link from "next/link";

interface UserRecipeListProps {
  title: string;
  recipes: Recipe[];
  showButtons?: boolean;
  limit?: number;
}

export const OwnRecipesList = ({
  title,
  recipes,
  showButtons = false,
  limit,
}: UserRecipeListProps) => {
  const limitation = limit ? [...recipes].slice(0, limit) : recipes;
  return (
    <section className="own-recipe-list">
      {limitation.length === 0 ? (
        <div className="user-recipe-list__empty">
          <p>Tu n’as pas encore de recettes en stock...</p>
          <DarkButton label="Ajouter une recette" href="/add-recipe" />
        </div>
      ) : (
        <div className="user-recipe-list__content">
          <TitleIcon title={title} />
          <ul className="user-recipe-list__grid">
            {limitation.map((recipe) => (
              <li key={recipe.id}>
                <Link href={`/recipes/${recipe.id}`}>
                  <OwnRecipeCard recipe={recipe} />
                </Link>
              </li>
            ))}
          </ul>

          {showButtons && (
            <div className="own-recipe-list__buttons">
              <LightButton label="Voir mes recettes" href="/profile" />
              <LightButton label="Ajouter une recette" href="/add-recipe" />
            </div>
          )}
        </div>
      )}
    </section>
  );
};
