import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { IMoodIllustrationProps } from "./MoodIllustration.props";
import { kebabCase } from "@/utils/kebabCase";

export const MoodIllustration: React.FC<IMoodIllustrationProps> = ({
  imgSrc,
  text,
  textUnderline,
  className,
}) => {
  const moodUrl = kebabCase(`${text} ${textUnderline}`);
  const href = `/recipes/moods/${moodUrl}`;

  return (
    <Link href={href} className={clsx("mood-illustration", className)}>
      <Image
        src={imgSrc}
        alt=""
        width={150}
        height={0}
        className="mood-illustration__image"
        aria-hidden="true"
      />
      <p className="mood-illustration__text">
        {text}
        {<br />}
        <span className="mood-illustration__text-underline">
          {textUnderline}
        </span>
      </p>
    </Link>
  );
};
