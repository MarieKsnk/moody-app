import Link from "next/link";
import clsx from "clsx";
import { ICategorieAnchorProps } from "./CategorieAnchor.props";

export const CategorieAnchor = ({
  label,
  href,
  className,
}: ICategorieAnchorProps) => {
  return (
    <Link href={href} className={clsx("categorie-anchor", className)}>
      {label}
    </Link>
  );
};
