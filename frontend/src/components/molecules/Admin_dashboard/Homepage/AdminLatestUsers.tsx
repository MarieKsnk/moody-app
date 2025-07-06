import { useAllUsers } from "@/hooks/useAdminUsers";

export const AdminLatestUsers = () => {
  const { data: users, isLoading, error } = useAllUsers();

  if (isLoading) {
    return (
      <div className="admin-latest-users">
        <p className="admin-latest-users__loading">
          Chargement des utilisateurs...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="admin-latest-users">
        <p className="admin-latest-users__error">
          Erreur lors du chargement des utilisateurs.
        </p>
      </div>
    );
  }

  if (!users || users.length === 0) {
    return (
      <div className="admin-latest-users">
        <p className="admin-latest-users__empty">Aucun utilisateur.</p>
      </div>
    );
  }

  const latestUsers = [...users]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 4);

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <ul className="admin-latest-users">
      {latestUsers.map((user, id) => (
        <li key={user.id} className="admin-latest-users__row">
          <span className="admin-latest-users__name">
            {user.firstName} {user.lastName}
          </span>
          <span className="admin-latest-users__date">
            {formatDate(user.createdAt)}
          </span>
          {id !== latestUsers.length - 1 && (
            <span
              className="admin-latest-users__separator"
              aria-hidden="true"
            />
          )}
        </li>
      ))}
    </ul>
  );
};
