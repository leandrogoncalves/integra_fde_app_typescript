import React from 'react';
// import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';


export function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Fechar Menu"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
    </DrawerContentScrollView>
  );
}
