import Image from "next/image";
import clsx from "clsx";
import { ITitleBannerProps } from "./TitleBanner.props";

export const TitleBanner: React.FC<ITitleBannerProps> = ({
  title,
  iconSrc,
  ariaLabel,
  className,
}) => {
  return (
    <div
      className={clsx("banner-title-wrapper", className)}
      aria-label={ariaLabel}
      role="presentation"
    >
      <div className="banner-title">
        <Image
          src={iconSrc}
          alt=""
          width={35}
          height={35}
          className="banner-title__icon"
          aria-hidden="true"
        />
        <h2 className="banner-title__text">{title}</h2>
      </div>
    </div>
  );
};
