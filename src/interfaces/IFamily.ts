import { ICategories } from "./ICategories";

export interface IFamily {
  id?: string;
  route?: string;
  icon?: string;
  text: string;
  iconType?: string;
  group?: ICategories;
}

export interface IFamilies {
  [key: string]: IFamily[];
}
