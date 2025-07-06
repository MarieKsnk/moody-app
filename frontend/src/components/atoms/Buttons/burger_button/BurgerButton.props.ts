import { MouseEventHandler } from "react";

export interface IBurgerButtonProps {
  id: string;
  type: "button" | "submit" | "reset";
  isOpen: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  ariaLabel?: string;
  className?: string;
  ariaControls?: string;
  ariaExpanded?: boolean;
}
