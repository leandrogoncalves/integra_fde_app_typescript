import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabsRoutes from './tabs.routes';
import Produto from '../pages/Produto';
import HistoricoBusca from '../pages/HistoricoBusca';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      // headerTintColor: '#fff',
      // headerTitleStyle: {
      //   fontWeight: 'bold',
      // },
      // headerStyle: {
      //   backgroundColor: '#2f4050'
      // },
      // headerTitleAlign: 'center',
      // cardStyle: { backgroundColor: '#fff'}
    }}
  >
    <App.Screen name="Tabs" component={TabsRoutes} />
    <App.Screen name="Produto" component={Produto} />
    <App.Screen name="HistoricoBusca" component={HistoricoBusca} />
  </App.Navigator>
);

export default AppRoutes;
