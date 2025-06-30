import { useRouter } from "next/router";
import { AppLayout } from "@/components/layout/AppLayout";
import { AuthWrapper } from "@/wrappers/AuthWrapper";
import RecipeEditForm from "@/components/organisms/Forms/RecipeEditForm";

export default function EditRecipePage() {
  const router = useRouter();
  const { id } = router.query;

  if (!id || typeof id !== "string") return <p>Chargement...</p>;

  return (
    <AuthWrapper>
      <AppLayout>
        <RecipeEditForm recipeId={id} />
      </AppLayout>
    </AuthWrapper>
  );
}
