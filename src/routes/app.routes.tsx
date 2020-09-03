import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from '../config/ColorsConfig';

import BottomTabsRoutes from './bottomTabs.routes';
import HistoricoBusca from '../pages/Ecommerce/HistoricoBusca';
import TopTabsProduct from './topTabsProduct.routes';

const App = createStackNavigator();

const topNavOptions = {
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: Colors.header.primary
  },
  headerTitleAlign: 'left',
  cardStyle: { backgroundColor: '#fff'}
}

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <App.Screen
      name="Tabs"
      component={BottomTabsRoutes}
    />
    <App.Screen
      name="HistoricoBusca"
      component={HistoricoBusca}
    />
    <App.Screen
      name="ProdutoTabs"
      component={TopTabsProduct}
      options={{
        headerShown: true,
        title:'Detalhes',
        ...topNavOptions
      }}
    />
  </App.Navigator>
);

export default AppRoutes;
