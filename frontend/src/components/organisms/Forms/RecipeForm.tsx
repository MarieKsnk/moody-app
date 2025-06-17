import { useState } from "react";
import StepInformations from "@/components/molecules/FormSteps/StepInformations";
import StepIngredients from "@/components/molecules/FormSteps/StepIngredients";
import StepEtapes from "@/components/molecules/FormSteps/StepEtapes";
import StepDetails from "@/components/molecules/FormSteps/StepDetails";
import StepCategories from "@/components/molecules/FormSteps/StepCategories";
import StepSoumission from "@/components/molecules/FormSteps/StepSoumission";
import { RecipeFormData } from "@/types/RecipeFormData";

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
  typeId: "",
  dietIds: [],
  originIds: [],
};

export default function RecipeForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<RecipeFormData>(initialFormData);

  // Functiomn permettant de passer a l'etape suivante du formulaire
  const handleNextStep = (stepData: Partial<RecipeFormData>) => {
    setFormData((prev) => ({ ...prev, ...stepData }));
    setStep((s) => s + 1);
  };

  // Functiomn permettant de revenir a l'etape precedente du formulaire
  const handlePrevStep = (stepData: Partial<RecipeFormData>) => {
    setFormData((prev) => ({ ...prev, ...stepData }));
    setStep((s) => s - 1);
  };

  // Fonction permettant d'envoyer la recette dans la BDD
  const handleSubmit = async (data: RecipeFormData) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        return;
      }
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
      formDataToSend.append("typeId", data.typeId);
      formDataToSend.append("dietIds", JSON.stringify(data.dietIds));
      formDataToSend.append("originIds", JSON.stringify(data.originIds));

      const response = await fetch(
        "http://localhost:8000/api/recipes/add-recipe",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formDataToSend,
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error(errorText);
        throw new Error("Erreur serveur");
      }

      alert(
        "Super ! Ta recette a bien ete envoye pour validation. Elle sera traitee dans les meilleurs delais."
      );
    } catch (err) {
      alert("Erreur lors de la soumission de la recette");
    }
  };

  return (
    <div>
      {step === 1 && (
        <StepInformations defaultValues={formData} nextStep={handleNextStep} />
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
  );
}
