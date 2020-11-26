import { ISchools } from "../interfaces/ISchools";
// import api from "./api";

export const schoolService = {
  async getSchools(): Promise<ISchools> {
    return new Promise<ISchools>((resolve, reject) => {
      resolve({
        data: [
          {
            label: "Escola...",
            value: "",
          },
          {
            label: "ABILIO RAPOSO FERRAZ JUNIOR",
            value: "710",
          },
          {
            label: "ADA CARIANI AVALONE PROFA",
            value: "5058",
          },
          {
            label: "ADAIL JARBAS DUCLOS",
            value: "3484",
          },
          {
            label: "ADALBERTO MECCA SAMPAIO PROFESSOR",
            value: "4906",
          },
          {
            label: "ADALGISA CAVEZZALE DE CAMPOS PROFA",
            value: "2555",
          },
          {
            label: "ADAMASTOR BAPTISTA PROF",
            value: "655",
          },
          {
            label: "ADELMO FRANCISCO DA SILVA",
            value: "4006",
          },
          {
            label: "ADERVAL DA SILVA PROF",
            value: "4359",
          },
          {
            label: "ADOLPHO THOMAS DE AQUINO",
            value: "1835",
          },
          {
            label: "ADONIAS FILHO",
            value: "9013",
          },
          {
            label: "AFONSO CAFARO",
            value: "2154",
          },
        ],
      });
    });
  },
};
