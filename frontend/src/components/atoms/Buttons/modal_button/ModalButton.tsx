import React from "react";
import Image from "next/image";
import { IModalButtonProps } from "./ModalButton.props";

export const ModalButton: React.FC<IModalButtonProps> = ({
  label,
  onClick,
  ariaLabel,
  size = 30,
  className,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className="modal-button"
    >
      <span className="modal-button__label">{label}</span>
      <Image
        src="/icons/pink-arrow-right.svg"
        alt=""
        width={size}
        height={size}
        className="modal-button__icon"
        aria-hidden="true"
      />
    </button>
  );
};
