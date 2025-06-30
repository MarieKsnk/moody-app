import { IProfilePictureProps } from "./ProfilePicture.props";
import Image from "next/image";
import clsx from "clsx";

export const ProfilePicture: React.FC<IProfilePictureProps> = ({
    src,
    alt,
    size = 100,
    className,
}) => {
  return (
    <div
      className={clsx("profile-picture", className)}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="profile-picture__image"
        quality={95}
      />
    </div>
  );
};