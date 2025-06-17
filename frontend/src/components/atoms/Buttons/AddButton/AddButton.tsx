import { IAddButtonProps } from "./AddButton.props";
import Image from "next/image";

export const AddButton: React.FC<IAddButtonProps> = ({
  onClick,
  ariaLabel,
  type = "button",
}) => {
  return (
    <button type={type} onClick={onClick} aria-label={ariaLabel}>
      <Image
        src="/icons/plus.svg"
        alt=""
        width={16}
        height={16}
        aria-hidden="true"
      />
    </button>
  );
};
