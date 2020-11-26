import axios from "axios";
import { IFamilies } from "../interfaces/IFamily";
import { ServiceBase } from "./ServiceBase";
import api from "./api";

class FamilyService extends ServiceBase {
  async getFamilies(entityId = null): Promise<IFamilies | undefined> {
    let output = {
      status: false,
      message: "",
    };

    let data = null;

    await api
      .get(`/api/ecommerce/familias/${entityId}?api_token=${this.token}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        console.log("====================================");
        console.log("response.data", response.data);
        console.log("response", response);
        console.log("====================================");
        data = response.data;
        output = {
          status: true,
          message: "",
        };
      })
      .catch((error) => {
        console.log("====================================");
        console.log("error.response", error?.response);
        console.log("error", error);
        console.log("====================================");
        if (error?.response) {
          const statusCode = error.response.status;
          switch (statusCode) {
            case 412:
              output.message = "Usuário ou senha inválidos";
              return output;
            case 404:
              output.message = "Usuário não encontrado";
              return output;
            case 500:
              output.message = "Erro interno do servidor";
              return output;
            default:
              throw new Error("Erro: Codigo de status de retorno inválido");
          }
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log("error.request", error.request);
        } else if (axios.isCancel(error)) {
          console.log("Request canceled", error.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }

        // output.message = error.response.data.message;
      });

    console.log("====================================");
    console.log("output", output);
    console.log("====================================");

    return new Promise<IFamilies>((resolve, reject) => {
      resolve(data);
    });

    // return new Promise<IFamilies>((resolve, reject) => {
    //   resolve(undefined);
    // });
  }
}

export default new FamilyService();
