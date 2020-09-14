import { IUser } from "./IUser";

export interface ILogin {
  access_token: string;
  user: IUser;
}
