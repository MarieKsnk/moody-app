import React from "react";
import Image from "next/image";
import { ITitleRecipeProps } from "./TitleRecipe.props";

export const TitleRecipe: React.FC<ITitleRecipeProps> = ({
  types,
  title,
  author,
  date,
  imageUrl,
}) => {
  return (
    <div className="title-recipe">
      <p className="title-recipe__types">{types}</p>
      <h1 className="title-recipe__title">{title}</h1>
      <span className="title-recipe__underline" />
      <p className="title-recipe__author">
        Par {author} le {new Date(date).toLocaleDateString("fr-FR")}
      </p>
      <div className="title-recipe__image-container">
        <Image
          src={imageUrl}
          alt={`Image de la recette ${title}`}
          fill
          className="title-recipe__image"
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
      </div>
    </div>
  );
};
