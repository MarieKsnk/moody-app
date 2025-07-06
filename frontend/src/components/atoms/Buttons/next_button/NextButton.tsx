import { INextButtonProps } from "./NextButton.props";
import clsx from "clsx";
import Image from "next/image";

export const NextButton: React.FC<INextButtonProps> = ({
  ariaLabel,
  type = "submit",
  size = 30,
  className,
}) => {
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      className={clsx("next-button", className)}
    >
      <span className="next-button__text">Suivant</span>
      <Image
        src="/icons/pink-arrow-right.svg"
        alt=""
        width={size}
        height={size}
        className="next-button__icon"
        aria-hidden="true"
      />
    </button>
  );
};
