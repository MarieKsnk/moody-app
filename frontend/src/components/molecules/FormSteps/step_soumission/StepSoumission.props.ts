import { RecipeFormData } from "@/types/RecipeFormData";

export interface IStepSoumissionProps {
  formData: RecipeFormData;
  onSubmit: (data: RecipeFormData) => void;
  prevStep: (data: Partial<RecipeFormData>) => void;
  isUpdateRecipe?: boolean;
}
