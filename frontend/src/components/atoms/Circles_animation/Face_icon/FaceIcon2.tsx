import React from "react";
import { IFaceIconProps } from "./FaceIcon.props";

export const FaceIcon2: React.FC<IFaceIconProps> = ({
  size = 80,
  className = "face-icon2",
}) => {
  return (
    <div className={`${className} face-icon2--${size}`}>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="face-icon2__svg"
        aria-hidden="true"
      >
        {/* Visage */}
        <circle
          cx="100"
          cy="100"
          r="35"
          className="face-icon2__stroke"
          fill="none"
        />

        {/* Yeux */}
        <circle cx="90" cy="90" r="2" className="face-icon2__fill" />
        <circle cx="110" cy="90" r="2" className="face-icon2__fill" />

        {/* Bouche */}
        <path
          className="face-icon2__mouth mouth2--smile"
          d="M92,98 H108 A10,40 0 0 1 100,98 Z"
          fill="none"
        />

        {/* Bouche hover */}
        <path
          className="face-icon2__mouth mouth2--frown"
          d="M92,102 H108 A8,12 0 0 0 92,102 Z"
          fill="none"
        />
      </svg>
    </div>
  );
};
