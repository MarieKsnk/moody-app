import React from "react";
import { IDeleteRecipeModalProps } from "./DeleteRecipeModal.props";

export const DeleteRecipeModal: React.FC<IDeleteRecipeModalProps> = ({
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="modal-container" role="dialog" aria-modal="true">
      <div className="modal">
        <h3 className="modal__title">Suppression</h3>
        <p className="modal__text">
          Es-tu sûr·e de vouloir supprimer ta recette ?
        </p>
        <div className="modal__buttons">
          <button onClick={onConfirm} className="delete-button">
            Supprimer la recette
          </button>
          <button onClick={onCancel} className="cancel-button">
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
};
