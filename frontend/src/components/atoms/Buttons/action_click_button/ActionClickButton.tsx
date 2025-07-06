import { IActionClickButtonProps } from "./ActionClickButton.props";
import clsx from "clsx";

export const ActionClickButton: React.FC<IActionClickButtonProps> = ({
  label,
  onClick,
  className,
  ariaLabel,
  disabled = false,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx("action-button", className)}
      aria-label={ariaLabel || label}
      disabled={disabled}
    >
      <span>{label}</span>
    </button>
  );
};
