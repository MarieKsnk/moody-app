// src/components/molecules/recipe_id_page/RecipeButtons.tsx
import { ActionClickButton } from "@/components/atoms/Buttons/action_click_button";
import { ActionLinkButton } from "@/components/atoms/Buttons/action_link_button";
import { IRecipeButtonsProps } from "./RecipeButtons.props";
import { DarkButton } from "@/components/atoms/Buttons/dark_button";

export const RecipeButtons: React.FC<IRecipeButtonsProps> = ({
  recipeId,
  onClick,
  userAuthor,
}) => {
  return (
    <div className="recipe-buttons">
      <DarkButton href="/all-recipes" label="Toutes les recettes" />
      {userAuthor && (
        <div className="recipe-buttons__author-buttons">
          <ActionLinkButton
            href={`/edit/${recipeId}`}
            label="Modifier ma recette"
          />

          <ActionClickButton label="Supprimer ma recette" onClick={onClick} />
        </div>
      )}
    </div>
  );
};
