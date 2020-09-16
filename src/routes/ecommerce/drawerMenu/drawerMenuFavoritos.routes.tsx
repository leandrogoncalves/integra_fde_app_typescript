import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomDrawerContent } from "./customDrawerContent";
import Favoritos from "../../../pages/Ecommerce/Favoritos";

const Drawer = createDrawerNavigator();

function DrawerMenuFavoritos() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Favoritos" component={Favoritos} />
    </Drawer.Navigator>
  );
}

export default DrawerMenuFavoritos;
