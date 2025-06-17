import { AuthWrapper } from "@/wrappers/AuthWrapper";

import RecipeForm from "@/components/organisms/Forms/RecipeForm";

export default function AjouterRecettePage() {
  return (
    <AuthWrapper>
      <h1>Ajouter une recette</h1>

      <RecipeForm />
    </AuthWrapper>
  );
}
