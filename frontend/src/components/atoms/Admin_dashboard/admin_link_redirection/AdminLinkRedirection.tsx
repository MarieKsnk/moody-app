import Link from "next/link";
import { IAdminLinkRedirectionProps } from "./AdminLinkRedirection.props";

export const AdminLinkRedirection = ({
  label,
  href,
}: IAdminLinkRedirectionProps) => {
  return (
    <Link className="admin-link-redirection" href={href}>
      {label}
    </Link>
  );
};
