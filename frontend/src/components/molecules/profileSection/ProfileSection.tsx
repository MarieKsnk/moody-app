import { ProfilePicture } from "@/components/atoms/ProfilePicture";
import { LogoutLink } from "@/components/atoms/logoutLink";
import { IProfileSectionProps } from "./ProfileSection.props";

export const ProfileSection: React.FC<IProfileSectionProps> = ({
    user,
    onLogout
  }) => {return (
    <section className="profile-section">
      <div className="profile-section__photo">
        <ProfilePicture
          src={user.profilePicture || "/img/avatar_par_defaut.jpg"}
          alt={`Photo de ${user.firstName}`}
        />
      </div>

      <div className="profile-section__info">
        <p className="profile-section__name">{user.firstName} {user.lastName}</p>
        <p className="profile-section__email">{user.email}</p>
      </div>

      <div className="profile-section__logout">
        <LogoutLink label="Déconnexion" onClick={onLogout} />
      </div>
    </section>
  );
}
