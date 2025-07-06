import { useForm } from "react-hook-form";
import { useState } from "react";
import { Input } from "@/components/atoms/Forms/input";
import { Label } from "@/components/atoms/Forms/label";
import { SelectIngredient } from "@/components/atoms/Forms/select_ingredient";
import { TagIngredient } from "@/components/atoms/Forms/tag_ingredient";
import { AddButton } from "@/components/atoms/Buttons/add_button";
import { PrevButton } from "@/components/atoms/Buttons/prev_button";
import { NextButton } from "@/components/atoms/Buttons/next_button";
import { useIngredients } from "@/hooks/useIngredients";
import {
  IngredientItem,
  Ingredient,
  SelectOption,
} from "@/types/RecipeFormData";
import { IStepIngredientsProps } from "./StepIngredients.props";

export const StepIngredients = ({
  defaultValues,
  nextStep,
  prevStep,
}: IStepIngredientsProps) => {
  const { data: ingredients, isLoading, isError } = useIngredients();

  const [selectedIngredient, setSelectedIngredient] =
    useState<SelectOption | null>(null);

  const [ingredientList, setIngredientList] = useState<IngredientItem[]>(
    defaultValues?.ingredientList || []
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: { quantity: "" },
  });

  // Fonction permettant d'ajouter et de garder en memoire (juste en dessous) un ingredient et sa quantite
  const onAddIngredient = (data: { quantity: string }) => {
    if (
      !selectedIngredient ||
      !data.quantity ||
      ingredientList.some(
        (item) => item.ingredientId === selectedIngredient.value
      )
    )
      return;

    const newItem: IngredientItem = {
      ingredientId: selectedIngredient.value,
      quantity: data.quantity,
    };

    setIngredientList((list) => [...list, newItem]);
    setSelectedIngredient(null);
    reset();
  };

  // Function permettant de supprimer et de faire disparaitre un ingredient et sa quantite
  const removeIngredient = (id: string) => {
    setIngredientList((list) =>
      list.filter((item) => item.ingredientId !== id)
    );
  };

  // Function permettant la validation de l'etape (si au moins un ingredient est ajoute) et de passer a l'etape suivante
  const onSubmit = () => {
    if (!ingredientList.length) {
      alert("Ajoute au moins un ingrédient pour continuer.");
      return;
    }
    nextStep({ ingredientList });
  };

  if (isLoading) return <p>Chargement des ingrédients…</p>;
  if (isError || !ingredients)
    return <p>Erreur lors du chargement des ingrédients.</p>;

  return (
    <div className="step-form">
      <h2 className="step-form__title">Ingredients</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="step-form__form"
      >
        <div className="step-form__group-ingredients">
          <div className="step-form__group">
            <Label htmlFor="ingredientId" required={true}>
              Liste les ingrédients et leurs quantités
            </Label>
            <SelectIngredient
              id="ingredientId"
              options={ingredients.map((ing: Ingredient) => ({
                value: ing.id,
                label: ing.name,
              }))}
              value={selectedIngredient || { value: "", label: "" }}
              onChange={(opt) => setSelectedIngredient(opt)}
              placeholder="Choisis un ingrédient"
              error={!selectedIngredient}
            />

            {!selectedIngredient ? (
              <p id="ingredientId-error" role="alert" className="input-error">
                Sélectionne un ingrédient
              </p>
            ) : (
              <p id="ingredientId-help" className="input-help">
                Choisis un ingrédient dans la liste déroulante.
              </p>
            )}
          </div>

          <div className="step-form__group">
            <Input
              id="quantity"
              type="text"
              placeholder="Ex : 250ml..."
              register={register("quantity", {
                required: "Quantité obligatoire",
              })}
              error={errors.quantity}
              ariaDescribedBy={
                errors.quantity ? "quantity-error" : "quantity-help"
              }
            />
            {errors.quantity ? (
              <p id="quantity-error" role="alert" className="input-error">
                {errors.quantity.message}
              </p>
            ) : (
              <p id="quantity-help" className="input-help">
                Indique une quantité.
              </p>
            )}
          </div>

          <AddButton
            onClick={handleSubmit(onAddIngredient)}
            ariaLabel="Ajouter cet ingrédient avec sa quantité"
            type="button"
          />
        </div>

        <div className="step-form__items">
          {ingredientList.map((item) => {
            const ing = ingredients.find(
              (i: any) => i.id === item.ingredientId
            );
            if (!ing) return null;
            return (
              <TagIngredient
                key={item.ingredientId}
                label={ing.name}
                quantity={item.quantity}
                onRemove={() => removeIngredient(item.ingredientId)}
              />
            );
          })}
        </div>

        <div className="step-form__buttons">
          <NextButton
            type="submit"
            ariaLabel="Passer à l’étape suivante du formulaire d’ajout de recette (étapes)"
          />
          <PrevButton
            onClick={() => prevStep({ ingredientList })}
            ariaLabel="Revenir à l’étape précédente du formulaire d'ajout de recette (informations)"
          />
        </div>
        <p className="step-form__required">* champs obligatoires.</p>
      </form>
    </div>
  );
};
