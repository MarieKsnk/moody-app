export interface IPrevButtonProps {
  onClick: () => void;
  ariaLabel: string;
  type?: "button" | "submit";
  size?: number;
  className?: string;
}
