import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomDrawerContentGeral } from "./customDrawerContentGeral";
import MudaSistema from "../../pages/MudaSistema";

const Drawer = createDrawerNavigator();

function DrawerMenuMudaSistema() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContentGeral {...props} />}
    >
      <Drawer.Screen name="MudaSistema" component={MudaSistema} />
    </Drawer.Navigator>
  );
}

export default DrawerMenuMudaSistema;
