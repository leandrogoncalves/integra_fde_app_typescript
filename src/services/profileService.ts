import { IProfiles } from "../interfaces/IProfiles";
// import api from "./api";

export const profileService = {
  async getProfiles(): Promise<IProfiles> {
    return new Promise<IProfiles>((resolve, reject) => {
      resolve({
        data: [
          {
            label: "Perfil...",
            value: "",
          },
          {
            label: "Solicitante - Escola",
            value: "123",
          },
          {
            label: "Solicitante - FDE",
            value: "456",
          },
        ],
      });
    });
  },
};
