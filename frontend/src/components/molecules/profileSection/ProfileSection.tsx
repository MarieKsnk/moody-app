import { ProfilePicture } from "@/components/atoms/ProfilePicture";
import { LogoutLink } from "@/components/atoms/logoutLink";
import { IProfileSectionProps } from "./ProfileSection.props";
import { DarkButton } from "@/components/atoms/DarkButton";

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
        <LogoutLink label="Je me deconnecte" onClick={onLogout} />
      </div>
    </section>
  );
};
