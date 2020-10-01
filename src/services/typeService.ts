import { IFamilies } from "../interfaces/IFamily";
import { ServiceBase } from "./ServiceBase";
import api from "./api";

import { ISituations } from "../interfaces/ISituation";

class SituationService extends ServiceBase {
  async getSituations(): Promise<ISituations | undefined> {
    try {
      const url = `/api/solicitacao/obter-tipo?api_token=${this.token}`;
      const { data } = await api.get(url);

      return new Promise<ISituations>((resolve, reject) => {
        resolve(data);
      });
    } catch (err) {
      console.error(err);
    }

    return new Promise<ISituations>((resolve, reject) => {
      resolve(undefined);
    });
  }
}

export default new SituationService();
