import { RecipeFormData } from "@/types/RecipeFormData";

export interface IStepCategoriesProps {
  defaultValues?: Partial<RecipeFormData>;
  nextStep: (data: Partial<RecipeFormData>) => void;
  prevStep: (data: Partial<RecipeFormData>) => void;
}
