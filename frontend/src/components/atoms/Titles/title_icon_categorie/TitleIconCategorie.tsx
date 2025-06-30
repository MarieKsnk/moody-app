import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { ITitleIconCategorieProps } from "./TitleIconCategorie.props";

export const TitleIconCategorie: React.FC<ITitleIconCategorieProps> = ({
  title,
  className,
}) => {
  return (
    <div className={clsx("title-icon", className)}>
      <Image
        src="/icons/icon-title-categorie.svg"
        alt=""
        width={32}
        height={32}
        aria-hidden="true"
      />
      <h1>{title}</h1>
    </div>
  );
};
