import React from "react";
import Image from "next/image";
import { IServeRecipeProps } from "./ServeRecipe.props";

export const ServeRecipe: React.FC<IServeRecipeProps> = ({ number }) => {
  return (
    <div className="serve-recipe">
      <Image
        src="/icons/nb-serve.svg"
        alt=""
        width={30}
        height={30}
        aria-hidden="true"
        className="serve-recipe__icon"
      />
      <p className="serve-recipe__text">
        <strong>RECETTE POUR : </strong>
        {number} personnes
      </p>
    </div>
  );
};
