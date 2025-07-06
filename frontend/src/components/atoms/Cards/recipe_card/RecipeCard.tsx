import Image from "next/image";
import clsx from "clsx";
import { IRecipeCardProps } from "./RecipeCard.props";

export const RecipeCard = ({
  recipe,
  imageAlt,
  className,
}: IRecipeCardProps) => {
  const author =
    recipe.user?.firstName && recipe.user?.lastName
      ? `Par ${recipe.user.firstName} ${recipe.user.lastName[0]}.`
      : "";

  return (
    <div className={clsx("recipe-card", className)}>
      <div className="recipe-card__image-container">
        <Image
          src={recipe.recipePicture}
          alt={imageAlt || `Image de la recette ${recipe.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

      <div className="recipe-card__content">
        <div className="recipe-card__title">
          <h2>{recipe.title}</h2>
        </div>

        <div className="recipe-card__author">
          <span className="underline" />
          <p>{author}</p>
        </div>
      </div>
    </div>
  );
};
