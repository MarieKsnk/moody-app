import { SubmitButton } from "@/components/atoms/Buttons/SubmitButton";
import { PrevButton } from "@/components/atoms/Buttons/PrevButton";
import { RecipeFormData } from "@/types/RecipeFormData";

export default function StepSoumission({
  formData,
  onSubmit,
  prevStep,
}: {
  formData: RecipeFormData;
  onSubmit: (data: RecipeFormData) => void;
  prevStep: (data: Partial<RecipeFormData>) => void;
}) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <h2>Soumission</h2>

      <p>Voir la preview de ma recette :</p>

      <div>
        <button
          type="button"
          disabled
          aria-label="Preview non disponible pour l’instant"
        >
          👁️
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <PrevButton
            onClick={() => prevStep(formData)}
            ariaLabel="Revenir à l’étape précédente du formulaire d'ajout de recette (catégories)"
          />

          <SubmitButton
            label="Soumettre ma recette"
            type="submit"
            ariaLabel="Soumettre définitivement la recette"
          />
        </div>
      </form>
    </div>
  );
}
