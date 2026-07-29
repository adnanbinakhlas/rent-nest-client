export type UserRole = "ADMIN" | "LANDLORD" | "TENANT";
export type UserStatus = "ACTIVE" | "INACTIVE" | "BLOCKED";

export interface User {
  id: string;
  fullname: string;
  email: string;
  phone: string;
  avatar: string | null;
  role: UserRole;
  status: UserStatus;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}
