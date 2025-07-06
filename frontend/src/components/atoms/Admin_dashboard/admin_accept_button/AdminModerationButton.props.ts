export interface IAdminModerationButtonProps {
  label: string;
  onClick: () => void;
  iconSrc: string;
  ariaLabel?: string;
  size?: number;
  className?: string;
  disabled?: boolean;
}
