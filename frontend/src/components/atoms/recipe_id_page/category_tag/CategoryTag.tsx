import React from "react";
import { ICategoryTagProps } from "./CategoryTag.props";

export const CategoryTag: React.FC<ICategoryTagProps> = ({ items }) => {
  return (
    <div className="category-tag">
      {items.map((item) => (
        <span key={item} className="category-tag__item">
          {item}
        </span>
      ))}
    </div>
  );
};
