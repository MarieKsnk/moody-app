import React from "react";
import { IIngredientsListProps } from "./IngredientsList.props";

export const IngredientsList: React.FC<IIngredientsListProps> = ({
  ingredients,
}) => {
  return (
    <div className="ingredients-list">
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>
            <strong>{item.ingredient.name} :</strong> {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};
