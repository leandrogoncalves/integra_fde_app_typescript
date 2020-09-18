export interface IFamily {
  id?: string;
  route: string;
  icon: string;
  text: string;
  iconType: string;
}

export interface IFamilies {
  [key: string]: IFamily[];
}
