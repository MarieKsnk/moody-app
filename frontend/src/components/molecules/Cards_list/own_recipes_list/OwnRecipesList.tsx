import clsx from "clsx";
import { IOwnRecipeListProps } from "./OwnRecipesList.props";
import { OwnRecipeCard } from "@/components/atoms/Cards/own_recipe_card/OwnRecipeCard";
import { LightButton } from "../../../atoms/Buttons/light_button";
import { TitleIcon } from "../../../atoms/Titles/titleIcon";

export const OwnRecipesList = ({
  title,
  recipes,
  showButtons = false,
  limit,
  id,
  className,
}: IOwnRecipeListProps) => {
  const limitation = limit ? [...recipes].slice(0, limit) : recipes;
  return (
    <div
      className={clsx(
        "own-recipe-list",
        {
          "own-recipe-list--empty": limitation.length === 0,
        },
        className
      )}
      id={id}
    >
      {limitation.length === 0 ? (
        <div className="own-recipe-list__empty">
          <p>Tu n’as pas encore de recettes en stock...</p>
          <LightButton
            label="Ajouter une recette"
            href="/add-recipe"
            className="light-button--dark-border"
          />
        </div>
      ) : (
        <div className="own-recipe-list__content">
          <TitleIcon title={title} />
          <ul className="own-recipe-list__grid">
            {limitation.map((recipe) => (
              <li key={recipe.id}>
                <OwnRecipeCard
                  recipe={recipe}
                  className="recipe-card--dark-border"
                />
              </li>
            ))}
          </ul>

          {showButtons && (
            <div className="own-recipe-list__buttons">
              <LightButton
                label="Voir mes recettes"
                href="/profile"
                className="light-button--dark-border"
              />
              <LightButton
                label="Ajouter une recette"
                href="/add-recipe"
                className="light-button--dark-border"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
