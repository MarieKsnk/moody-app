import { useMoods } from "@/hooks/useMoods";
import { CategorieAnchor } from "@/components/atoms/Categories/categorie_anchor";
import { kebabCase } from "@/utils/kebabCase";

export const MoodAnchorList = () => {
  const { data: moods, isLoading } = useMoods();

  if (isLoading) return <p>Chargement des filtres...</p>;
  if (!moods) return <p>Erreur de chargement</p>;

  return (
    <nav className="mood-anchor-list">
      {moods.map((mood) => {
        const anchorId = `#mood-${kebabCase(mood.name)}`;

        return (
          <CategorieAnchor key={mood.id} label={mood.name} href={anchorId} />
        );
      })}
    </nav>
  );
};
