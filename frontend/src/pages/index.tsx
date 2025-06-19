import Head from "next/head";
import AppLayout from "@/components/layout/AppLayout";
import HeroSection from "@/components/organisms/HeroSection";
import HomeBanner from "@/components/molecules/HomeBanner";
import ProfilePreview from "@/components/molecules/ProfilePreview";

export default function Home() {
  return (
    <>
      <Head>
        <title>Accueil Moody</title>
      </Head>

      <AppLayout>
        <HeroSection />
        <HomeBanner />
        <ProfilePreview />
      </AppLayout>
    </>
  );
}
