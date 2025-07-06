import { useState } from "react";
import { ProfilePicture } from "@/components/atoms/Images/profile_picture";
import { ActionClickButton } from "@/components/atoms/Buttons/action_click_button";
import { AdminTitleMain } from "@/components/atoms/Admin_dashboard/admin_title_main";
import { ActionLinkButton } from "@/components/atoms/Buttons/action_link_button";
import { AdminButton } from "@/components/atoms/Admin_dashboard/admin_button";
import { useRouter } from "next/router";
import { useUserById, useDeleteUser } from "@/hooks/useAdminUsers";
import { ButtonsModal } from "@/components/molecules/Modals/buttons_modal";

export const AdminUserIdSection = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: user, isLoading, isError } = useUserById(id as string);
  const { mutate: deleteUser } = useDeleteUser(id as string);

  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    deleteUser(undefined, {
      onSuccess: () => {
        alert("Utilisateur supprimé !");
        router.push("/admin/users");
      },
      onError: () => {
        alert("Erreur lors de la suppression.");
      },
    });
  };

  if (isLoading) {
    return (
      <div className="admin-user-section">
        <p className="admin-user-section__loading">
          Chargement de l'utilisateur...
        </p>
      </div>
    );
  }

  if (isError || !user) {
    return (
      <div className="admin-user-section">
        <p className="admin-user-section__error">Utilisateur introuvable.</p>
      </div>
    );
  }

  return (
    <section className="admin-user-section">
      <AdminTitleMain text="Utilisateur" />
      <div className="admin-user-section__picture">
        <ProfilePicture
          src={user.profilePicture || "/img/avatar_par_defaut.jpg"}
          alt={`Photo de ${user.firstName} ${user.lastName}`}
        />
      </div>
      <div className="admin-user-section__info">
        <p className="admin-user-section__name">
          {user.firstName} {user.lastName}
        </p>
        <p className="admin-user-section__email">{user.email}</p>
      </div>
      <div className="admin-user-section__buttons">
        <ActionLinkButton
          label="Modifier"
          href={`/admin/users/edit/${user.id}`}
        />
        <ActionClickButton
          label="Supprimer cet utilisateur"
          onClick={() => setShowModal(true)}
        />
        <AdminButton
          href="/admin/users"
          label="Tous les utilisateurs"
          className="button-return"
        />
      </div>

      {showModal && (
        <ButtonsModal
          title="Suppression"
          message="Es-tu sûr·e de vouloir supprimer cet utilisateur ?"
          primaryLabel="Supprimer l'utilisateur"
          primaryOnClick={handleDelete}
          secondaryLabel="Annuler"
          secondaryOnClick={() => setShowModal(false)}
        />
      )}
    </section>
  );
};
