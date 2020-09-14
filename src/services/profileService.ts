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
            value: "Solicitante - Escola",
          },
          {
            label: "Solicitante - FDE",
            value: "Solicitante - FDE",
          },
        ],
      });
    });
  },
};
