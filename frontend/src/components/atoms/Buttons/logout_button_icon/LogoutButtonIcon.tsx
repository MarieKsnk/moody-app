import Image from "next/image";
import clsx from "clsx";
import { ILogoutButtonIconProps } from "./LogoutButtonIcon.props";

export const LogoutButtonIcon: React.FC<ILogoutButtonIconProps> = ({
  label,
  onClick,
  className,
  ariaLabel,
}) => {
  return (
    <li>
      <button
        onClick={onClick}
        className={clsx("logout-button", className)}
        aria-label={ariaLabel || label}
      >
        <Image
          src="/icons/logout.svg"
          alt=""
          width={30}
          height={30}
          aria-hidden="true"
        />
        <span>{label}</span>
      </button>
    </li>
  );
};
