import React from "react";
import { MoodIllustration } from "@/components/atoms/Titles/mood_illustration/MoodIllustration";

export const MoodsIllustrationsList = () => {
  return (
    <div className="mood-illustration-list">
      <MoodIllustration
        imgSrc="/img/illustration-mood-jai-pas-le-temps.png"
        text="J'ai"
        textUnderline="pas le temps"
      />
      <MoodIllustration
        imgSrc="/img/illustration-mood-jai-la-flemme.png"
        text="J'ai la"
        textUnderline="flemme"
      />
      <MoodIllustration
        imgSrc="/img/illustration-mood-jai-la-dalle.png"
        text="J'ai la"
        textUnderline="dalle"
      />
      <MoodIllustration
        imgSrc="/img/illustration-mood-jai-envie-de-voyager.png"
        text="J'ai envie de"
        textUnderline="voyager"
      />
      <MoodIllustration
        imgSrc="/img/illustration-mood-je-suis-healthy.png"
        text="Je suis"
        textUnderline="healthy"
      />
      <MoodIllustration
        imgSrc="/img/illustration-mood-je-veux-flexer.png"
        text="Je veux"
        textUnderline="flexer"
      />
      <MoodIllustration
        imgSrc="/img/illustration-mood-jai-plus-de-thne.png"
        text="J'ai"
        textUnderline="plus de thune"
      />
      <MoodIllustration
        imgSrc="/img/illustration-mood-jai-envie-de-douceur.png"
        text="J'ai envie de"
        textUnderline="douceur"
      />
    </div>
  );
};
