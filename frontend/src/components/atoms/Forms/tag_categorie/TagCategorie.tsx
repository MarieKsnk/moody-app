import { ITagCategorieProps } from "./TagCategorie.props";
import { RemoveButton } from "../Buttons/RemoveButton";
import clsx from "clsx";

export const TagCategorie: React.FC<ITagCategorieProps> = ({
  label,
  onRemove,
  className,
}) => {
  return (
    <span className={clsx("item-tag", className)}>
      <span className="item-tag__text">{label}</span>
      <RemoveButton onClick={onRemove} ariaLabel={`Supprimer ${label}`} />
    </span>
  );
};
