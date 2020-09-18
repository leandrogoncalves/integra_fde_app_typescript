import { IFamilies } from "../interfaces/IFamily";
import { ServiceBase } from "./ServiceBase";
import api from "./api";

class FamilyService extends ServiceBase {
  async getFamilies(): Promise<IFamilies | undefined> {
    try {
      const { data } = await api.get(
        `/api/ecommerce/familias?api_token=${this.token}`
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
  }
}

export default new FamilyService();
