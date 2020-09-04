import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Busca from '../pages/Ecommerce/Busca';
import MenuLateral from '../pages/Ecommerce/MenuLateral';

const Drawer = createDrawerNavigator();

function DrawerMenuBusca() {
  return (
    <Drawer.Navigator initialRouteName="Busca">
      <Drawer.Screen name="Busca" component={Busca} />
      <Drawer.Screen name="MenuLateral" component={MenuLateral} />
    </Drawer.Navigator>
  );
}

export default DrawerMenuBusca;
