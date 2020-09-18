import { ICategory } from "./ICategories";
import { IFamily } from "./IFamily";
import { IProduct } from "./IProduct";
import { IProfile } from "./IProfiles";
import { ISchool } from "./ISchools";
import { ISubcategories } from "./ISubcategories";

export interface IEcommerceContextData {
  profile: IProfile;
  school: ISchool;
  setProfile: any;
  setSchool: any;
  familySelected: IFamily;
  setFamilySelected: any;
  categorySelected: ICategory;
  setCategorySelected: any;
  subCategorySelected: ISubcategories;
  setSubcategorySelected: any;
  productDetail: IProduct | undefined;
  setProductDetail: any;
  productQuantity: number | undefined;
  setProductQuantity: any;
  initialBalance: number;
  setInitialBalance: any;
  totalBalance: number;
  setTotalBalance: any;
}
