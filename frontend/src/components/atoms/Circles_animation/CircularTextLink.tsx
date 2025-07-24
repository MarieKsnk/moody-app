import React from "react";
import clsx from "clsx";

export interface CircularTextLinkProps {
  href?: string;
  text: string;
  variant?: "default" | "alt";
  icon?: "arrow" | "face";
}

export const CircularTextLink: React.FC<CircularTextLinkProps> = ({
  href = "#",
  text,
  variant = "default",
  icon = "arrow",
}) => {
  const isAlt = variant === "alt";

  return (
    <a href={href} className={clsx("link", isAlt && "link--alt")}>
      <svg
        viewBox="0 0 200 200"
        width="200"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
        className="link__svg"
        aria-labelledby="circle-text-title circle-text-desc"
      >
        <title id="circle-text-title">Lien vers les recettes Moody</title>
        <desc id="circle-text-desc">
          Texte circulaire animé autour d’un pictogramme central
        </desc>

        <path
          id={isAlt ? "link-circle-alt" : "link-circle"}
          className="link__path"
          d={
            isAlt
              ? "M 35, 100 a 65,65 0 1,1 130,0 a 65,65 0 1,1 -130,0"
              : "M 20, 100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
          }
          stroke="none"
          fill="none"
        />

        {icon === "arrow" && (
          <path
            className="link__arrow"
            d="M 75 100 L 125 100 L 110 85 M 125 100 L 110 115"
            fill="none"
          />
        )}

        {icon === "face" && (
          <g className="link__face">
            <path
              className="link__mouth smile"
              d="M 95 102 Q 100 107 105 102"
              fill="none"
            />
            <path
              className="link__mouth frown"
              d="M 95 102 Q 100 97 105 102"
              fill="none"
            />
            <ellipse cx="90" cy="100" rx="2" ry="2" stroke="none" />
            <ellipse cx="110" cy="100" rx="2" ry="2" stroke="none" />
            <ellipse cx="100" cy="100" rx="35" ry="35" fill="none" />
          </g>
        )}

        <text className="link__text">
        <textPath
        href={`#${isAlt ? "link-circle-alt" : "link-circle"}`}
        startOffset="0%"
        stroke="none"
        textLength="350"
        lengthAdjust="spacingAndGlyphs"
        >
        {text}
        </textPath>
        </text>
      </svg>
    </a>
  );
};
