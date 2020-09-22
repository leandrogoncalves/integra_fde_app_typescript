import { ICartItem } from "./ICartItem";
import { ICategory } from "./ICategories";
import { IFamily } from "./IFamily";
import { IProduct } from "./IProduct";
import { IProfile } from "./IProfiles";
import { ISchool } from "./ISchools";
import { ISubcategories, ISubcategory } from "./ISubcategories";

export interface IEcommerceContextData {
  profile: IProfile | undefined;
  setProfile(profile: IProfile): IProfile | undefined;
  school: ISchool | undefined;
  setSchool(school: ISchool): ISchool | undefined;
  familySelected: IFamily | undefined;
  setFamilySelected(family: IFamily): IFamily | undefined;
  categorySelected: ICategory | undefined;
  setCategorySelected(category: ICategory): ICategory | undefined;
  subCategorySelected: ISubcategory | undefined;
  setSubcategorySelected(subcategory: ISubcategory): ISubcategory | undefined;
  productDetail: IProduct | undefined;
  setProductDetail(product: IProduct): IProduct | undefined;
  productQuantity: number | undefined;
  setProductQuantity(value: number): number | undefined;
  initialBalance: number;
  setInitialBalance(value: number): number;
  totalBalance: number;
  setTotalBalance(value: number): number;
  favoriteProducts: IProduct[];
  setFavoriteProducts(products: IProduct[]): IProduct[];
  searchInputValue: string;
  setSearchInputValue(value: string): string;
  cart: ICartItem[];
  setCart(itens: ICartItem[]): ICartItem[];
  cartTotal: number;
  setCartTotal(): number;
  addToCart(itens: ICartItem[]): void;
  removeFromCart(productId: number): void;
  updateCartItemAmount(productId: number, newAmount: number): void;
}
