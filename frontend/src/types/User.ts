export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profilePicture?: string;
  rgpdAccepted?: boolean;
  role: { id: string; name: string };
  createdAt: string;
}
