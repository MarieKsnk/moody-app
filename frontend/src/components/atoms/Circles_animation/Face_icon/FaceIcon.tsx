import React from "react";
import { IFaceIconProps } from "./FaceIcon.props";

export const FaceIcon: React.FC<IFaceIconProps> = ({
  size = 80,
  className = "face-icon",
}) => {
  return (
    <div className={`${className} face-icon--${size}`}>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="face-icon__svg"
        aria-hidden="true"
      >
        {/* Visage */}
        <ellipse
          cx="100"
          cy="100"
          rx="35"
          ry="35"
          className="face-icon__stroke"
          fill="none"
        />

        {/* Yeux */}
        <ellipse cx="90" cy="95" rx="2" ry="2" className="face-icon__fill" />
        <ellipse cx="110" cy="95" rx="2" ry="2" className="face-icon__fill" />

        {/* Bouche */}
        <ellipse
          className="face-icon__mouth"
          cx="100"
          cy="100"
          rx="4"
          ry="4"
          fill="none"
        />
      </svg>
    </div>
  );
};
