import { ITagIngredientProps } from "./TagIngredient.props";
import { RemoveButton } from "../../Buttons/remove_button";
import clsx from "clsx";

export const TagIngredient: React.FC<ITagIngredientProps> = ({
  label,
  quantity,
  onRemove,
  className,
}) => {
  return (
    <span className={clsx("item-tag", className)}>
      <span className="item-tag__text">
        {label} : {quantity}
      </span>
      <RemoveButton onClick={onRemove} ariaLabel={`Supprimer ${label}`} />
    </span>
  );
};
