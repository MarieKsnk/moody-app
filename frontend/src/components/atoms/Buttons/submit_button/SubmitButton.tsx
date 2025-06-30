import { ISubmitButtonProps } from "./SubmitButton.props";
import Image from "next/image";
import clsx from "clsx";

export const SubmitButton: React.FC<ISubmitButtonProps> = ({
  label,
  type = "submit",
  ariaLabel,
  size = 40,
  className,
}) => {
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      className={clsx("submit-button", className)}
    >
      <span className="submit-button__text">{label}</span>
      <Image
        src="/icons/pink-arrow-right.svg"
        alt=""
        width={size}
        height={size}
        className="submit-button__icon"
        aria-hidden="true"
      />
    </button>
  );
};
