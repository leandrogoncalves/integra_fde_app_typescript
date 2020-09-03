import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Perfil from '../pages/Ecommerce/Perfil';
import Busca from '../pages/Ecommerce/Busca';
import Pedidos from '../pages/Ecommerce/Pedidos';
import Home from '../pages/Ecommerce/Home';

const { Navigator, Screen } = createBottomTabNavigator();

function TabsRoutes() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 3,
          shadowOffset: 0,
          height: 60,
          backgroundColor: '#2f4050'
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
          marginLeft: 5
        },
        showLabel: true,
        labelStyle: {
          fontFamily: 'Achivo_700Bold',
          fontSize:13,
          marginLeft: 5,
        },
        inactiveBackgroundColor:'#2f4050',
        activeBackgroundColor:'#273848',
        inactiveTintColor:'#c1bccc',
        activeTintColor:'#fff'
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
              <MaterialCommunityIcons name="cart" size={24} color="white" />
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

export default TabsRoutes;
