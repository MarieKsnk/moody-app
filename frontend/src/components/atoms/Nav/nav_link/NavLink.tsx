import Link from "next/link";
import clsx from "clsx";
import { INavLinkProps } from "./NavLink.props";

export const NavLink: React.FC<INavLinkProps> = ({
  href, 
  label, 
  className
}) => {
  return (
    <li>
      <Link href={href} className={clsx("nav-link", className)}>
        {label}
      </Link>
    </li>
  );
};
