import { useState, useEffect } from "react";
import { StepInformations } from "@/components/molecules/FormSteps/step_informations";
import { StepIngredients } from "@/components/molecules/FormSteps/step_ingredients";
import { StepEtapes } from "@/components/molecules/FormSteps/step_etapes";
import { StepDetails } from "@/components/molecules/FormSteps/step_details/StepDetails";
import { StepCategories } from "@/components/molecules/FormSteps/step_categories/StepCategories";
import { StepSoumission } from "@/components/molecules/FormSteps/step_soumission";
import { RecipeFormData } from "@/types/RecipeFormData";
import { useUpdateRecipe } from "@/hooks/useUpdateRecipe";
import { useRecipeById } from "@/hooks/useRecipeId";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/useAuth";

interface Props {
  recipeId: string;
}

export default function RecipeEditForm({ recipeId }: Props) {
  const { user } = useAuth();
  const { data: recipe, isLoading } = useRecipeById(recipeId);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<RecipeFormData | null>(null);
  const router = useRouter();

  const { mutate } = useUpdateRecipe(recipeId);

  useEffect(() => {
    if (recipe) {
      setFormData({
        title: recipe.title,
        description: recipe.description || "",
        recipePicture: undefined,
        recipeUrl: recipe.recipeUrl || "",
        ingredientList: recipe.ingredients.map((i) => ({
          ingredientId: i.ingredient.id,
          quantity: i.quantity,
        })),
        instructions: recipe.instructions,
        prepTime: recipe.prepTime,
        cookTime: recipe.cookTime,
        serve: recipe.serve,
        moodIds: recipe.moods.map((m) => m.mood.id),
        typeIds: recipe.types.map((t) => t.type.id),
        dietIds: recipe.diets.map((d) => d.diet.id),
        originIds: recipe.origins.map((o) => o.origin.id),
        existingPicture: recipe.recipePicture,
      });
    }
  }, [recipe]);

  const handleNextStep = (stepData: Partial<RecipeFormData>) => {
    if (formData) setFormData((prev) => ({ ...prev!, ...stepData }));
    setStep((s) => s + 1);
  };

  const handlePrevStep = (stepData: Partial<RecipeFormData>) => {
    if (formData) setFormData((prev) => ({ ...prev!, ...stepData }));
    setStep((s) => s - 1);
  };

  const isAdmin = user?.role?.name === "ADMIN";

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
        alert("La recette a bien été modifiée !");
        if (isAdmin) {
          router.push(`/admin/recipes/${recipeId}`);
        } else {
          router.push(`/recipes/${recipeId}`);
        }
      },
      onError: () => {
        alert("Erreur lors de la modification de la recette");
      },
    });
  };

  if (isLoading || !formData) return <p>Chargement en cours...</p>;

  return (
    <section className="form">
      <div className="form__container">
        <h1>Modifier ma recette</h1>
        {step === 1 && (
          <StepInformations
            defaultValues={formData}
            nextStep={handleNextStep}
            existingPicture={formData.existingPicture}
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
            isUpdateRecipe={true}
          />
        )}
      </div>
    </section>
  );
}
