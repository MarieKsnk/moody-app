import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { IBannerInspirationDarkProps } from "./BannerIllustrationDark.props";
import { TitleHighlight } from "@/components/atoms/Titles/title_highlight";
import { LightButton } from "@/components/atoms/Buttons/light_button";

export const BannerInspirationDark = ({
  imageUrl,
  className,
}: IBannerInspirationDarkProps) => {
  return (
    <section className={clsx("banner-inspiration", className)}>
      <div className="banner-inspiration__image-container">
        <Image
          src={imageUrl}
          alt=""
          className="banner-inspiration__image"
          width={500}
          height={300}
          priority
        />
      </div>

      <div className="banner-inspiration__title-mobile">
        <TitleHighlight
          text="J'ai besoin"
          className="title-highlight--bg-pink title-highlight--text-light title-highlight--size-sm"
        />
        <TitleHighlight
          text="d'inspi"
          className="title-highlight--bg-pink title-highlight--text-light title-highlight--size-sm"
        />
        <TitleHighlight
          text="aujourd'hui"
          className="title-highlight--bg-pink title-highlight--text-light title-highlight--size-sm"
        />
      </div>

      <div className="banner-inspiration__container-desktop">
        <div className="banner-inspiration__title-desktop">
          <TitleHighlight
            text="J'ai besoin d'inspi"
            className="title-highlight--bg-pink-desktop title-highlight--text-light title-highlight--size-sm"
          />
          <TitleHighlight
            text="aujourd'hui"
            className="title-highlight--bg-pink-desktop title-highlight--text-light title-highlight--size-sm"
          />
        </div>
        <div className="banner-inspiration__button-desktop">
          <LightButton
            href="/all-recipes"
            label="Toutes les recettes"
            className="light-button--pink-border"
          />
        </div>
      </div>

      <div className="banner-inspiration__button-mobile">
        <LightButton
          href="/all-recipes"
          label="Toutes les recettes"
          className="light-button--pink-border"
        />
      </div>
    </section>
  );
};
