import { ICategories } from "../interfaces/ICategories";
import { ServiceBase } from "./ServiceBase";
import api from "./api";

class SubcategoryService extends ServiceBase {
  async getSubcategories(
    categoryId?: string
  ): Promise<ICategories | undefined> {
    console.log("====================================");
    console.log("categoryId", categoryId);
    console.log("====================================");
    try {
      const { data } = await api.get(
        `/api/ecommerce/subcategorias?api_token=${this.token}&categoria_id=${categoryId}`
      );

      console.log("data", data);

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

export default new SubcategoryService();
