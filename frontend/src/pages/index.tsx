import Head from "next/head";
import { AppLayout } from "@/components/layout/AppLayout";
import HeroSection from "@/components/organisms/HeroSection";
import HomeBanner from "@/components/molecules/HomeBanner";
import ProfilePreview from "@/components/molecules/ProfilePreview";
import { OwnRecipesList } from "@/components/molecules/OwnRecipesList";
import { useUserRecipes } from "@/hooks/useUserRecipes";

export default function Home() {
  const { data: recipes, isLoading, error } = useUserRecipes();

  return (
    <>
      <Head>
        <title>Accueil Moody</title>
      </Head>

      <AppLayout>
        <HeroSection />
        <HomeBanner />
        <ProfilePreview />

        <main className="home-page">
          {isLoading && <p>Chargement...</p>}
          {error && <p>Erreur lors du chargement des recettes</p>}
          {recipes && (
            <OwnRecipesList
              title="Mes dernieres recettes"
              recipes={recipes}
              showButtons={true}
              limit={3}
            />
          )}
        </main>
      </AppLayout>
    </>
  );
}
