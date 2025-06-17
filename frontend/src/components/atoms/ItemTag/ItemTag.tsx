import { IItemTagProps } from "./ItemTag.props";
import { RemoveButton } from "../Buttons/RemoveButton";

export const ItemTag: React.FC<IItemTagProps> = ({
  label,
  quantity,
  onRemove,
}) => {
  return (
    <span>
      {label} : {quantity}
      <RemoveButton onClick={onRemove} ariaLabel={`Supprimer ${label}`} />
    </span>
  );
};
