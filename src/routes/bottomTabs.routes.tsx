import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '../config/ColorsConfig';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../pages/Ecommerce/Home';
import Busca from '../pages/Ecommerce/Busca';
import Pedidos from '../pages/Ecommerce/Pedidos';
import Perfil from '../pages/Ecommerce/Perfil';

const { Navigator, Screen } = createBottomTabNavigator();

function BottomTabsRoutes() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 3,
          shadowOffset: 0,
          height: 60,
          backgroundColor: Colors.header.primary
        },
        tabStyle: {
          flexDirection: 'column',
          alignItems:'center',
          justifyContent:'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
          alignItems: 'center',
          marginLeft: 5,
          color:Colors.header.txtInactive
        },
        showLabel: true,
        labelStyle: {
          fontFamily: 'Achivo_700Bold',
          fontSize:13,
          marginLeft: 5,
        },
        inactiveBackgroundColor:Colors.header.primary,
        activeBackgroundColor:Colors.header.bgActive,
        inactiveTintColor:Colors.header.txtInactive,
        activeTintColor:Colors.header.txtActive
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({color, size, focused}) => {
            return (
              <Ionicons name="home" size={size} color="white" />
            );
          }
        }}
      />
      <Screen
        name="Busca"
        component={Busca}
        options={{
          tabBarIcon: ({color, size, focused}) => {
            return (
              <Ionicons name="search" size={size} color="white" />
            );
          }
        }}
      />
      <Screen
        name="Pedidos"
        component={Pedidos}
        options={{
          tabBarIcon: ({color, size, focused}) => {
            return (
              <MaterialCommunityIcons name="cart" size={size} color="white" />
            );
          }
        }}
      />
      <Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({color, size, focused}) => {
            return (
              <Ionicons name="person" size={size} color="white" />
            );
          }
        }}
      />
    </Navigator>
  );
}

export default BottomTabsRoutes;
