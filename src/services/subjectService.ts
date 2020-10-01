import { IFamilies } from "../interfaces/IFamily";
import { ServiceBase } from "./ServiceBase";
import api from "./api";

import { ISubject } from "../interfaces/ISubject";

class SubjectService extends ServiceBase {
  async getSubjects(): Promise<ISubject | undefined> {
    try {
      const url = `/api/solicitacao/obter-assunto?api_token=${this.token}`;
      const { data } = await api.get(url);

      return new Promise<ISubject>((resolve, reject) => {
        resolve(data);
      });
    } catch (err) {
      console.error(err);
    }

    return new Promise<ISubject>((resolve, reject) => {
      resolve(undefined);
    });
  }
}

export default new SubjectService();
