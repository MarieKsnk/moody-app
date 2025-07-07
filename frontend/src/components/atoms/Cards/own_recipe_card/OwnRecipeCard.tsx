import Image from "next/image";
import clsx from "clsx";
import { IOwnRecipeCardProps } from "./OwnRecipeCard.props";

export const OwnRecipeCard = ({
  recipe,
  imageAlt,
  className,
}: IOwnRecipeCardProps) => {
  return (
    <div className={clsx("recipe-card", className)}>
      <div className="recipe-card__image-container">
        <Image
          src={recipe.recipePicture}
          alt={imageAlt || `Image de la recette ${recipe.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={60}
          className="recipe-card__image"
        />
      </div>

      {Array.isArray(recipe.types) && (
        <div className="recipe-card__types">
          {recipe.types.map((t) => (
            <p key={t.type.id}>{t.type.name}</p>
          ))}
        </div>
      )}

      <div className="recipe-card__title">
        <h2>{recipe.title}</h2>
      </div>
    </div>
  );
};
