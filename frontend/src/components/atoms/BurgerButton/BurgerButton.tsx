import Image from "next/image";
import clsx from "clsx";
import { IBurgerButtonProps } from "./BurgerButton.props";

export default function BurgerButton({
  id,
  type,
  isOpen,
  onClick,
  ariaLabel,
  className,
}: IBurgerButtonProps) {
  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      className={clsx("burger-button", className)}
      aria-label={ariaLabel || (isOpen ? "Fermer le menu" : "Ouvrir le menu")}
      aria-expanded={isOpen}
      aria-controls="main-navigation"
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
}
