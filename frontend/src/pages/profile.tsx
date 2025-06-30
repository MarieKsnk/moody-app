import { AppLayout } from "@/components/layout/AppLayout";
import { AuthWrapper } from "@/wrappers/AuthWrapper";
import { ProfileMainSection } from "@/components/organisms/Profile/ProfileMainSection";

export default function ProfilePage() {
  return (
    <AuthWrapper>
      <AppLayout>
        <ProfileMainSection />
      </AppLayout>
    </AuthWrapper>
  );
}
