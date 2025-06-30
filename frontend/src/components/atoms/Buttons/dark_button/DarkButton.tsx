import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { IDarkButtonProps } from "./DarkButton.props";

export const DarkButton: React.FC<IDarkButtonProps> = ({
  label,
  href,
  ariaLabel,
  size = 40,
  className,
}) => {
  return (
    <Link
      href={href}
      className={clsx("dark-button", className)}
      aria-label={ariaLabel || label}
    >
      <span className="dark-button__label">{label}</span>
      <Image
        src="/icons/pink-arrow-right.svg"
        alt=""
        width={size}
        height={size}
        className="dark-button__icon"
        aria-hidden="true"
      />
    </Link>
  );
};
