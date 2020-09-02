import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      // headerShown: false,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerStyle: {
        backgroundColor: '#2f4050'
      },
      headerTitleAlign: 'center',
      cardStyle: { backgroundColor: '#fff'}
    }}
  >
    <App.Screen name="Home" component={Home} />
  </App.Navigator>
);

export default AppRoutes;
