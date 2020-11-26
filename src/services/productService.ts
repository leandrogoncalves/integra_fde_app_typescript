import {
  IProductsHighlight,
  IProductsMoreSolded,
  IProducts,
} from "../interfaces/IProduct";
import { ServiceBase } from "./ServiceBase";
import api from "./api";

class ProductService extends ServiceBase {
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
  }

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
  }

  /**
   * Obtem produtos encontrados na busca
   */
  async getProducts(nome = ""): Promise<IProducts> {
    try {
      const params = [];
      if (nome) {
        params.push(`nome=${nome}`);
      }

      const url = `/api/ecommerce/produtos/todos-moch?api_token=${
        this.token
      }&${params.join("&")}`;

      const { data } = await api.get(url);

      return new Promise<IProducts>((resolve, reject) => {
        resolve(data);
      });
    } catch (err) {
      console.error("erro produtos", err);
    }

    return new Promise<IProducts>((resolve, reject) => {
      resolve(undefined);
    });
  }
}

export default new ProductService();
