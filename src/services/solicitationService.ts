import { ISolicitations } from "../interfaces/ISolicitations";
import api from "./api";

export const solicitationService = {
  token: null,

  async getSolicitations(): Promise<ISolicitations | undefined> {
    try {
      const { data } = await api.get(
        `/api/solicitacao/list?api_token=${this.token}`
      );

      return new Promise<ISolicitations>((resolve, reject) => {
        resolve(data);
      });
    } catch (err) {
      console.error(err);
    }

    return new Promise<ISolicitations>((resolve, reject) => {
      resolve(undefined);
    });
  },
};
