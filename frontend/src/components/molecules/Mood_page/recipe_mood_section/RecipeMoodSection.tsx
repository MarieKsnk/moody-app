import { TitleIcon } from "@/components/atoms/Titles/titleIcon";
import { RecipeCard } from "@/components/atoms/Cards/recipe_card";
import { IRecipeMoodSectionProps } from "./RecipeMoodSection.props";
import { DarkButton } from "@/components/atoms/Buttons/dark_button";

export const RecipeMoodPage = ({
  title,
  recipes,
  borderColor = "dark",
}: IRecipeMoodSectionProps) => {
  return (
    <section className="recipe-mood-page">
      <TitleIcon title={title} />

      {recipes.length === 0 ? (
        <p>Aucune recette pour ce mood.</p>
      ) : (
        <ul className="recipe-mood-page__grid">
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <RecipeCard
                recipe={recipe}
                className={`recipe-card--${borderColor}-border`}
              />
            </li>
          ))}
        </ul>
      )}
      <DarkButton href="/recipes/moods" label="Revenir aux moods" />
    </section>
  );
};
