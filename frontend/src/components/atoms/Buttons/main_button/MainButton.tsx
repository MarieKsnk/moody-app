import { IMainButtonProps } from "./MainButton.props";
import clsx from "clsx";
import Image from "next/image";

export const MainButton: React.FC<IMainButtonProps> = ({
  className,
  icon,
  label,
  onClick,
  ariaLabel,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx("main-button", className)}
      aria-label={ariaLabel}
    >
      <span className="main-button__text">{label}</span>
      <Image
        src={icon}
        alt=""
        width={24}
        height={24}
        className="main-button__icon"
        aria-hidden="true"
      />
    </button>
  );
};

export default MainButton;
