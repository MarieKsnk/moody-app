import { useForm } from "react-hook-form";
import { Label } from "@/components/atoms/Label";
import { Textarea } from "@/components/atoms/Textarea";
import { PrevButton } from "@/components/atoms/Buttons/PrevButton";
import { NextButton } from "@/components/atoms/Buttons/NextButton";
import { RecipeFormData } from "@/types/RecipeFormData";

export default function StepEtapes({
  defaultValues,
  nextStep,
  prevStep,
}: {
  defaultValues?: Partial<RecipeFormData>;
  nextStep: (data: Partial<RecipeFormData>) => void;
  prevStep: (data: Partial<RecipeFormData>) => void;
}) {
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
    <div>
      <h2>ETAPES</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
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
          <p id="instructions-error" role="alert">
            {errors.instructions.message}
          </p>
        ) : (
          <p id="instructions-help">
            Indique au moins une étape de préparation (obligatoire, 10
            caractères min).
          </p>
        )}

        <div>
          <PrevButton
            onClick={() => prevStep({ instructions: watch("instructions") })}
            ariaLabel="Revenir à l’étape précédente du formulaire d'ajout de recette (ingredients)"
          />
          <NextButton ariaLabel="Passer à l’étape suivante du formulaire d’ajout de recette (details)" />
        </div>

        <p>* champs obligatoires.</p>
      </form>
    </div>
  );
}
