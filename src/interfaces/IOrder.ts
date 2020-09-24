import { ICartItem } from "./ICartItem";
import { ISchool } from "./ISchools";
import { IUser } from "./IUser";

export interface IOrder {
  number: number;
  cartOrder: ICartItem[];
  date: any;
  productAmount?: any;
  itensAmount?: number;
  totalValue: number;
  user: IUser;
  school: ISchool | undefined;
}

export interface IOrders {
  orders: IOrder[];
}
