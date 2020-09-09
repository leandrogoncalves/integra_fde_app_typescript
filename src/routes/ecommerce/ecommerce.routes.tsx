import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from '../../config/ColorsConfig';

import BottomTabsRoutes from './bottomTabs.routes';
import HistoricoBusca from '../../pages/Ecommerce/HistoricoBusca';
import TopTabsProduct from './topTabsProduct.routes';
import SelecionaPerfil from '../../pages/Ecommerce/SelecionaPerfil';

const Ecommerce = createStackNavigator();

const topNavOptions = {
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: Colors.header.primary
  },
  headerTitleAlign: 'left',
  cardStyle: { backgroundColor: '#fff'}
}

const EcommerceRoutes: React.FC = () => (
  <Ecommerce.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Ecommerce.Screen
      name="BottomTabsRoutes"
      component={BottomTabsRoutes}
    />
    <Ecommerce.Screen
      name="HistoricoBusca"
      component={HistoricoBusca}
    />
    <Ecommerce.Screen
      name="ProdutoTabs"
      component={TopTabsProduct}
      options={{
        headerShown: true,
        title:'Detalhes',
        ...topNavOptions
      }}
    />
    <Ecommerce.Screen
      name="SelecionaPerfil"
      component={SelecionaPerfil}
    />
  </Ecommerce.Navigator>
);

export default EcommerceRoutes;
