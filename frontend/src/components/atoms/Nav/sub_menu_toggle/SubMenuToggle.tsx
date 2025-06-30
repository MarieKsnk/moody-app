import { ChevronDown, ChevronUp } from "lucide-react";
import { ISubMenuToggleProps } from "./SubMenuToggle.props";
import clsx from "clsx";

export const SubMenuToggle = ({
  label,
  isOpen,
  onClick,
  id,
  className,
}: ISubMenuToggleProps) => {
  return (
    <button
      type="button"
      className={clsx("submenu-toggle", className)}
      onClick={onClick}
      aria-expanded={isOpen}
      aria-controls={id}
    >
      <span className="submenu-toggle__label">{label}</span>
      {isOpen ? (
        <ChevronUp
          size={30}
          aria-hidden="true"
          className="submenu-toggle__icon"
        />
      ) : (
        <ChevronDown
          size={30}
          aria-hidden="true"
          className="submenu-toggle__icon"
        />
      )}
    </button>
  );
};
