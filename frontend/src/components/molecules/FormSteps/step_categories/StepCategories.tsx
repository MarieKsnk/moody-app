import { useForm } from "react-hook-form";
import { useState } from "react";
import { SelectCategorie } from "@/components/atoms/Forms/select_categorie";
import { TagCategorie } from "@/components/atoms/Forms/tag_categorie";
import { AddButton } from "@/components/atoms/Buttons/add_button";
import { PrevButton } from "@/components/atoms/Buttons/prev_button";
import { NextButton } from "@/components/atoms/Buttons/next_button";
import { Label } from "@/components/atoms/Forms/label";
import { useMoods } from "@/hooks/useMoods";
import { useTypes } from "@/hooks/useTypes";
import { useDiets } from "@/hooks/useDiets";
import { useOrigins } from "@/hooks/useOrigins";
import { IStepCategoriesProps } from "./StepCategories.props";

export const StepCategories = ({
  defaultValues,
  nextStep,
  prevStep,
}: IStepCategoriesProps) => {
  const { data: moods = [] } = useMoods();
  const { data: types = [] } = useTypes();
  const { data: diets = [] } = useDiets();
  const { data: origins = [] } = useOrigins();

  const [selectedMoodIds, setSelectedMoodIds] = useState<string[]>(
    defaultValues?.moodIds || []
  );
  const [selectedTypeIds, setSelectedTypeIds] = useState<string[]>(
    defaultValues?.typeIds || []
  );
  const [selectedDietIds, setSelectedDietIds] = useState<string[]>(
    defaultValues?.dietIds || []
  );
  const [selectedOriginIds, setSelectedOriginIds] = useState<string[]>(
    defaultValues?.originIds || []
  );

  const { register, watch, reset } = useForm({
    defaultValues: {
      moodId: "",
      typeId: "",
      dietId: "",
      originId: "",
    },
  });

  // Fonction permettant d'ajouter et de garder en memoire (juste en dessous) une categorie
  const onAddCategorie = (
    field: "moodId" | "typeId" | "dietId" | "originId",
    selected: string[],
    setSelected: (val: string[]) => void
  ) => {
    const value = watch(field);
    if (!value || selected.includes(value)) return;
    setSelected([...selected, value]);
    reset({ ...watch(), [field]: "" });
  };

  // Function permettant de supprimer et de faire disparaitre une categorie
  const removeCategorie = (
    id: string,
    selected: string[],
    setSelected: (val: string[]) => void
  ) => {
    setSelected(selected.filter((val) => val !== id));
  };

  // Function permettant la validation de l'etape (si au moins un type est ajoute) et de passer a l'etape suivante
  const onSubmit = () => {
    if (!selectedTypeIds.length) {
      alert("Sélectionne au moins un type de recette.");
      return;
    }
    nextStep({
      moodIds: selectedMoodIds,
      typeIds: selectedTypeIds,
      dietIds: selectedDietIds,
      originIds: selectedOriginIds,
    });
  };

  return (
    <div className="step-form">
      <h2 className="step-form__title">CATEGORIES</h2>
      <p className="step-form__text">
        Sélectionne les catégories correspondantes à ta recette <span>*</span>
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="step-form__form"
      >
        <div className="step-form__group">
          <Label htmlFor="moodId" required={false}>
            Les moods
          </Label>
          <SelectCategorie
            id="moodId"
            options={moods.map((m) => ({
              value: m.id,
              label: m.name,
              disabled: selectedMoodIds.includes(m.id),
            }))}
            placeholder="Choisis un ou plusieurs mood(s)"
            register={register("moodId")}
          />
          <AddButton
            onClick={() =>
              onAddCategorie("moodId", selectedMoodIds, setSelectedMoodIds)
            }
            ariaLabel="Ajouter ce mood"
            type="button"
          />
        </div>
        <div className="step-form__items">
          {selectedMoodIds.map((id) => {
            const mood = moods.find((m) => m.id === id);
            return mood ? (
              <TagCategorie
                key={id}
                label={mood.name}
                onRemove={() =>
                  removeCategorie(id, selectedMoodIds, setSelectedMoodIds)
                }
              />
            ) : null;
          })}
        </div>

        <div className="step-form__group">
          <Label htmlFor="typeId" required={true}>
            Les types
          </Label>
          <SelectCategorie
            id="typeId"
            options={types.map((t) => ({
              value: t.id,
              label: t.name,
              disabled: selectedTypeIds.includes(t.id),
            }))}
            placeholder="Choisis un ou plusieurs type(s)"
            register={register("typeId")}
          />
          <AddButton
            onClick={() =>
              onAddCategorie("typeId", selectedTypeIds, setSelectedTypeIds)
            }
            ariaLabel="Ajouter ce type"
            type="button"
          />
        </div>
        <div className="step-form__items">
          {selectedTypeIds.map((id) => {
            const type = types.find((t) => t.id === id);
            return type ? (
              <TagCategorie
                key={id}
                label={type.name}
                onRemove={() =>
                  removeCategorie(id, selectedTypeIds, setSelectedTypeIds)
                }
              />
            ) : null;
          })}
        </div>

        <div className="step-form__group">
          <Label htmlFor="dietId" required={false}>
            Les régimes alimentaire
          </Label>
          <SelectCategorie
            id="dietId"
            options={diets.map((d) => ({
              value: d.id,
              label: d.name,
              disabled: selectedDietIds.includes(d.id),
            }))}
            placeholder="Choisis un ou plusieurs régime(s) alimentaire"
            register={register("dietId")}
          />
          <AddButton
            onClick={() =>
              onAddCategorie("dietId", selectedDietIds, setSelectedDietIds)
            }
            ariaLabel="Ajouter ce régime alimentaire"
            type="button"
          />
        </div>
        <div className="step-form__items">
          {selectedDietIds.map((id) => {
            const diet = diets.find((d) => d.id === id);
            return diet ? (
              <TagCategorie
                key={id}
                label={diet.name}
                onRemove={() =>
                  removeCategorie(id, selectedDietIds, setSelectedDietIds)
                }
              />
            ) : null;
          })}
        </div>

        <div className="step-form__group">
          <Label htmlFor="originId" required={false}>
            Les origines
          </Label>
          <SelectCategorie
            id="originId"
            options={origins.map((o) => ({
              value: o.id,
              label: o.name,
              disabled: selectedOriginIds.includes(o.id),
            }))}
            placeholder="Choisis une ou plusieurs origine(s)"
            register={register("originId")}
          />
          <AddButton
            onClick={() =>
              onAddCategorie(
                "originId",
                selectedOriginIds,
                setSelectedOriginIds
              )
            }
            ariaLabel="Ajouter cette origine"
            type="button"
          />
        </div>
        <div className="step-form__items">
          {selectedOriginIds.map((id) => {
            const origin = origins.find((o) => o.id === id);
            return origin ? (
              <TagCategorie
                key={id}
                label={origin.name}
                onRemove={() =>
                  removeCategorie(id, selectedOriginIds, setSelectedOriginIds)
                }
              />
            ) : null;
          })}
        </div>

        <div className="step-form__buttons">
          <NextButton ariaLabel="Passer à l’étape suivante du formulaire d’ajout de recette (soumission)" />
          <PrevButton
            onClick={() =>
              prevStep({
                moodIds: selectedMoodIds,
                typeIds: selectedTypeIds,
                dietIds: selectedDietIds,
                originIds: selectedOriginIds,
              })
            }
            ariaLabel="Revenir à l’étape précédente du formulaire d'ajout de recette (détails)"
          />
        </div>
        <p className="step-form__required">* champ obligatoire.</p>
      </form>
    </div>
  );
};
