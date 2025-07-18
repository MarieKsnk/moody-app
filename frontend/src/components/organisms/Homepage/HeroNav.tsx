// components/organisms/HeroNav/HeroNav.tsx
import React, { useEffect, useState } from "react";
import { DesktopNav } from "@/components/molecules/Nav/DesktopNav";
import HeroContent from "@/components/molecules/Homepage/HeroContent";

const HeroNav: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);

      if (position > 50) {
        document.body.classList.add("scrolled-logo");
      } else {
        document.body.classList.remove("scrolled-logo");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hero-nav">
      <DesktopNav />
      <HeroContent scrollPosition={scrollPosition} />
    </div>
  );
};

export default HeroNav;
