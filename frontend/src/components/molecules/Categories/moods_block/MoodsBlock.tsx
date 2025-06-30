import { useRecipesByMood } from "@/hooks/useRecipesByMood";
import CategorieBlock from "@/components/atoms/Categories/categorie_block/CategorieBlock";
import { IMoodsBlockProps } from "./MoodsBlock.props";
import { kebabCase } from "@/utils/kebabCase";

export const MoodsBlock = ({ moodId, moodName, index }: IMoodsBlockProps) => {
  if (!moodId) return null;

  const moodUrl = kebabCase(moodName);
  const anchorId = `mood-${moodUrl}`;
  const buttonHref = `/recipes/moods/${moodUrl}`;

  const { data: recipes, isLoading } = useRecipesByMood(moodId);

  if (isLoading) return <p>Chargement de {moodName}...</p>;
  if (!recipes || recipes.length === 0) return <p>0 recette pour {moodName}</p>;

  const latestRecipe = recipes[0];
  const isDark = index % 2 === 0;

  return (
    <section id={anchorId}>
      <CategorieBlock
        title={moodName}
        recipe={latestRecipe}
        className={isDark ? "categorie-block--dark" : "categorie-block--light"}
        buttonVariant={isDark ? "light" : "dark"}
        buttonHref={buttonHref}
      />
    </section>
  );
};
