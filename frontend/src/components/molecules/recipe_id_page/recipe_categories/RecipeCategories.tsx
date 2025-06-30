import React from "react";
import { IRecipeCategoriesProps } from "./RecipeCategories.props";
import { CategoryTag } from "@/components/atoms/Recipe_id_page/category_tag";

export const RecipeCategories: React.FC<IRecipeCategoriesProps> = ({
  moods,
  diets,
  origins,
}) => {
  return (
    <div className="recipe-categories">
      <CategoryTag items={moods} />
      <CategoryTag items={diets} />
      <CategoryTag items={origins} />
    </div>
  );
};
