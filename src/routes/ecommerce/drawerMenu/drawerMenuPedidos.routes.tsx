import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Pedidos from '../../../pages/Ecommerce/Pedidos';
import { CustomDrawerContent } from './customDrawerContent';

const Drawer = createDrawerNavigator();

function DrawerMenuPedidos() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Pedidos" component={Pedidos} />
    </Drawer.Navigator>
  );
}

export default DrawerMenuPedidos;
