import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../pages/Ecommerce/Home';
import MenuLateral from '../pages/Ecommerce/MenuLateral';
import Pedidos from '../pages/Ecommerce/Pedidos';

const Drawer = createDrawerNavigator();

function DrawerMenuHome() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      headerMode="none"
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Pedidos" component={Pedidos} />
    </Drawer.Navigator>
  );
}

export default DrawerMenuHome;
