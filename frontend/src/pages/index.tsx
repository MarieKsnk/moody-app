import Head from "next/head";
import HeroNav from "@/components/organisms/Homepage/HeroNav";
import { useScrollSnapping } from "@/hooks/gsap/useScrollSnapping";
import { BannerLastRecipe } from "@/components/molecules/Banners/BannerLastRecipe";

export default function Home() {
  useScrollSnapping(".snap-section");
  return (
    <>
      <Head>
        <title>Accueil Moody</title>
      </Head>

      <section className="snap-section" id="hero">
        <HeroNav /> 
      </section>

      <section className="snap-section" id="banner-last-recipe">
        <BannerLastRecipe />
      </section>
    </>
  );
}
