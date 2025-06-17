import { useForm } from "react-hook-form";
import { Input } from "@/components/atoms/Input";
import { Label } from "@/components/atoms/Label";
import { PrevButton } from "@/components/atoms/Buttons/PrevButton";
import { NextButton } from "@/components/atoms/Buttons/NextButton";
import { RecipeFormData } from "@/types/RecipeFormData";

export default function StepDetails({
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
  } = useForm<Pick<RecipeFormData, "serve" | "prepTime" | "cookTime">>({
    defaultValues: {
      serve: defaultValues?.serve,
      prepTime: defaultValues?.prepTime,
      cookTime: defaultValues?.cookTime,
    },
  });

  // Function permettant la validation de l'etape (si tous les champs sont remplis) et de passer a l'etape suivante
  const onSubmit = (
    data: Pick<RecipeFormData, "serve" | "prepTime" | "cookTime">
  ) => {
    const errorMsg =
      errors.serve?.message ||
      errors.prepTime?.message ||
      errors.cookTime?.message;

    if (errorMsg) {
      alert(errorMsg);
      return;
    }

    nextStep(data);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Détails</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="serve" required={true}>
          Pour combien de personnes ?
        </Label>
        <Input
          id="serve"
          type="number"
          placeholder="Ex : 4"
          register={register("serve", {
            required: "Ce champ est requis",
            min: { value: 1, message: "Minimum : 1 personne" },
          })}
          error={errors.serve}
          ariaDescribedBy={errors.serve ? "serve-error" : "serve-help"}
        />
        {errors.serve ? (
          <p id="serve-error" role="alert">
            {errors.serve.message}
          </p>
        ) : (
          <p id="serve-help">
            Indique pour combien de personnes est prévue la recette.
          </p>
        )}

        <Label htmlFor="prepTime" required={true}>
          Temps de préparation (min)
        </Label>
        <Input
          id="prepTime"
          type="number"
          placeholder="Ex : 15"
          register={register("prepTime", {
            required: "Ce champ est requis",
            min: { value: 1, message: "Minimum : 1 minute" },
          })}
          error={errors.prepTime}
          ariaDescribedBy={errors.prepTime ? "prepTime-error" : "prepTime-help"}
        />
        {errors.prepTime ? (
          <p id="prepTime-error" role="alert">
            {errors.prepTime.message}
          </p>
        ) : (
          <p id="prepTime-help">Temps estimé en minutes.</p>
        )}

        <Label htmlFor="cookTime" required={true}>
          Temps de cuisson (min)
        </Label>
        <Input
          id="cookTime"
          type="number"
          placeholder="Ex : 25"
          register={register("cookTime", {
            required: "Ce champ est requis",
            min: { value: 1, message: "Minimum : 1 minute" },
          })}
          error={errors.cookTime}
          ariaDescribedBy={errors.cookTime ? "cookTime-error" : "cookTime-help"}
        />
        {errors.cookTime ? (
          <p id="cookTime-error" role="alert">
            {errors.cookTime.message}
          </p>
        ) : (
          <p id="cookTime-help">Temps estimé de cuisson en minutes.</p>
        )}

        <div>
          <PrevButton
            onClick={() =>
              prevStep({
                serve: watch("serve"),
                prepTime: watch("prepTime"),
                cookTime: watch("cookTime"),
              })
            }
            ariaLabel="Revenir à l’étape précédente du formulaire d’ajout de recette (etapes)"
          />

          <NextButton ariaLabel="Passer à l’étape suivante du formulaire d’ajout de recette (categories)" />
        </div>

        <p>* champs obligatoires.</p>
      </form>
    </div>
  );
}
