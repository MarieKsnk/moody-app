import { useAdminPendingRecipes } from "@/hooks/useAdminRecipes";
import { AdminLinkRedirection } from "@/components/atoms/Admin_dashboard/admin_link_redirection";

export const AdminPendingRecipesList = () => {
  const { recipes, isLoading, error } = useAdminPendingRecipes();

  if (isLoading) {
    return (
      <div className="admin-all-recipes">
        <p className="admin-all-recipes__loading">Chargement des recettes...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="admin-all-recipes">
        <p className="admin-all-recipes__error">
          Erreur lors du chargement des recettes.
        </p>
      </div>
    );
  }

  if (!recipes || recipes.length === 0) {
    return (
      <div className="admin-all-recipes">
        <p className="admin-all-recipes__empty">Aucune recette en attente.</p>
      </div>
    );
  }

  const allRecipes = [...recipes].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <ul className="admin-pending-recipes">
      {allRecipes.map((recipe, id) => (
        <li key={recipe.id} className="admin-pending-recipes__row">
          <div className="admin-pending-recipes__informations">
            <span className="admin-pending-recipes__title">{recipe.title}</span>
            <span className="admin-pending-recipes__user">
              {recipe.user?.firstName} {recipe.user?.lastName}
            </span>
          </div>
          <span className="admin-pending-recipes__date">
            {formatDate(recipe.createdAt)}
          </span>
          <div className="admin-all-recipes__link">
            <AdminLinkRedirection
              label="Voir la recette"
              href={`/admin/recipes/${recipe.id}`}
            />
          </div>
          {id !== allRecipes.length - 1 && (
            <span
              className="admin-pending-recipes__separator"
              aria-hidden="true"
            />
          )}
        </li>
      ))}
    </ul>
  );
};
