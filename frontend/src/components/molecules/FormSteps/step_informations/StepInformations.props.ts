import { RecipeFormData } from "@/types/RecipeFormData";

export interface IStepInformationsProps {
  defaultValues?: Partial<RecipeFormData>;
  nextStep: (data: Partial<RecipeFormData>) => void;
  existingPicture?: string;
}
