import React, { useEffect, useState } from "react";
import { DesktopHomeNav } from "@/components/molecules/Nav/DesktopHomeNav";
import HeroContent from "@/components/molecules/Homepage/HeroContent";
import { CustomCursor } from "@/components/atoms/Cursor/CustomCursor";
import { ScrollDownArrow } from "@/components/atoms/Arrow/ScrollDownArrow";
import { CircularTextLink } from "@/components/atoms/Circles_animation/CircularTextLink";
import { FaceIcon } from "@/components/atoms/Circles_animation/Face_icon/FaceIcon";
import { FaceIcon2 } from "@/components/atoms/Circles_animation/Face_icon/FaceIcon2";

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
      <CustomCursor />

      <svg className="wave-top-left" viewBox="0 0 300 600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0,300 Q70,220 140,260 Q210,300 300,180" />
      </svg>

      <svg className="wave-bottom-right" viewBox="0 0 300 600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0,600 Q60,550 100,580 Q160,610 200,500 Q240,400 300,420" />
      </svg>

      <FaceIcon className="face-icon face-icon--pink" size={130} />

      <FaceIcon2 className="face-icon2 face-icon2--pink" size={140} />


      <CircularTextLink
        text="Qu'est  ce  qu'on  mange  ce  soir ?"
        href="/recipes"
        variant="alt"
        icon="face"
      />
      <DesktopHomeNav />
      <HeroContent scrollPosition={scrollPosition} />
      <div className="scroll-arrow-container">
          <ScrollDownArrow scrollPosition={scrollPosition}/>
      </div>
    </div>
  );
};

export default HeroNav;
 //   •   