import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import Home from '../pages/Home';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      // headerTintColor: '#fff',
      // headerTitleStyle: {
      //   fontWeight: 'bold',
      // },
      // headerStyle: {
      //   backgroundColor: '#7159c1'
      // },
      // headerTitleAlign: 'center',
      cardStyle: { backgroundColor: '#fff'}
    }}
  >
    <Auth.Screen name="Login" component={Login} />
    <Auth.Screen name="Home" component={Home} />
  </Auth.Navigator>
);

export default AuthRoutes;
