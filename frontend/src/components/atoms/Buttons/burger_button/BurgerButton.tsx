import Image from "next/image";
import clsx from "clsx";
import { IBurgerButtonProps } from "./BurgerButton.props";

export const BurgerButton = ({
  id,
  type = "button",
  isOpen,
  onClick,
  ariaLabel,
  className,
  ariaControls,
  ariaExpanded,
}: IBurgerButtonProps) => {
  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      className={clsx("burger-button", className)}
      aria-label={ariaLabel || (isOpen ? "Fermer le menu" : "Ouvrir le menu")}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
    >
      <Image
        src={isOpen ? "/icons/burger_close.svg" : "/icons/burger_open.svg"}
        alt={ariaLabel || (isOpen ? "Fermer le menu" : "Ouvrir le menu")}
        width={28}
        height={28}
        priority
      />
    </button>
  );
};
