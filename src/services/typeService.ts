import { ServiceBase } from "./ServiceBase";
import api from "./api";

import { IType } from "../interfaces/IType";

class TypeService extends ServiceBase {
  async getTypes(): Promise<IType[] | undefined> {
    try {
      const url = `/api/solicitacao/obter-tipo?api_token=${this.token}`;
      const { data } = await api.get(url);

      return new Promise<IType[]>((resolve, reject) => {
        resolve(data);
      });
    } catch (err) {
      console.error(err);
    }

    return new Promise<IType[]>((resolve, reject) => {
      resolve(undefined);
    });
  }
}

export default new TypeService();
