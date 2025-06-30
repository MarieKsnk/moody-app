import { IActionClickButtonProps } from "./ActionClickButton.props";
import clsx from "clsx";

export const ActionClickButton: React.FC<IActionClickButtonProps> = ({
  label,
  onClick,
  className,
  ariaLabel,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx("action-button", className)}
      aria-label={ariaLabel || label}
    >
      <span>{label}</span>
    </button>
  );
};
