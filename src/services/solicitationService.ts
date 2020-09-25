import { ISolicitations } from "../interfaces/ISolicitations";
import { ServiceBase } from "./ServiceBase";
import api from "./api";

class SolicitationService extends ServiceBase {
  async getSolicitations(): Promise<ISolicitations | []> {
    try {
      const url = `/api/solicitacao/list?api_token=${this.token}`;
      const { data } = await api.get(url);
      return data;
    } catch (err) {
      console.error(err);
    }

    return [];
  }

  async getDetails(solitacaoId: number): Promise<ISolicitations | []> {
    try {
      const url = `/api/solicitacao/obter-detalhes/${solitacaoId}?api_token=${this.token}`;
      const { data } = await api.get(url);
      return data;
    } catch (err) {
      console.error(err);
    }

    return [];
  }
}

export default new SolicitationService();
