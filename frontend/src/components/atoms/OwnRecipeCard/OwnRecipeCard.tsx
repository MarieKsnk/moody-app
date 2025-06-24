import Image from "next/image";
import clsx from "clsx";
import { IOwnRecipeCardProps } from "./OwnRecipeCard.props";

export const OwnRecipeCard = ({
  recipe,
  imageClassName,
  imageWidth = 200,
  imageHeight = 150,
  imageAlt,
}: IOwnRecipeCardProps) => {
  return (
    <li className="own-recipe-card">
      <div className={clsx("own-recipe-card__image-container", imageClassName)}>
        <Image
          src={recipe.recipePicture}
          alt={imageAlt || `Image de la recette ${recipe.title}`}
          width={imageWidth}
          height={imageHeight}
          className="own-recipe-card__image"
          style={{ objectFit: "cover", width: "100%", height: "auto" }}
        />
      </div>

      <div className="own-recipe-card__types">
        {recipe.types.map((t) => (
          <p key={t.type.id}>{t.type.name}</p>
        ))}
      </div>

      <div className="own-recipe-card__title">
        <h2>{recipe.title}</h2>
      </div>
    </li>
  );
};
