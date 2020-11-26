import axios from "axios";
import api from "./api";
import { ILogin } from "../interfaces/ILogin";

const authService = {
  async login(usuario: string, senha: string): Promise<ILogin> {
    let output = {
      status: false,
      message: "",
    };

    const formData = new FormData();
    // formData.append("usuario", usuario);
    // formData.append("senha", senha);
    // console.log("====================================");
    // console.log("formData", formData);
    // console.log("====================================");

    await api
      .post(
        "/api/login",
        { usuario, senha },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        console.log("====================================");
        console.log("response.data", response.data);
        console.log("response", response);
        console.log("====================================");
        output = {
          ...response.data,
          status: true,
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

    return output;
  },
};

export default authService;
