import React from "react";
import Image from "next/image";
import { IPrepRecipeProps } from "./PrepRecipe.props";

export const PrepRecipe: React.FC<IPrepRecipeProps> = ({ duration }) => {
  return (
    <div className="prep-recipe">
      <Image
        src="/icons/preparation-time.svg"
        alt=""
        width={30}
        height={30}
        aria-hidden="true"
        className="prep-recipe__icon"
      />
      <p className="prep-recipe__text">
        <strong>PRÉPARATION : </strong>
        {duration} min
      </p>
    </div>
  );
};
