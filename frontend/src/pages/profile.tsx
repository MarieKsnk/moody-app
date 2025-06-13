import { useAuth } from "@/hooks/useAuth";
import { useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "next/router";
import { LogoutButton } from "@/components/atoms/Buttons/LogoutButton";
import { AuthWrapper } from "@/wrappers/AuthWrapper";

export default function ProfilePage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const logout = useAuthStore((s) => s.logout);

  const handleLogout = () => {
    logout();
    queryClient.clear();
    router.replace("/");
  };

  return (
    <AuthWrapper>
      <main>
        <h1>Mon profil</h1>
        <div>
          <img
            src={user?.profilePicture || "/img/avatar_par_defaut.jpg"}
            alt={`Photo de ${user?.firstName}`}
            width={120}
            height={120}
            style={{ borderRadius: "50%" }}
          />

          <div>
            <p>{user?.firstName}</p>
          </div>

          <div>
            <p>{user?.lastName}</p>
          </div>

          <div>
            <p>{user?.email}</p>
          </div>
        </div>
        <div>
          <LogoutButton
            label="Je me deconnecte"
            ariaLabel="Se deconnecter de Moody"
            onClick={handleLogout}
          />
        </div>
      </main>
    </AuthWrapper>
  );
}
