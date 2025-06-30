import { RecipeFormData } from "@/types/RecipeFormData";

export interface IStepEtapesProps {
  defaultValues?: Partial<RecipeFormData>;
  nextStep: (data: Partial<RecipeFormData>) => void;
  prevStep: (data: Partial<RecipeFormData>) => void;
}
