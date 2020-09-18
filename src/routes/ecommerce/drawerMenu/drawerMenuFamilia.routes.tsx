import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Familia from "../../../pages/Ecommerce/Familia";
import { CustomDrawerContent } from "./customDrawerContent";

const Drawer = createDrawerNavigator();

function DrawerMenuFamilia() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Familia" component={Familia} />
    </Drawer.Navigator>
  );
}

export default DrawerMenuFamilia;
