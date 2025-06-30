import { ProfilePicture } from "../../atoms/Images/profile_picture";
import { useAuthStore } from "@/stores/authStore";
import { DarkButton } from "../../atoms/Buttons/dark_button";

export default function ProfilePreview() {
  const user = useAuthStore((s) => s.user);
  if (!user) return null;

  return (
    <div className="container">
      <ProfilePicture
        src={user.profilePicture ?? "/img/avatar_par_defaut.jpg"}
        alt={`Photo de profil de ${user.firstName}`}
      />
      <DarkButton label="Voir mon profil" href="/profile" />
    </div>
  );
}
