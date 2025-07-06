import { useRouter } from "next/router";
import { AdminLayout } from "@/components/layout/Admin_dashboard";
import { AdminWrapper } from "@/wrappers/AdminWrapper";
import RecipeEditForm from "@/components/organisms/Forms/RecipeEditForm";

export default function AdminEditRecipePage() {
  const router = useRouter();
  const { id } = router.query;

  if (!id || typeof id !== "string") return <p>Chargement...</p>;

  return (
    <AdminWrapper>
      <AdminLayout>
        <RecipeEditForm recipeId={id} />
      </AdminLayout>
    </AdminWrapper>
  );
}
