import { useRecipesByMood } from "@/hooks/useRecipesByMood";
import CategorieBlock from "@/components/atoms/Categories/categorie_block/CategorieBlock";
import { IMoodsBlockProps } from "./MoodsBlock.props";
import { kebabCase } from "@/utils/kebabCase";
import { useLimitRecipe } from "@/hooks/useLimitRecipe";

export const MoodsBlock = ({ moodId, moodName, index }: IMoodsBlockProps) => {
  if (!moodId) return null;

  const moodUrl = kebabCase(moodName);
  const anchorId = `mood-${moodUrl}`;
  const buttonHref = `/recipes/moods/${moodUrl}`;
  const { data: recipes, isLoading } = useRecipesByMood(moodId);

  const limit = useLimitRecipe(1, 3, 1024);

  if (isLoading) return <p>Chargement de {moodName}...</p>;
  if (!recipes || recipes.length === 0) return <p>0 recette pour {moodName}</p>;

  const limitedRecipes = recipes ? recipes.slice(0, limit) : [];

  const isDark = index % 2 === 0;

  return (
    <section id={anchorId}>
      <CategorieBlock
        title={moodName}
        recipes={limitedRecipes}
        className={isDark ? "categorie-block--dark" : "categorie-block--light"}
        buttonVariant={isDark ? "light" : "dark"}
        buttonHref={buttonHref}
      />
    </section>
  );
};
