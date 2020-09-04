import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Pedidos from '../pages/Ecommerce/Pedidos';
import MenuLateral from '../pages/Ecommerce/MenuLateral';

const Drawer = createDrawerNavigator();

function DrawerMenuPedidos() {
  return (
    <Drawer.Navigator initialRouteName="Pedidos">
      <Drawer.Screen name="Pedidos" component={Pedidos} />
      <Drawer.Screen name="MenuLateral" component={MenuLateral} />
    </Drawer.Navigator>
  );
}

export default DrawerMenuPedidos;
