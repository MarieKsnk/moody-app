import { IPrevButtonProps } from "./PrevButton.props";
import clsx from "clsx";
import Image from "next/image";

export const PrevButton: React.FC<IPrevButtonProps> = ({
  onClick,
  ariaLabel,
  type = "button",
  size = 30,
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={clsx("prev-button", className)}
    >
      <Image
        src="/icons/pink-arrow-left.svg"
        alt=""
        width={size}
        height={size}
        className="prev-button__icon"
        aria-hidden="true"
      />
      <span className="prev-button__text">Precedent</span>
    </button>
  );
};
