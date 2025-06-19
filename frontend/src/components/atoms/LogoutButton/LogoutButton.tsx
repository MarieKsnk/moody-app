import Image from "next/image";
import clsx from "clsx";
import { ILogoutButtonProps } from "./LogoutButton.props";

export const LogoutButton: React.FC<ILogoutButtonProps> = ({
  label,
  onClick,
  disabled,
  className,
}) => {
  return (
    <li>
      <button
        onClick={onClick}
        disabled={disabled}
        className={clsx("logout-button", className)}
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
