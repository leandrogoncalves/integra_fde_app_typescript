import { ISolicitations } from "../interfaces/ISolicitations";
import { ServiceBase } from "./ServiceBase";
import api from "./api";

class SolicitationService extends ServiceBase {
  async getSolicitations(): Promise<ISolicitations | undefined> {
    try {
      const { data } = await api.get(
        `/api/solicitacao/list?api_token=${this.token}`
      );

      return data;
    } catch (err) {
      console.error(err);
    }

    return undefined;
  }
}

export default new SolicitationService();
