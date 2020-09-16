import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Carrinho from "../../../pages/Ecommerce/Carrinho";
import { CustomDrawerContent } from "./customDrawerContent";

const Drawer = createDrawerNavigator();

function DrawerMenuCarrinho() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Carrinho" component={Carrinho} />
    </Drawer.Navigator>
  );
}

export default DrawerMenuCarrinho;
