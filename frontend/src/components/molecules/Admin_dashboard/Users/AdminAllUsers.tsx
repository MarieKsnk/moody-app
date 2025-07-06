import { useAllUsers } from "@/hooks/useAdminUsers";
import { AdminLinkRedirection } from "@/components/atoms/Admin_dashboard/admin_link_redirection";

export const AdminAllUsers = () => {
  const { data: users, isLoading, error } = useAllUsers();

  if (isLoading) {
    return (
      <div className="admin-all-users">
        <p className="admin-all-users__loading">
          Chargement des utilisateurs...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="admin-all-users">
        <p className="admin-all-users__error">
          Erreur lors du chargement des utilisateurs.
        </p>
      </div>
    );
  }

  if (!users || users.length === 0) {
    return (
      <div className="admin-all-users">
        <p className="admin-all-users__empty">Aucun utilisateur trouvé.</p>
      </div>
    );
  }

  const sortedUsers = [...users].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <ul className="admin-all-users">
      {sortedUsers.map((user, id) => (
        <li key={user.id} className="admin-all-users__row">
          <span className="admin-all-users__user">
            {user.firstName} {user.lastName}
          </span>
          <span className="admin-all-users__date">
            {formatDate(user.createdAt)}
          </span>
          <div className="admin-all-recipes__link">
            <AdminLinkRedirection
              label="Voir l'utilisateur"
              href={`/admin/users/${user.id}`}
            />
          </div>
          {id !== sortedUsers.length - 1 && (
            <span className="admin-all-users__separator" aria-hidden="true" />
          )}
        </li>
      ))}
    </ul>
  );
};
