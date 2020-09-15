import { IUser } from "./IUser";
import { ILoginCredentials } from "./ILoginCredentials";

export interface IAuthContextData {
  user: IUser;
  token: string;
  loading: boolean;
  login(credentials: ILoginCredentials): Promise<void>;
  logout(): void;
}
