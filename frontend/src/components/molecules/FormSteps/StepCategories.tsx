import { useForm } from "react-hook-form";
import { useState } from "react";
import { SelectCategorie } from "@/components/atoms/SelectCategorie";
import { ItemTag } from "@/components/atoms/ItemTag/ItemTag";
import { AddButton } from "@/components/atoms/Buttons/AddButton";
import { PrevButton } from "@/components/atoms/Buttons/PrevButton";
import { NextButton } from "@/components/atoms/Buttons/NextButton";
import { Label } from "@/components/atoms/Label";
import { useMoods } from "@/hooks/useMoods";
import { useTypes } from "@/hooks/useTypes";
import { useDiets } from "@/hooks/useDiets";
import { useOrigins } from "@/hooks/useOrigins";
import { RecipeFormData } from "@/types/RecipeFormData";

export default function StepCategories({
  defaultValues,
  nextStep,
  prevStep,
}: {
  defaultValues?: Partial<RecipeFormData>;
  nextStep: (data: Partial<RecipeFormData>) => void;
  prevStep: (data: Partial<RecipeFormData>) => void;
}) {
  // Récupération des listes
  const { data: moods = [] } = useMoods();
  const { data: types = [] } = useTypes();
  const { data: diets = [] } = useDiets();
  const { data: origins = [] } = useOrigins();

  // États pour chaque catégorie
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

  // Formulaire RHF pour les sélecteurs
  const { register, watch, reset } = useForm({
    defaultValues: {
      moodId: "",
      typeId: "",
      dietId: "",
      originId: "",
    },
  });

  // 🔁 Fonction générique pour ajouter une catégorie (mood, type, diet, origin)
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

  // 🔁 Fonction générique pour retirer une catégorie
  const removeCategorie = (
    id: string,
    selected: string[],
    setSelected: (val: string[]) => void
  ) => {
    setSelected(selected.filter((val) => val !== id));
  };

  // ✅ Validation + passage à l'étape suivante
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
    <div>
      <h2>CATEGORIES</h2>
      <p>Sélectionne les catégories correspondant à ta recette *</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div>
          <Label htmlFor="moodId" required={false}>
            Les moods
          </Label>
          <SelectCategorie
            id="moodId"
            options={moods.map((m) => ({ value: m.id, label: m.name }))}
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
          {selectedMoodIds.map((id) => {
            const mood = moods.find((m) => m.id === id);
            return mood ? (
              <ItemTag
                key={id}
                label={mood.name}
                onRemove={() =>
                  removeCategorie(id, selectedMoodIds, setSelectedMoodIds)
                }
              />
            ) : null;
          })}
        </div>

        <div>
          <Label htmlFor="typeId" required={true}>
            Les types
          </Label>
          <SelectCategorie
            id="typeId"
            options={types.map((m) => ({ value: m.id, label: m.name }))}
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
          {selectedTypeIds.map((id) => {
            const type = types.find((t) => t.id === id);
            return type ? (
              <ItemTag
                key={id}
                label={type.name}
                onRemove={() =>
                  removeCategorie(id, selectedTypeIds, setSelectedTypeIds)
                }
              />
            ) : null;
          })}
        </div>

        <div>
          <Label htmlFor="dietId" required={false}>
            Les régimes alimentaire
          </Label>
          <SelectCategorie
            id="dietId"
            options={diets.map((m) => ({ value: m.id, label: m.name }))}
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
          {selectedDietIds.map((id) => {
            const diet = diets.find((d) => d.id === id);
            return diet ? (
              <ItemTag
                key={id}
                label={diet.name}
                onRemove={() =>
                  removeCategorie(id, selectedDietIds, setSelectedDietIds)
                }
              />
            ) : null;
          })}
        </div>

        <div>
          <Label htmlFor="originId" required={false}>
            Les origines
          </Label>
          <SelectCategorie
            id="originId"
            options={origins.map((m) => ({ value: m.id, label: m.name }))}
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

          {selectedOriginIds.map((id) => {
            const origin = origins.find((o) => o.id === id);
            return origin ? (
              <ItemTag
                key={id}
                label={origin.name}
                onRemove={() =>
                  removeCategorie(id, selectedOriginIds, setSelectedOriginIds)
                }
              />
            ) : null;
          })}
        </div>

        <div>
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
          <NextButton ariaLabel="Passer à l’étape suivante du formulaire d’ajout de recette (soumission)" />
        </div>

        <p>* champ obligatoire.</p>
      </form>
    </div>
  );
}
