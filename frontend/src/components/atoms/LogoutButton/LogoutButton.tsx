import Image from "next/image";
import clsx from "clsx";
import { ILogoutButtonProps } from "./LogoutButton.props";

export const LogoutButton: React.FC<ILogoutButtonProps> = ({
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
