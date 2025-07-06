import Image from "next/image";
import clsx from "clsx";
import { IAdminModerationButtonProps } from "./AdminModerationButton.props";

export const AdminModerationButton: React.FC<IAdminModerationButtonProps> = ({
  label,
  ariaLabel,
  size = 25,
  className,
  onClick,
  disabled,
  iconSrc,
}) => {
  return (
    <button
      type="button"
      className={clsx("admin-button", className)}
      aria-label={ariaLabel || label}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="admin-button__label">{label}</span>
      <Image
        src={iconSrc}
        alt=""
        width={size}
        height={size}
        className="admin-button__icon"
        aria-hidden="true"
      />
    </button>
  );
};
