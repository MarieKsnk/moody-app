import Link from "next/link";
import clsx from "clsx";
import { INavLinkProps } from "./NavLink.props";

export default function NavLink({ href, label, className }: INavLinkProps) {
  return (
    <li>
      <Link href={href} className={clsx("nav-link", className)}>
        {label}
      </Link>
    </li>
  );
}
