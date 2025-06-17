import { IRemoveButtonProps } from "./RemoveButton.props";
import Image from "next/image";

export const RemoveButton: React.FC<IRemoveButtonProps> = ({
  onClick,
  ariaLabel,
  type = "button",
}) => {
  return (
    <button type={type} onClick={onClick} aria-label={ariaLabel}>
      <Image
        src="/icons/minus.svg"
        alt=""
        width={16}
        height={16}
        aria-hidden="true"
      />
    </button>
  );
};
