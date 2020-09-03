import React from 'react';
import { Colors } from '../config/ColorsConfig';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProdutoGeral from '../pages/Ecommerce/Produto/ProdutoGeral';
import ProdutoInformacoes from '../pages/Ecommerce/Produto/ProdutoInformacoes';

const TopTabs = createMaterialTopTabNavigator();

function TopTabsProduct() {
  return (
    <TopTabs.Navigator
    initialRouteName="Feed"
    tabBarOptions={{
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: Colors.header.secundary,
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
      },
    }}>
    <TopTabs.Screen
      name="Produto"
      component={ProdutoGeral}
      options={{
        tabBarLabel: 'Visão Geral',
        // tabBarIcon: ({ color, size }) => (
        //   <MaterialCommunityIcons name="home" color={color} size={size} />
        // ),
      }}  />
    <TopTabs.Screen
      name="ProdutoInformacoes"
      component={ProdutoInformacoes}
      options={{
        tabBarLabel: 'Informações',
        // tabBarIcon: ({ color, size }) => (
        //   <MaterialCommunityIcons name="settings" color={color} size={size} />
        // ),
      }} />
  </TopTabs.Navigator>
  );
}

export default TopTabsProduct;
