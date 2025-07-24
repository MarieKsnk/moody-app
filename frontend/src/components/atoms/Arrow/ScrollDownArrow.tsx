import React, { useRef } from "react";
import Image from "next/image";
import { IScrollDownArrowProps } from "./ScrollDownArrow.props";

export const ScrollDownArrow: React.FC<IScrollDownArrowProps> = ({ scrollPosition }) => {
  const circleRef = useRef<HTMLDivElement>(null);

  const startFade = 200;
  const endFade = 1500;

  const progress =
    scrollPosition < startFade
      ? 0
      : Math.min((scrollPosition - startFade) / (endFade - startFade), 1);

  const scale = 1 - progress * 0.7;
  const opacity = 1 - progress;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const offsetX = ((e.clientX - left) - width / 2) / 10;
    const offsetY = ((e.clientY - top) - height / 2) / 10;

    if (circleRef.current) {
      circleRef.current.style.transform = `translate(${-offsetX}px, ${-offsetY}px) scale(${scale + 0.2})`;
      circleRef.current.style.opacity = `${opacity}`;
    }
  };

  const handleMouseLeave = () => {
    if (circleRef.current) {
      circleRef.current.style.transform = `translate(0, 0) scale(${scale})`;
      circleRef.current.style.opacity = `${opacity}`;
    }
  };

  return (
    <div className="scroll-arrow">
      <div className="scroll-arrow__bounce">
        <div
          className="scroll-arrow__circle"
          ref={circleRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ transform: `scale(${scale})`, opacity }}
        >
          <Image
            src="/icons/arrow-down.svg"
            alt="Flèche vers le bas"
            className="scroll-arrow__icon"
            width={35}
            height={35}
          />
        </div>
      </div>
    </div>
  );
};
