export interface ISubcategory {
  id?: string;
  route: string;
  icon: string;
  text: string;
  iconType: string;
}

export interface ISubcategories {
  [key: string]: ISubcategory[];
}
