import { IProfilePictureProps } from "./ProfilePicture.props";
import Image from "next/image";
import clsx from "clsx";

export const ProfilePicture: React.FC<IProfilePictureProps> = ({
  src,
  alt,
  className,
}) => {
  return (
    <div className={clsx("profile-picture", className)}>
      <Image
        src={src}
        alt={alt}
        className="profile-picture__image"
        width={160}
        height={178}
        quality={75}
        priority
        sizes="(max-width: 600px) 100vw, 160px"
      />
    </div>
  );
};
