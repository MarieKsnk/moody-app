import { ICategorieBlockProps } from "./CategorieBlock.props";
import { RecipeCard } from "@/components/atoms/Cards/recipe_card";
import { LightButton } from "@/components/atoms/Buttons/light_button";
import { DarkButton } from "@/components/atoms/Buttons/dark_button";
import clsx from "clsx";

export default function CategorieBlock({
  title,
  recipe,
  className,
  buttonVariant = "dark",
  buttonHref,
}: ICategorieBlockProps) {
  return (
    <div className={clsx("categorie-block", className)}>
      <div className="categorie-block__title">
        <h2>{title}</h2>
        <span className="underline" />
      </div>
      <div className="categorie-block__card">
        <RecipeCard recipe={recipe} className="recipe-card--pink-border" />
      </div>
      {buttonVariant === "dark" ? (
        <DarkButton href={buttonHref} label="Voir plus" />
      ) : (
        <LightButton
          href={buttonHref}
          label="Voir plus"
          className="light-button--pink-border"
        />
      )}
    </div>
  );
}
