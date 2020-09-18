import { IFamilies } from "../interfaces/IFamily";
import api from "./api";

export const familyService = {
  token: null,

  async getFamilies(): Promise<IFamilies | undefined> {
    try {
      const { data } = await api.get(
        `/api/ecommerce/categorias?api_token=${this.token}`
      );

      return new Promise<IFamilies>((resolve, reject) => {
        resolve(data);
      });
    } catch (err) {
      console.error(err);
    }

    return new Promise<IFamilies>((resolve, reject) => {
      resolve(undefined);
    });
  },
};
