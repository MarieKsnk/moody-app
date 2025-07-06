import Head from "next/head";
import { AppLayout } from "@/components/layout/AppLayout";
import { HeroSection } from "@/components/organisms/Homepage/HeroSection";
import { HomeMainSection } from "@/components/organisms/Homepage/HomeMainSection";
import { LatestRecipes } from "@/components/molecules/Homepage/LatestRecipes";
import { HomeMoodSection } from "@/components/organisms/Homepage/HomeMoodSection";
import { BannerInspirationDark } from "@/components/molecules/Banners/banner_inspiration_dark";

export default function Home() {
  return (
    <>
      <Head>
        <title>Accueil Moody</title>
      </Head>

      <AppLayout>
        <HeroSection />
        <HomeMainSection />
        <BannerInspirationDark imageUrl="/img/illustration-banniere-inspiration.png" />
        <LatestRecipes />
        <HomeMoodSection />
      </AppLayout>
    </>
  );
}
