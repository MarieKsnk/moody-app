export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profilePicture?: string;
  rgpdAccepted?: boolean;
}