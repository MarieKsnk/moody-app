export interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profilePicture?: FileList;
  rgpdAccepted: boolean;
}