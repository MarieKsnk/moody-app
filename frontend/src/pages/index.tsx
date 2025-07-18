import Head from "next/head";
import { HomeMainSection } from "@/components/organisms/Homepage/HomeMainSection";
import { LatestRecipes } from "@/components/molecules/Homepage/LatestRecipes";
import { HomeMoodSection } from "@/components/organisms/Homepage/HomeMoodSection";
import { BannerInspirationDark } from "@/components/molecules/Banners/banner_inspiration_dark";
import HeroNav from "@/components/organisms/Homepage/HeroNav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Accueil Moody</title>
      </Head>
      <HeroNav />
        <HomeMainSection />
        <BannerInspirationDark imageUrl="/img/illustration-banniere-inspiration.png" />
        <LatestRecipes />
        <HomeMoodSection />
    </>
  );
}
