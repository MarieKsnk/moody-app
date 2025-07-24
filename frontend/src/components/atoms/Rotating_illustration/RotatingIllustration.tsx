// src/components/atoms/RotatingIllustration/RotatingIllustration.tsx
import React from "react";
import clsx from "clsx";
import { IRotatingIllustrationProps } from "./RotatingIllustration.props";

export const RotatingIllustration: React.FC<IRotatingIllustrationProps> = ({
  text,
  size = 300,
  speed = 15,
  iconFilename,
  iconAriaLabel = "Icône décorative",
  className,
}) => {
  const letters = text.split("");
  const radius = size / 2;
  const iconSize = size * 0.15;

  return (
    <div className={clsx("rotating-wrapper", className)}>
      <div
        className="rotating-container"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <div
          className="rotating-circle"
          style={{ animationDuration: `${speed}s` }}
        >
          {letters.map((letter, i) => (
            <span
              key={i}
              className="rotating-letter"
              style={{
                transform: `rotate(${(360 / letters.length) * i}deg)`,
                transformOrigin: `center ${radius}px`,
              }}
            >
              {letter}
            </span>
          ))}
        </div>


        <div
          className="rotating-icon"
          role="img"
          aria-label={iconAriaLabel}
          style={{
            width: `${iconSize}px`,
            height: `${iconSize}px`,
          }}
        >
          <img src={`/icons/${iconFilename}`} alt="" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
};
