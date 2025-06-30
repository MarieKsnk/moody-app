import { ProfilePicture } from "@/components/atoms/Images/profile_picture";
import { ActionClickButton } from "@/components/atoms/Buttons/action_click_button";
import { IProfileSectionProps } from "./ProfileSection.props";
import { DarkButton } from "@/components/atoms/Buttons/dark_button";

export const ProfileSection: React.FC<IProfileSectionProps> = ({
  user,
  onLogout,
}) => {
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
        <DarkButton label="Modifier mon profil" href="#"></DarkButton>
        <ActionClickButton label="Je me déconnecte" onClick={onLogout} />
      </div>
    </section>
  );
};
