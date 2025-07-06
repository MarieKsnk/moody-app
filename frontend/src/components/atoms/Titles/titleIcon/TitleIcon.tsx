import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { ITitleIconProps } from "./TitleIcon.props";

export const TitleIcon: React.FC<ITitleIconProps> = ({ title, className }) => {
  return (
    <div className={clsx("title-icon", className)}>
      <Image
        src="/icons/icon-sun.svg"
        alt=""
        width={32}
        height={32}
        aria-hidden="true"
      />
      <h1>{title}</h1>
      <span className="title-icon__underline" />
    </div>
  );
};
