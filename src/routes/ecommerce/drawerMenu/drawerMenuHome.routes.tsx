import React from 'react';
import Home from '../../../pages/Ecommerce/Home';

import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { CustomDrawerContent } from './customDrawerContent';

const Drawer = createDrawerNavigator();


function DrawerMenuHome() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home}  />
    </Drawer.Navigator>
  );
}

export default DrawerMenuHome;
