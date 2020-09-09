import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Perfil from '../../../pages/Ecommerce/Perfil';
import { CustomDrawerContent } from './customDrawerContent';

const Drawer = createDrawerNavigator();

function DrawerMenuPerfil() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Perfil" component={Perfil} />
    </Drawer.Navigator>
  );
}

export default DrawerMenuPerfil;
