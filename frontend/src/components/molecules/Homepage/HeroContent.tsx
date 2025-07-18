// components/organisms/HeroNav/HeroContent/HeroContent.tsx
import React from "react";
import clsx from "clsx";
import { Logo } from "@/components/atoms/Nav/logo";

interface HeroContentProps {
  scrollPosition: number;
}

const HeroContent: React.FC<HeroContentProps> = ({ scrollPosition }) => {
  const isScrolled = scrollPosition > 50;

  return (
    <div className="hero-content">
      <Logo
        href="/"
        alt="Logo Moody"
        width={400}
        height={100}
        className={clsx("hero-content__logo", { "hero-content__logo--scrolled": isScrolled })}
      />
    </div>
  );
};

export default HeroContent;
