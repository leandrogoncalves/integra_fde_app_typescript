import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MinhaConta from "../../../pages/Ecommerce/MinhaConta";
import { CustomDrawerContent } from "./customDrawerContent";

const Drawer = createDrawerNavigator();

function DrawerMenuMinhaConta() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="MinhaConta" component={MinhaConta} />
    </Drawer.Navigator>
  );
}

export default DrawerMenuMinhaConta;
