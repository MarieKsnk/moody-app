export interface IMainButtonProps {
    className: string;
    icon: string;
    label: string;
    onClick: () => void;
    ariaLabel: string;
    type?: "button" | "submit" | "reset";
  }