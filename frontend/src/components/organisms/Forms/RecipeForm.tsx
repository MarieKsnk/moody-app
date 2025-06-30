import { useState } from "react";
import { StepInformations } from "@/components/molecules/FormSteps/step_informations";
import { StepIngredients } from "@/components/molecules/FormSteps/step_ingredients";
import { StepEtapes } from "@/components/molecules/FormSteps/step_etapes";
import { StepDetails } from "@/components/molecules/FormSteps/step_details/StepDetails";
import { StepCategories } from "@/components/molecules/FormSteps/step_categories/StepCategories";
import { StepSoumission } from "@/components/molecules/FormSteps/step_soumission";
import { RecipeFormData } from "@/types/RecipeFormData";
import { useCreateRecipe } from "@/hooks/useCreateRecipe";

const initialFormData: RecipeFormData = {
  title: "",
  description: "",
  recipePicture: undefined,
  recipeUrl: "",
  ingredientList: [],
  instructions: "",
  prepTime: 0,
  cookTime: 0,
  serve: 0,
  moodIds: [],
  typeIds: [],
  dietIds: [],
  originIds: [],
};

export default function RecipeForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<RecipeFormData>(initialFormData);

  const { mutate, isPending } = useCreateRecipe();

  const handleNextStep = (stepData: Partial<RecipeFormData>) => {
    setFormData((prev) => ({ ...prev, ...stepData }));
    setStep((s) => s + 1);
  };

  const handlePrevStep = (stepData: Partial<RecipeFormData>) => {
    setFormData((prev) => ({ ...prev, ...stepData }));
    setStep((s) => s - 1);
  };

  const handleSubmit = (data: RecipeFormData) => {
    const formDataToSend = new FormData();

    formDataToSend.append("title", data.title);
    formDataToSend.append("description", data.description || "");
    formDataToSend.append("recipeUrl", data.recipeUrl || "");
    formDataToSend.append("instructions", data.instructions);
    formDataToSend.append("prepTime", String(data.prepTime));
    formDataToSend.append("cookTime", String(data.cookTime));
    formDataToSend.append("serve", String(data.serve));

    if (data.recipePicture?.[0]) {
      formDataToSend.append("recipePicture", data.recipePicture[0]);
    }

    formDataToSend.append(
      "ingredientList",
      JSON.stringify(data.ingredientList)
    );
    formDataToSend.append("moodIds", JSON.stringify(data.moodIds));
    formDataToSend.append("typeIds", JSON.stringify(data.typeIds));
    formDataToSend.append("dietIds", JSON.stringify(data.dietIds));
    formDataToSend.append("originIds", JSON.stringify(data.originIds));

    mutate(formDataToSend, {
      onSuccess: () => {
        alert(
          "Super ! Ta recette a bien ete envoye pour validation. Elle sera traitee dans les meilleurs delais."
        );
      },
      onError: () => {
        alert("Erreur lors de la soumission de la recette");
      },
    });
  };

  return (
    <section className="form">
      <div className="form__container">
        <h1>Ajouter une nouvelle recette</h1>
        {step === 1 && (
          <StepInformations
            defaultValues={formData}
            nextStep={handleNextStep}
          />
        )}
        {step === 2 && (
          <StepIngredients
            defaultValues={formData}
            nextStep={handleNextStep}
            prevStep={handlePrevStep}
          />
        )}
        {step === 3 && (
          <StepEtapes
            defaultValues={formData}
            nextStep={handleNextStep}
            prevStep={handlePrevStep}
          />
        )}
        {step === 4 && (
          <StepDetails
            defaultValues={formData}
            nextStep={handleNextStep}
            prevStep={handlePrevStep}
          />
        )}
        {step === 5 && (
          <StepCategories
            defaultValues={formData}
            nextStep={handleNextStep}
            prevStep={handlePrevStep}
          />
        )}
        {step === 6 && (
          <StepSoumission
            formData={formData}
            onSubmit={handleSubmit}
            prevStep={handlePrevStep}
          />
        )}
      </div>
    </section>
  );
}
