import { ICategories } from "../interfaces/ICategories";
// import api from "./api";

export const categoryService = {
  token: null,

  async getCategories(familyId?: string): Promise<ICategories | undefined> {
    try {
      const data = {
        data: [
          {
            id: "123",
            text: "teset",
          },
          {
            id: "456",
            text: "teset",
          },
          {
            id: "789",
            text: "teset",
          },
          {
            id: "018",
            text: "teset",
          },
        ],
      };

      return new Promise<ICategories>((resolve, reject) => {
        resolve(data);
      });
    } catch (err) {
      console.error(err);
    }

    return new Promise<ICategories>((resolve, reject) => {
      resolve([]);
    });
  },
};
