export interface IProduct {
  id: string;
  name: string;
  category: string;
  shotDescription: string;
  fullDescription: string;
  price: string;
  images: string;
}

export interface IProducts {
  [key: string]: IProduct[];
}

export interface IProductsHighlight {
  [key: string]: IProducts[];
}

export interface IProductsMoreSolded {
  [key: string]: IProducts[];
}
