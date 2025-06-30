import { RecipeFormData } from "@/types/RecipeFormData";

export interface IStepIngredientsProps {
  defaultValues?: Partial<RecipeFormData>;
  nextStep: (data: Partial<RecipeFormData>) => void;
  prevStep: (data: Partial<RecipeFormData>) => void;
}
