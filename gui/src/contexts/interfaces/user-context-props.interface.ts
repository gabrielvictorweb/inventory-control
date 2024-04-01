import { UserInterface } from "@/services/auth/interfaces";

export interface UserContextData {
  user: UserInterface | undefined;
  auth: (email: string, password: string) => Promise<UserInterface | undefined>;
  logout: () => void;
}
