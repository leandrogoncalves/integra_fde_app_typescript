import { IProduct } from "./IProduct";

export interface IEcommerceContextData {
  profile: string;
  school: string;
  setProfile: any;
  setSchool: any;
  productDetail: IProduct | undefined;
  setProductDetail: any;
}
