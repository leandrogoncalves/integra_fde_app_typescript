import api from "./api";
import { ILogin } from "../interfaces/ILogin";

const authService = {
  async login(usuario: string, senha: string): Promise<ILogin> {
    let output = {
      status: false,
      message: "",
    };

    await api
      .post("/api/login", { usuario, senha })
      .then((response) => {
        output = {
          ...response.data,
          status: true,
        };
      })
      .catch((error) => {
        const statusCode = error.response.status;

        if (!error.response.data.message) {
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
        }

        output.message = error.response.data.message;
      });

    return output;
  },
};

export default authService;
