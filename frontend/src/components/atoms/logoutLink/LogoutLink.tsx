import clsx from "clsx";
import { ILogoutLinkProps } from "./LogoutLink.props";

export const LogoutLink: React.FC<ILogoutLinkProps> = ({
  label,
  onClick,
  ariaLabel,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx("logout-link", className)}
      aria-label={ariaLabel || label}
    >
      {label}
    </button>
  );
};
