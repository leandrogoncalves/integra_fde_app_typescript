import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EcommerceRoutes from './ecommerce/ecommerce.routes';


const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <App.Screen
      name="Ecommerce"
      component={EcommerceRoutes}
    />
  </App.Navigator>
);

export default AppRoutes;
