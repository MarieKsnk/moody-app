import { useForm } from "react-hook-form";
import { useState } from "react";
import { Input } from "@/components/atoms/Input";
import { Label } from "@/components/atoms/Label";
import { SelectIngredient } from "@/components/atoms/SelectIngredient";
import { ItemTag } from "@/components/atoms/ItemTag/ItemTag";
import { AddButton } from "@/components/atoms/Buttons/AddButton";
import { PrevButton } from "@/components/atoms/Buttons/PrevButton";
import { NextButton } from "@/components/atoms/Buttons/NextButton";
import { useIngredients } from "@/hooks/useIngredients";
import {
  RecipeFormData,
  IngredientItem,
  Ingredient,
} from "@/types/RecipeFormData";

export default function StepIngredients({
  defaultValues,
  nextStep,
  prevStep,
}: {
  defaultValues?: Partial<RecipeFormData>;
  nextStep: (data: Partial<RecipeFormData>) => void;
  prevStep: (data: Partial<RecipeFormData>) => void;
}) {
  const { data: ingredients, isLoading, isError } = useIngredients();

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
    defaultValues: { ingredientId: "", quantity: "" },
  });

  // Fonction permettant d'ajouter et de garder en memoire (juste en dessous) un ingredient et sa quantite
  const onAddIngredient = (data: IngredientItem) => {
    if (
      !data.ingredientId ||
      !data.quantity ||
      ingredientList.some((item) => item.ingredientId === data.ingredientId)
    )
      return;
    setIngredientList((list) => [...list, data]);
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
    <div>
      <h2>INGREDIENTS</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div>
          <Label htmlFor="ingredientId" required={true}>
            Liste les ingrédients nécessaires et leurs quantités
          </Label>

          <SelectIngredient
            id="ingredientId"
            options={ingredients.map((ing: Ingredient) => ({
              value: ing.id,
              label: ing.name,
            }))}
            register={register("ingredientId", {
              required: "Sélectionne un ingrédient",
            })}
            error={errors.ingredientId}
            placeholder="Choisis un ingrédient"
          />
          {errors.ingredientId ? (
            <p id="ingredientId-error" role="alert">
              {errors.ingredientId.message}
            </p>
          ) : (
            <p id="ingredientId-help">
              Choisis un ingrédient dans la liste déroulante.
            </p>
          )}

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
            <p id="quantity-error" role="alert">
              {errors.quantity.message}
            </p>
          ) : (
            <p id="quantity-help">Indique une quantité.</p>
          )}

          <AddButton
            onClick={handleSubmit(onAddIngredient)}
            ariaLabel="Ajouter cet ingrédient avec sa quantité"
            type="button"
          />
        </div>

        <div>
          {ingredientList.map((item) => {
            const ing = ingredients.find(
              (i: any) => i.id === item.ingredientId
            );
            if (!ing) return null;
            return (
              <ItemTag
                key={item.ingredientId}
                label={ing.name}
                quantity={item.quantity}
                onRemove={() => removeIngredient(item.ingredientId)}
              />
            );
          })}
        </div>

        <div>
          <PrevButton
            onClick={() => prevStep({ ingredientList })}
            ariaLabel="Revenir à l’étape précédente du formulaire d'ajout de recette (informations)"
          />
          <NextButton
            type="submit"
            ariaLabel="Passer à l’étape suivante du formulaire d’ajout de recette (étapes)"
          />
        </div>
        <p>* champs obligatoires.</p>
      </form>
    </div>
  );
}
