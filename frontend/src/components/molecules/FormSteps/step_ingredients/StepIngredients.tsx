import { useForm } from "react-hook-form";
import { useState } from "react";
import { Input } from "@/components/atoms/Forms/input";
import { Label } from "@/components/atoms/Forms/label";
import { TagIngredient } from "@/components/atoms/Forms/tag_ingredient";
import { AddButton } from "@/components/atoms/Buttons/add_button";
import { PrevButton } from "@/components/atoms/Buttons/prev_button";
import { NextButton } from "@/components/atoms/Buttons/next_button";
import { IStepIngredientsProps } from "./StepIngredients.props";

type FreeIngredientItem = {
  ingredientId: string; // généré dynamiquement
  name: string;
  quantity: string;
};

export const StepIngredients = ({
  defaultValues,
  nextStep,
  prevStep,
}: IStepIngredientsProps) => {
  const [ingredientList, setIngredientList] = useState<FreeIngredientItem[]>(
    defaultValues?.ingredientList || []
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: { ingredientLine: "" },
  });

  const onAddIngredient = (data: { ingredientLine: string }) => {
    const input = data.ingredientLine.trim();

    // Vérifie le format attendu : "Nom : quantité"
    if (!input.includes(":")) return;

    const [namePart, quantityPart] = input.split(":").map((part) => part.trim());

    if (!namePart || !quantityPart) return;

    const newItem: FreeIngredientItem = {
      ingredientId: `${Date.now()}-${Math.random()}`, // identifiant unique temporaire
      name: namePart,
      quantity: quantityPart,
    };

    setIngredientList((list) => [...list, newItem]);
    reset(); // vide le champ
  };

  const removeIngredient = (id: string) => {
    setIngredientList((list) =>
      list.filter((item) => item.ingredientId !== id)
    );
  };

  const onSubmit = () => {
    if (!ingredientList.length) {
      alert("Ajoute au moins un ingrédient pour continuer.");
      return;
    }

    // On passe uniquement les champs attendus : id et quantity
    nextStep({
      ingredientList: ingredientList.map(({ ingredientId, quantity }) => ({
        ingredientId,
        quantity,
      })),
    });
  };

  return (
    <div className="step-form">
      <h2 className="step-form__title">Ingrédients</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="step-form__form"
      >
        <div className="step-form__group-ingredients">
          <div className="step-form__group">
            <Label htmlFor="ingredientLine" required={true}>
              Ajoute chaque ingrédient et sa quantité
            </Label>

            <Input
              id="ingredientLine"
              type="text"
              placeholder="Ex : Poulet : 600g"
              register={register("ingredientLine", {
                required: "Ce champ est obligatoire",
                validate: (value) =>
                  value.includes(":") || "Format attendu : Nom : quantité",
              })}
              error={errors.ingredientLine}
              ariaDescribedBy={
                errors.ingredientLine
                  ? "ingredientLine-error"
                  : "ingredientLine-help"
              }
            />

            {errors.ingredientLine ? (
              <p
                id="ingredientLine-error"
                role="alert"
                className="input-error"
              >
                {errors.ingredientLine.message}
              </p>
            ) : (
              <p id="ingredientLine-help" className="input-help">
                Format attendu : "Nom : quantité"
              </p>
            )}
          </div>

          <AddButton
            onClick={handleSubmit(onAddIngredient)}
            ariaLabel="Ajouter cet ingrédient"
            type="button"
          />
        </div>

        <div className="step-form__items">
          {ingredientList.map((item) => (
            <TagIngredient
              key={item.ingredientId}
              label={item.name}
              quantity={item.quantity}
              onRemove={() => removeIngredient(item.ingredientId)}
            />
          ))}
        </div>

        <div className="step-form__buttons">
          <NextButton
            type="submit"
            ariaLabel="Passer à l’étape suivante du formulaire"
          />
          <PrevButton
            onClick={() => prevStep({ ingredientList })}
            ariaLabel="Revenir à l’étape précédente du formulaire"
          />
        </div>

        <p className="step-form__required">* champs obligatoires.</p>
      </form>
    </div>
  );
};
