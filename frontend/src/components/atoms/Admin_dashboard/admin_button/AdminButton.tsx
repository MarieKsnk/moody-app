import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { IAdminButtonProps } from "./AdminButton.props";

export const AdminButton: React.FC<IAdminButtonProps> = ({
  label,
  href,
  ariaLabel,
  size = 30,
  className,
}) => {
  return (
    <Link
      href={href}
      className={clsx("admin-button", className)}
      aria-label={ariaLabel || label}
    >
      <span className="admin-button__label">{label}</span>
      <Image
        src="/icons/pink-arrow-right.svg"
        alt=""
        width={size}
        height={size}
        className="admin-button__icon"
        aria-hidden="true"
      />
    </Link>
  );
};
