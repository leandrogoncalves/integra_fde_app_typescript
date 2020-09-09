import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Busca from '../../../pages/Ecommerce/Busca';
import { CustomDrawerContent } from './customDrawerContent';

const Drawer = createDrawerNavigator();

function DrawerMenuBusca() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      >
      <Drawer.Screen name="Busca" component={Busca} />
    </Drawer.Navigator>
  );
}

export default DrawerMenuBusca;
