import { useState } from "react";
import { ProfilePicture } from "@/components/atoms/Images/profile_picture";
import { ActionClickButton } from "@/components/atoms/Buttons/action_click_button";
import { IProfileSectionProps } from "./ProfileSection.props";
import { DarkButton } from "@/components/atoms/Buttons/dark_button";
import { ButtonsModal } from "@/components/molecules/Modals/buttons_modal";
import { useDeleteMe } from "@/hooks/useDeleteUser";
import { useRouter } from "next/router";

export const ProfileSection: React.FC<IProfileSectionProps> = ({
  user,
  onLogout,
}) => {
  const [showModal, setShowModal] = useState(false);
  const { mutate: deleteOwnAccount } = useDeleteMe();
  const router = useRouter();

  const handleDeleteAccount = () => {
    deleteOwnAccount(undefined, {
      onSuccess: () => {
        alert("Compte supprimé !");
        router.push("/");
      },
      onError: () => {
        alert("Erreur lors de la suppression du compte.");
      },
    });
  };

  return (
    <section className="profile-section">
      <div className="profile-section__photo">
        <ProfilePicture
          src={user.profilePicture || "/img/avatar_par_defaut.jpg"}
          alt={`Photo de ${user.firstName}`}
        />
      </div>

      <div className="profile-section__info">
        <div className="bloc-names">
          <p className="name">{user.firstName}</p>
          <p className="name">{user.lastName}</p>
        </div>
        <p className="email">{user.email}</p>
      </div>

      <div className="profile-section__buttons">
        <DarkButton label="Modifier mon profil" href="#" />
        <ActionClickButton
          label="Supprimer mon compte"
          className="danger"
          onClick={() => setShowModal(true)}
        />
      </div>

      {showModal && (
        <ButtonsModal
          title="Suppression"
          message="Attention, cette action est irréversible. Es-tu sûr·e de vouloir supprimer ton compte ?"
          primaryLabel="Supprimer mon compte"
          primaryOnClick={handleDeleteAccount}
          secondaryLabel="Annuler"
          secondaryOnClick={() => setShowModal(false)}
        />
      )}
    </section>
  );
};
