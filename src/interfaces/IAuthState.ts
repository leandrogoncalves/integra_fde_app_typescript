import { IUser } from "./IUser";

export interface IAuthState {
  token: string;
  user: IUser;
}
