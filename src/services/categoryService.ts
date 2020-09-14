import { ICategories } from "../interfaces/ICategories";
// import api from "./api";

export const categoryService = {
  async getCategories(): Promise<ICategories> {
    return new Promise<ICategories>((resolve, reject) => {
      resolve({
        data: [
          {
            route: "DrawerMenuBusca",
            icon: "restaurant",
            text: "Alimentação",
            iconType: "",
          },
          {
            route: "DrawerMenuBusca",
            icon: "broom",
            text: "Higiene e Limpeza",
            iconType: "MaterialCommunityIcons",
          },
          {
            route: "DrawerMenuBusca",
            icon: "chair-rolling",
            text: "Mobiliário",
            iconType: "MaterialCommunityIcons",
          },
          {
            route: "DrawerMenuBusca",
            icon: "power-plug",
            text: "Equipamentos",
            iconType: "MaterialCommunityIcons",
          },
          {
            route: "DrawerMenuBusca",
            icon: "page",
            text: "Papelaria",
            iconType: "Foundation",
          },
          {
            route: "DrawerMenuBusca",
            icon: "computer",
            text: "Informática",
            iconType: "MaterialIcons",
          },
        ],
      });
    });
  },
};
