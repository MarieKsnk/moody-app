import { TitleIconCategorie } from "@/components/atoms/Titles/title_icon_categorie/TitleIconCategorie";
import { MoodAnchorList } from "@/components/molecules/Categories/mood_anchor_list/MoodAnchorList";
import { MoodsBlock } from "@/components/molecules/Categories/moods_block";
import { useMoods } from "@/hooks/useMoods";

export const MoodsRecipesSection = () => {
  const { data: moods, isLoading } = useMoods();

  if (isLoading) return <p>Chargement des catégories...</p>;
  if (!moods || moods.length === 0) return <p>Aucun mood trouvé</p>;

  return (
    <section className="moods-recipes-section">
      <div className="moods-recipes-section__title">
        <TitleIconCategorie title="Recettes par mood" />
      </div>
      <MoodAnchorList />
      <div>
        {moods.map((mood, index) => (
          <MoodsBlock
            key={mood.id}
            moodId={mood.id}
            moodName={mood.name}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};
