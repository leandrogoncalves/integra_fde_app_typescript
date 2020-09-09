import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '../../config/ColorsConfig';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Busca from '../../pages/Ecommerce/Busca';
import Pedidos from '../../pages/Ecommerce/Pedidos';
import Perfil from '../../pages/Ecommerce/Perfil';
import DrawerMenuHome from './drawerMenu/drawerMenuHome.routes';
import DrawerMenuBusca from './drawerMenu/drawerMenuBusca.routes';
import DrawerMenuPedidos from './drawerMenu/drawerMenuPedidos.routes';
import DrawerMenuPerfil from './drawerMenu/drawerMenuPerfil.routes';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabsRoutes: React.FC = () => (
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
      name="DrawerMenuHome"
      component={DrawerMenuHome}
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
      name="DrawerMenuBusca"
      component={DrawerMenuBusca}
      options={{
        tabBarLabel: 'Buscar',
        tabBarIcon: ({color, size, focused}) => {
          return (
            <Ionicons name="search" size={size} color="white" />
          );
        }
      }}
    />
    <Screen
      name="DrawerMenuPedidos"
      component={DrawerMenuPedidos}
      options={{
        tabBarLabel: 'Pedido',
        tabBarIcon: ({color, size, focused}) => {
          return (
            <MaterialCommunityIcons name="cart" size={size} color="white" />
          );
        }
      }}
    />
    <Screen
      name="DrawerMenuPerfil"
      component={DrawerMenuPerfil}
      options={{
        tabBarLabel: 'Perfil',
        tabBarIcon: ({color, size, focused}) => {
          return (
            <Ionicons name="person" size={size} color="white" />
          );
        }
      }}
    />
  </Navigator>
);

export default BottomTabsRoutes;
