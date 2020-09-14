export interface ICategory {
  id?: string;
  route: string;
  icon: string;
  text: string;
  iconType: string;
}

export interface ICategories {
  data: ICategory[];
}
