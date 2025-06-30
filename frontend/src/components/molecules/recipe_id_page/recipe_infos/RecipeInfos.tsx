import React from "react";
import { IRecipeInfosProps } from "./RecipeInfos.props";
import { PrepRecipe } from "@/components/atoms/Recipe_id_page/prep_recipe";
import { CookRecipe } from "@/components/atoms/Recipe_id_page/cook_recipe";
import { ServeRecipe } from "@/components/atoms/Recipe_id_page/serve_recipe";

export const RecipeInfos: React.FC<IRecipeInfosProps> = ({
  prepTime,
  cookTime,
  serve,
}) => {
  return (
    <div className="recipe-infos">
      <PrepRecipe duration={prepTime} />
      <CookRecipe duration={cookTime} />
      <ServeRecipe number={serve} />
    </div>
  );
};
