import { IPrevButtonProps } from "./PrevButton.props";

export const PrevButton: React.FC<IPrevButtonProps> = ({
  onClick,
  ariaLabel,
  type = "button",
}) => {
  return (
    <button type={type} onClick={onClick} aria-label={ariaLabel}>
      Précédent
    </button>
  );
};
