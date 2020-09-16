import { ICategories } from "../interfaces/ICategories";
import api from "./api";

export const categoryService = {
  token: null,

  async getCategories(): Promise<ICategories | undefined> {
    try {
      const { data } = await api.get(
        `/api/ecommerce/categorias?api_token=${this.token}`
      );

      return new Promise<ICategories>((resolve, reject) => {
        resolve(data);
      });
    } catch (err) {
      console.error(err);
    }

    return new Promise<ICategories>((resolve, reject) => {
      resolve(undefined);
    });
  },
};
