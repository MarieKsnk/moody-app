import { IRemoveButtonProps } from "./RemoveButton.props";
import Image from "next/image";
import clsx from "clsx";

export const RemoveButton: React.FC<IRemoveButtonProps> = ({
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
      className={clsx("remove-button", className)}
    >
      <Image
        src="/icons/minus-light.svg"
        alt=""
        width={16}
        height={16}
        aria-hidden="true"
        className="remove-button__icon"
      />
    </button>
  );
};
