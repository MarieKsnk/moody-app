import React from "react";
import { TitleHighlight } from "@/components/atoms/Titles/title_highlight";

export const HeroContent: React.FC = () => {
  return (
    <div className="hero-content">
      <h1 className="title-second">QU'EST CE QU'ON</h1>

      <TitleHighlight
        text="MANGE"
        className="title-highlight--bg-pink title-highlight--text-dark title-highlight--size-med"
      />

      <h1 className="title-line">CE SOIR ?</h1>
    </div>
  );
};
