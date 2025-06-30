import { useForm } from "react-hook-form";
import { Label } from "@/components/atoms/Forms/label";
import { Textarea } from "@/components/atoms/Forms/textarea";
import { PrevButton } from "@/components/atoms/Buttons/prev_button";
import { NextButton } from "@/components/atoms/Buttons/next_button";
import { RecipeFormData } from "@/types/RecipeFormData";
import { IStepEtapesProps } from "./StepEtapes.props";

export const StepEtapes = ({
  defaultValues,
  nextStep,
  prevStep,
}: IStepEtapesProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Pick<RecipeFormData, "instructions">>({
    defaultValues: { instructions: defaultValues?.instructions || "" },
  });

  // Function permettant la validation de l'etape (si au moins une etape est ecrite) et de passer a l'etape suivante
  const onSubmit = (data: Pick<RecipeFormData, "instructions">) => {
    if (errors.instructions) {
      alert(errors.instructions.message);
      return;
    }
    nextStep(data);
  };

  return (
    <div className="step-form">
      <h2 className="step-form__title">Etapes</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="step-form__form">
        <div className="step-form__group">
          <Label htmlFor="instructions" required={true}>
            Écris toutes les instructions de la recette, étape par étape
          </Label>
          <Textarea
            id="instructions"
            placeholder={`Changer le texte`}
            register={register("instructions", {
              required: "Les étapes de préparation sont obligatoires.",
              minLength: {
                value: 10,
                message: "Merci d’écrire au moins une étape (10 caracteres).",
              },
            })}
            error={errors.instructions}
            rows={8}
            ariaDescribedBy={
              errors.instructions ? "instructions-error" : "instructions-help"
            }
          />
          {errors.instructions ? (
            <p id="instructions-error" role="alert" className="input-error">
              {errors.instructions.message}
            </p>
          ) : (
            <p id="instructions-help" className="input-help">
              Indique au moins une étape de préparation (obligatoire, 10
              caractères min).
            </p>
          )}
        </div>

        <div className="step-form__buttons">
          <NextButton ariaLabel="Passer à l’étape suivante du formulaire d’ajout de recette (details)" />
          <PrevButton
            onClick={() => prevStep({ instructions: watch("instructions") })}
            ariaLabel="Revenir à l’étape précédente du formulaire d'ajout de recette (ingredients)"
          />
        </div>

        <p className="step-form__required">* champs obligatoires.</p>
      </form>
    </div>
  );
};
