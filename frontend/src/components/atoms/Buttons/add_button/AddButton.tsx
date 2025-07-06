import { IAddButtonProps } from "./AddButton.props";
import Image from "next/image";
import clsx from "clsx";

export const AddButton: React.FC<IAddButtonProps> = ({
  onClick,
  ariaLabel,
  type = "button",
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={clsx("add-button", className)}
    >
      <Image
        src="/icons/plus-dark.svg"
        alt=""
        width={16}
        height={16}
        aria-hidden="true"
        className="add-button__icon"
      />
    </button>
  );
};
