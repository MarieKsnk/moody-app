import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { ILightButtonProps } from "./LightButton.props";

export const LightButton: React.FC<ILightButtonProps> = ({
  label,
  href,
  ariaLabel,
  size = 30,
  className,
}) => {
  return (
    <Link
      href={href}
      className={clsx("light-button", className)}
      aria-label={ariaLabel || label}
    >
      <span className="light-button__label">{label}</span>
      <Image
        src="/icons/pink-arrow-right.svg"
        alt=""
        width={size}
        height={size}
        className="light-button__icon"
        aria-hidden="true"
      />
    </Link>
  );
};
