import { User } from "@/types/User";

export interface IProfileSectionProps {
    user: User;
    onLogout: () => void;
  }