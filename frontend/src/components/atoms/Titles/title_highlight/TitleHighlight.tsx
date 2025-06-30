import React from "react";
import clsx from "clsx";
import { ITitleHighlightProps } from "./TitleHighlight.props";

export const TitleHighlight = ({ text, className }: ITitleHighlightProps) => {
  return (
    <div className={clsx("title-highlight", className)}>
      <span className="title-highlight__bg" aria-hidden="true" />
      <h1 className="title-highlight__text">{text}</h1>
    </div>
  );
};
