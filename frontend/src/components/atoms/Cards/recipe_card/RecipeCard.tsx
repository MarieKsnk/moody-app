import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
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
      <Link href={`/recipes/${recipe.id}`}>
        <div className="recipe-card__image-container">
          <Image
            src={recipe.recipePicture}
            alt={imageAlt || `Image de la recette ${recipe.title}`}
            fill
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

        <div className="recipe-card__author">
          <span className="underline" />
          <p>{author}</p>
        </div>
      </Link>
    </div>
  );
};
