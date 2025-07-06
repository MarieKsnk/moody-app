import clsx from "clsx";
import Link from "next/link";
import { IActionLinkButtonProps } from "./ActionLinkButton.props";

export const ActionLinkButton: React.FC<IActionLinkButtonProps> = ({
  label,
  href,
  className,
  ariaLabel,
}) => {
  return (
    <Link
      href={href}
      className={clsx("action-button", className)}
      aria-label={ariaLabel || label}
    >
      <span>{label}</span>
    </Link>
  );
};
