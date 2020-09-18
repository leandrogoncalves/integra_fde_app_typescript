import { ICategories } from "../interfaces/ICategories";
import { ServiceBase } from "./ServiceBase";
import api from "./api";

class CategoryService extends ServiceBase {
  async getCategories(familyId?: string): Promise<ICategories | undefined> {
    try {
      const { data } = await api.get(
        `/api/ecommerce/categorias?api_token=${this.token}&familia_id=${familyId}`
      );

      return new Promise<ICategories>((resolve, reject) => {
        resolve(data);
      });
    } catch (err) {
      console.error(err);
    }

    return new Promise<ICategories>((resolve, reject) => {
      resolve([]);
    });
  }
}

export default new CategoryService();
