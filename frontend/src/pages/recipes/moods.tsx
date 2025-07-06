import { useMoods } from "@/hooks/useMoods";
import { AppLayout } from "@/components/layout/AppLayout";
import { MoodsRecipesSection } from "@/components/organisms/Categories/moods_recipes_section/MoodsRecipesSection";

export default function MoodsPage() {
  const { data: moods, isLoading } = useMoods();

  if (isLoading) return <p>Chargement des moods...</p>;
  if (!moods || moods.length === 0) return <p>Aucun mood trouvé.</p>;

  return (
    <AppLayout>
      <MoodsRecipesSection />
    </AppLayout>
  );
}
