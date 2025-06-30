import { AuthWrapper } from "@/wrappers/AuthWrapper";
import { AppLayout } from "@/components/layout/AppLayout";

import RecipeForm from "@/components/organisms/Forms/RecipeForm";

export default function AjouterRecettePage() {
  return (
    <AuthWrapper>
      <AppLayout>
        <RecipeForm />
      </AppLayout>
    </AuthWrapper>
  );
}
