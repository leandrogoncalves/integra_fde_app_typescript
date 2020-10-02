import { ISolicitations } from "../interfaces/ISolicitations";
import { ISolicitationFilter } from "../interfaces/ISolicitationFilter";

import api from "./api";
import { ServiceBase } from "./ServiceBase";
import formatDate from "../utils/formatDate";

class SolicitationService extends ServiceBase {
  async getMySolicitations(
    filters: ISolicitationFilter
  ): Promise<ISolicitations | []> {
    try {
      // TODO incluir atributo tipo-listagem=1 para buscar minhas solicitacoes
      const queryString = [];

      // if (filters?.numeroSolicitacao) {
      //   queryString.push(`esdid=${filters.numeroSolicitacao}`);
      // }

      if (filters?.situacao) {
        queryString.push(`esdid=${filters.situacao.value}`);
      }

      // if (filters?.tipoObjeto) {
      //   queryString.push(`tobid=${filters.tipo.value}`);
      // }

      if (filters?.assunto) {
        queryString.push(`astid=${filters.assunto.value}`);
      }

      if (filters?.tipo) {
        queryString.push(`tipid=${filters.tipo.value}`);
      }

      if (filters?.periodo) {
        if (filters.periodo?.de) {
          const de = formatDate(filters.periodo.de);
          queryString.push(`data_inicial=${de}`);
        }
        if (filters.periodo?.ate) {
          const ate = formatDate(filters.periodo.ate);
          queryString.push(`data_final=${ate}`);
        }
      }

      const url = `/api/solicitacao/list?api_token=${
        this.token
      }&${queryString.join("&")}`;
      console.log("====================================");
      console.log("url", url);
      console.log("====================================");
      const { data } = await api.get(url);
      return data;
    } catch (err) {
      console.error(err);
    }

    return [];
  }

  async getSolicitationsToAnalysis(): Promise<ISolicitations | []> {
    try {
      const url = `/api/solicitacao/list?api_token=${this.token}&tipo-listagem=2`;
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
