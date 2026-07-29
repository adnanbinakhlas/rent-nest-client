import { User } from "@/types/user";

export interface LoginData {
  accessToken: string;
  refreshToken: string;
  user: User;
}
