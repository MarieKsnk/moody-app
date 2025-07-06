import React from "react";
import { TitleBanner } from "@/components/atoms/Titles/title_banner";
import { MoodsIllustrationsList } from "@/components/molecules/Homepage/MoodsIllustrationsList";

export const HomeMoodSection: React.FC = () => {
  return (
    <section className="home-mood-section">
      <TitleBanner
        title="Quel est mon mood du jour ?"
        iconSrc="/icons/icon-3.svg"
      />
      <MoodsIllustrationsList />
    </section>
  );
};
