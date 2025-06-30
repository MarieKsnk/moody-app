import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { IProfileLinkProps } from "./ProfileLink.props";

export const ProfileLink = ({ href, label, className }: IProfileLinkProps) => {
  return (
    <li>
      <Link href={href} className={clsx("profile-link", className)}>
        <Image
          src="/icons/profile.svg"
          alt=""
          width={30}
          height={30}
          aria-hidden="true"
        />
        <span>{label}</span>
      </Link>
    </li>
  );
};
