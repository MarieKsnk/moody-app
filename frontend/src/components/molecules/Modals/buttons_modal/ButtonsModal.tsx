import React from "react";
import { IButtonsModalProps } from "./ButtonsModal.props";
import { ModalButton } from "@/components/atoms/Buttons/modal_button/ModalButton";
import clsx from "clsx";

export const ButtonsModal: React.FC<IButtonsModalProps> = ({
  title,
  message,
  primaryLabel,
  secondaryLabel,
  primaryOnClick,
  secondaryOnClick,
  className,
}) => {
  return (
    <div className="modal-container" role="dialog" aria-modal="true">
      <div className="modal">
        <h2 className="modal__title">{title}</h2>
        {message && <p className="modal__text">{message}</p>}
        <div className="modal__buttons">
          <ModalButton
            onClick={primaryOnClick}
            label={primaryLabel}
            className="modal-button--light"
          />
          <ModalButton
            onClick={secondaryOnClick}
            label={secondaryLabel}
            className="modal-button--dark"
          />
        </div>
      </div>
    </div>
  );
};
