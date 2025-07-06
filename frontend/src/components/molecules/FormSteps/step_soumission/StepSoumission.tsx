import { SubmitButton } from "@/components/atoms/Buttons/submit_button";
import { PrevButton } from "@/components/atoms/Buttons/prev_button";
import { IStepSoumissionProps } from "./StepSoumission.props";

export const StepSoumission = ({
  formData,
  onSubmit,
  prevStep,
  isUpdateRecipe = false,
}: IStepSoumissionProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="step-form">
      <h2 className="step-form__title">Soumission</h2>

      <p className="step-form__text">Voir la preview de ma recette :</p>

      <div>
        <button
          type="button"
          disabled
          aria-label="Preview non disponible pour l’instant"
        >
          PREVIEW
        </button>
      </div>

      <form onSubmit={handleSubmit} className="step-form__form-submit">
        <div className="step-form__buttons">
          <SubmitButton
            label={
              isUpdateRecipe
                ? "Mettre a jour la recette"
                : "Soumettre ma recette"
            }
            type="submit"
            ariaLabel={
              isUpdateRecipe
                ? "Soumettre la mise a jour de la recette"
                : "Soumettre définitivement la recette"
            }
          />
          <PrevButton
            onClick={() => prevStep(formData)}
            ariaLabel="Revenir à l’étape précédente du formulaire d'ajout de recette (catégories)"
          />
        </div>
      </form>
    </div>
  );
};
