import { IProduct } from "./IProduct";
import { IProfile } from "./IProfiles";
import { ISchool } from "./ISchools";

export interface IEcommerceContextData {
  profile: IProfile;
  school: ISchool;
  setProfile: any;
  setSchool: any;
  productDetail: IProduct | undefined;
  setProductDetail: any;
  productQuantity: number | undefined;
  setProductQuantity: any;
  initialBalance: number;
  totalBalance: number;
}
