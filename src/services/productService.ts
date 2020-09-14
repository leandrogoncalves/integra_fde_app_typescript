import {
  IProductsHighlight,
  IProductsMoreSolded,
  IProducts,
} from "../interfaces/IProduct";
// import api from "./api";

export const productService = {
  /**
   * Obtem produtos em destaque
   */
  async getProductsHighlight(): Promise<IProductsHighlight> {
    return new Promise<IProductsHighlight>((resolve, reject) => {
      resolve({
        data: [
          {
            productList: [
              {
                id: "prd1",
                name: "Nome do produto 1",
                category: "Alimentação",
                shotDescription:
                  "Descrição curta dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa",
                fullDescription:
                  "Descrição completa dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa",
                price: "199,00",
                images: "",
              },
              {
                id: "prd1",
                name: "Nome do produto 1",
                category: "Alimentação",
                shotDescription:
                  "Descrição curta dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa",
                fullDescription:
                  "Descrição completa dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa",
                price: "199,00",
                images: "",
              },
            ],
          },
          {
            productList: [
              {
                id: "prd1",
                name: "Nome do produto 1",
                category: "Alimentação",
                shotDescription:
                  "Descrição curta dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa",
                fullDescription:
                  "Descrição completa dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa",
                price: "199,00",
                images: "",
              },
              {
                id: "prd1",
                name: "Nome do produto 1",
                category: "Alimentação",
                shotDescription:
                  "Descrição curta dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa",
                fullDescription:
                  "Descrição completa dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa",
                price: "199,00",
                images: "",
              },
            ],
          },
        ],
      });
    });
  },

  /**
   * Obtem produtos mais vendidos
   */
  async getProductsMoreSolded(): Promise<IProductsMoreSolded> {
    return new Promise<IProductsMoreSolded>((resolve, reject) => {
      resolve({
        data: [
          {
            productList: [
              {
                id: "prd1",
                name: "Nome do produto 1",
                category: "Alimentação",
                shotDescription:
                  "Descrição curta dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa",
                fullDescription:
                  "Descrição completa dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa",
                price: "199,00",
                images: "",
              },
              {
                id: "prd1",
                name: "Nome do produto 1",
                category: "Alimentação",
                shotDescription:
                  "Descrição curta dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa",
                fullDescription:
                  "Descrição completa dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa",
                price: "199,00",
                images: "",
              },
            ],
          },
          {
            productList: [
              {
                id: "prd1",
                name: "Nome do produto 1",
                category: "Alimentação",
                shotDescription:
                  "Descrição curta dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa",
                fullDescription:
                  "Descrição completa dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa",
                price: "199,00",
                images: "",
              },
              {
                id: "prd1",
                name: "Nome do produto 1",
                category: "Alimentação",
                shotDescription:
                  "Descrição curta dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa",
                fullDescription:
                  "Descrição completa dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa",
                price: "199,00",
                images: "",
              },
            ],
          },
        ],
      });
    });
  },

  /**
   * Obtem produtos encontrados na busca
   */
  async getProductsFound(): Promise<IProducts> {
    return new Promise<IProducts>((resolve, reject) => {
      resolve({
        data: [
          {
            id: "prd1",
            name: "Nome do produto 1",
            category: "Alimentação",
            shotDescription:
              "Descrição curta dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa",
            fullDescription:
              "Descrição completa dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa",
            price: "199,00",
            images: "",
          },
          {
            id: "prd1",
            name: "Nome do produto 1",
            category: "Alimentação",
            shotDescription:
              "Descrição curta dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa",
            fullDescription:
              "Descrição completa dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa",
            price: "199,00",
            images: "",
          },
          {
            id: "prd1",
            name: "Nome do produto 1",
            category: "Alimentação",
            shotDescription:
              "Descrição curta dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa",
            fullDescription:
              "Descrição completa dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa",
            price: "199,00",
            images: "",
          },
          {
            id: "prd1",
            name: "Nome do produto 1",
            category: "Alimentação",
            shotDescription:
              "Descrição curta dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa",
            fullDescription:
              "Descrição completa dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa",
            price: "199,00",
            images: "",
          },
          {
            id: "prd1",
            name: "Nome do produto 1",
            category: "Alimentação",
            shotDescription:
              "Descrição curta dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa",
            fullDescription:
              "Descrição completa dsa dsa fdsa fds afds afd afdsa fds afds fas dfa fdsa",
            price: "199,00",
            images: "",
          },
        ],
      });
    });
  },
};
