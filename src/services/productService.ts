import {
  IProductsHighlight,
  IProductsMoreSolded,
  IProducts,
} from "../interfaces/IProduct";
import api from "./api";

export const productService = {
  token: null,
  /**
   * Obtem produtos em destaque
   */
  async getProductsHighlight(): Promise<IProductsHighlight | undefined> {
    try {
      const { data } = await api.get(
        `/api/ecommerce/produtos/destaque?api_token=${this.token}`
      );

      return new Promise<IProductsHighlight>((resolve, reject) => {
        resolve(data);
      });
    } catch (err) {
      console.error(err);
    }

    return new Promise<IProductsHighlight>((resolve, reject) => {
      resolve(undefined);
    });
  },

  /**
   * Obtem produtos mais vendidos
   */
  async getProductsMoreSolded(): Promise<IProductsMoreSolded> {
    try {
      const { data } = await api.get(
        `/api/ecommerce/produtos/mais-vendidos?api_token=${this.token}`
      );

      return new Promise<IProductsMoreSolded>((resolve, reject) => {
        resolve(data);
      });
    } catch (err) {
      console.error(err);
    }

    return new Promise<IProductsMoreSolded>((resolve, reject) => {
      resolve(undefined);
    });
  },

  /**
   * Obtem produtos encontrados na busca
   */
  async getProductsFound(): Promise<IProducts> {
    try {
      const { data } = await api.get(
        `/api/ecommerce/produtos/todos?api_token=${this.token}`
      );

      return new Promise<IProducts>((resolve, reject) => {
        resolve(data);
      });
    } catch (err) {
      console.error(err);
    }

    return new Promise<IProducts>((resolve, reject) => {
      resolve(undefined);
    });
  },
};
