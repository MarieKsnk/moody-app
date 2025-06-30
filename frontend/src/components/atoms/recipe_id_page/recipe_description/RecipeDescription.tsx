import React from "react";
import { IRecipeDescriptionProps } from "./RecipeDescription.props";

export const RecipeDescription: React.FC<IRecipeDescriptionProps> = ({
  description,
  recipeUrl,
}) => {
  return (
    <div className="recipe-description">
      <p className="recipe-description__text">{description}</p>
      {recipeUrl && (
        <a
          href={recipeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="recipe-description__link"
        >
          Lien de la recette originale
        </a>
      )}
    </div>
  );
};
