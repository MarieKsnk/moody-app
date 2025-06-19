import { useAuth } from "@/hooks/useAuth";
import { useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "next/router";
import { AppLayout } from "@/components/layout/AppLayout";
import { AuthWrapper } from "@/wrappers/AuthWrapper";
import { ProfileSection } from "@/components/molecules/profileSection";

export default function ProfilePage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const logout = useAuthStore((s) => s.logout);
  const { user } = useAuth();

  const handleLogout = () => {
    logout();
    queryClient.clear();
    router.replace("/");
  };

  return (
    <AuthWrapper>
      <AppLayout>
        <main className="profile-page">
          {user && (
            <ProfileSection user={user} onLogout={handleLogout} />
          )}
        </main>
      </AppLayout>
    </AuthWrapper>
  );
}
