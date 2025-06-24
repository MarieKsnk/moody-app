import React from "react";
import Image from "next/image";
import { ICookRecipeProps } from "./CookRecipe.props";

export const CookRecipe: React.FC<ICookRecipeProps> = ({ duration }) => {
  return (
    <div className="cook-recipe-icon">
      <Image
        src="/icons/cook-time.svg"
        alt=""
        width={30}
        height={30}
        aria-hidden="true"
      />
      <p>
        <strong>CUISSON : </strong>
        {duration} min
      </p>
    </div>
  );
};
