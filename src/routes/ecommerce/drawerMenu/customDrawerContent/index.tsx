import React from 'react';
// import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';


export function CustomDrawerContent(props) {
  const { navigate } = useNavigation();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Muda Sistema"
        onPress={() => navigate("MudaSistema")}
      />
      <DrawerItem
        label="Selecionar Perfil"
        onPress={() => navigate("SelecionaPerfil")}
      />
      <DrawerItem
        label="Fechar Menu"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
    </DrawerContentScrollView>
  );
}
