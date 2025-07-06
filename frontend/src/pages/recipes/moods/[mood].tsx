import { GetStaticPaths, GetStaticProps } from "next";
import { AppLayout } from "@/components/layout/AppLayout";
import { RecipeMoodPage } from "@/components/molecules/Mood_page/recipe_mood_section";
import { MoodData, MoodPageProps } from "@/types/CategoriesData";
import { kebabCase } from "@/utils/kebabCase";
import { fetchMoods } from "@/api/moodsAPI";
import { fetchRecipesByMood } from "@/api/recipesByMoodAPI";

export const getStaticPaths: GetStaticPaths = async () => {
  const moods: MoodData[] = await fetchMoods();

  const paths = moods.map((mood) => ({
    params: { mood: kebabCase(mood.name) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.mood as string;

  const moods = await fetchMoods();
  const mood = moods.find((m) => kebabCase(m.name) === slug);

  if (!mood) return { notFound: true };

  const recipes = await fetchRecipesByMood(mood.id);

  return {
    props: {
      mood,
      recipes,
    },
  };
};

export const MoodPage = ({ mood, recipes }: MoodPageProps) => {
  return (
    <AppLayout>
      <RecipeMoodPage title={mood.name} recipes={recipes} borderColor="dark" />
    </AppLayout>
  );
};

export default MoodPage;
