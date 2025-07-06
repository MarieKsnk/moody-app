import { useAdminAllAcceptedRecipes } from "@/hooks/useAdminRecipes";

export const AdminLatestAcceptedRecipes = () => {
  const { data: recipes, isLoading, error } = useAdminAllAcceptedRecipes();

  if (isLoading) {
    return (
      <div className="admin-latest-accepted-recipes">
        <p className="admin-latest-accepted-recipes__loading">
          Chargement des recettes...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="admin-latest-accepted-recipes">
        <p className="admin-latest-accepted-recipes__error">
          Erreur lors du chargement des recettes.
        </p>
      </div>
    );
  }

  if (!recipes || recipes.length === 0) {
    return (
      <div className="admin-latest-accepted-recipes">
        <p className="admin-latest-accepted-recipes__empty">
          Aucune recette trouvée.
        </p>
      </div>
    );
  }

  const latestRecipes = [...recipes]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 3);

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <ul className="admin-latest-accepted-recipes">
      {latestRecipes.map((recipe, idx) => (
        <li key={recipe.id} className="admin-latest-accepted-recipes__row">
          <div className="admin-latest-accepted-recipes__informations">
            <span className="admin-latest-accepted-recipes__title">
              {recipe.title}
            </span>
            <span className="admin-latest-accepted-recipes__user">
              {recipe.user?.firstName} {recipe.user?.lastName}
            </span>
          </div>
          <span className="admin-latest-accepted-recipes__date">
            {formatDate(recipe.createdAt)}
          </span>
          {idx !== latestRecipes.length - 1 && (
            <span
              className="admin-latest-accepted-recipes__separator"
              aria-hidden="true"
            />
          )}
        </li>
      ))}
    </ul>
  );
};
