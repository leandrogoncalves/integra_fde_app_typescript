import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../../config/ColorsConfig";

import DrawerMenuHome from "./drawerMenu/drawerMenuHome.routes";
import DrawerMenuFamilia from "./drawerMenu/drawerMenuFamilia.routes";
import DrawerMenuFavoritos from "./drawerMenu/drawerMenuFavoritos.routes";
import DrawerMenuCarrinho from "./drawerMenu/drawerMenuCarrinho.routes";
import DrawerMenuMinhaConta from "./drawerMenu/drawerMenuMinhaConta.routes";

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabsRoutes: React.FC = () => (
  <Navigator
    tabBarOptions={{
      style: {
        elevation: 3,
        shadowOffset: 0,
        height: 60,
        backgroundColor: Colors.header.primary,
      },
      tabStyle: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      },
      iconStyle: {
        flex: 0,
        width: 20,
        height: 20,
        alignItems: "center",
        marginLeft: 5,
      },
      showLabel: true,
      labelStyle: {
        fontFamily: "Achivo_700Bold",
        fontSize: 13,
        marginLeft: 5,
      },
      inactiveBackgroundColor: Colors.header.primary,
      activeBackgroundColor: Colors.header.bgActive,
      inactiveTintColor: "#999",
      activeTintColor: "#fff",
    }}
  >
    <Screen
      name="DrawerMenuHome"
      component={DrawerMenuHome}
      options={{
        tabBarLabel: "Inicio",
        tabBarIcon: ({ color, size, focused }) => {
          return <Ionicons name="home" size={size} color="white" />;
        },
      }}
    />
    <Screen
      name="DrawerMenuFamilia"
      component={DrawerMenuFamilia}
      options={{
        tabBarLabel: "Buscar",
        tabBarIcon: ({ color, size, focused }) => {
          return <Ionicons name="search" size={size} color="white" />;
        },
      }}
    />
    <Screen
      name="DrawerMenuFavoritos"
      component={DrawerMenuFavoritos}
      options={{
        tabBarLabel: "Favoritos",
        tabBarIcon: ({ color, size, focused }) => {
          return <Feather name="heart" size={size} color="white" />;
        },
      }}
    />
    <Screen
      name="DrawerMenuCarrinho"
      component={DrawerMenuCarrinho}
      options={{
        tabBarLabel: "Carrinho",
        tabBarIcon: ({ color, size, focused }) => {
          return (
            <MaterialCommunityIcons name="cart" size={size} color="white" />
          );
        },
      }}
    />
    <Screen
      name="DrawerMenuPerfil"
      component={DrawerMenuMinhaConta}
      options={{
        tabBarLabel: "Conta",
        tabBarIcon: ({ color, size, focused }) => {
          return <Ionicons name="person" size={size} color="white" />;
        },
      }}
    />
  </Navigator>
);

export default BottomTabsRoutes;
