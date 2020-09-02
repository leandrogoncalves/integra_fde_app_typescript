import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabsRoutes from './tabs.routes';

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
  </App.Navigator>
);

export default AppRoutes;
