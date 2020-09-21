import { ICartItem } from "./ICartItem";
import { ICategory } from "./ICategories";
import { IFamily } from "./IFamily";
import { IProduct } from "./IProduct";
import { IProfile } from "./IProfiles";
import { ISchool } from "./ISchools";
import { ISubcategories } from "./ISubcategories";

export interface IEcommerceContextData {
  profile: IProfile | undefined;
  school: ISchool | undefined;
  setProfile: any;
  setSchool: any;
  familySelected: IFamily | undefined;
  setFamilySelected: any;
  categorySelected: ICategory | undefined;
  setCategorySelected: any;
  subCategorySelected: ISubcategories | undefined;
  setSubcategorySelected: any;
  productDetail: IProduct | undefined;
  setProductDetail: any;
  productQuantity: number | undefined;
  setProductQuantity: any;
  initialBalance: number;
  setInitialBalance: any;
  totalBalance: number;
  setTotalBalance: any;
  favoriteProducts: IProduct[];
  setFavoriteProducts: any;
  searchInputValue: string;
  setSearchInputValue: any;
  cart: ICartItem[];
  setCart: any;
  addToCart: any;
  removeFromCart: any;
}
