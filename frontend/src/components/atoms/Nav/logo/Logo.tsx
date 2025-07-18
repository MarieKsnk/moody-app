import Image from "next/image";
import Link from "next/link";
import { ILogoProps } from "./Logo.props";

export const Logo = ({
  href = "/",
  alt = "Logo Moody",
  width,
  height,
  className = "",
  ariaLabel,
}: ILogoProps) => {
  return (
    <Link href={href} aria-label={ariaLabel} className={`logo-link ${className}`}>
      <Image
        src="/assets/logo_moody.svg"
        alt={alt}
        width={width}
        height={height}
        priority
      />
    </Link>
  );
};
