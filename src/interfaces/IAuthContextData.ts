import { IUser } from "./IUser";
import { ILoginCredentials } from "./ILoginCredentials";

export interface IAuthContextData {
  user: IUser;
  loading: boolean;
  login(credentials: ILoginCredentials): Promise<void>;
  logout(): void;
}
