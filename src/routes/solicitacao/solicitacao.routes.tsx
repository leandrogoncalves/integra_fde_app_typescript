import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../pages/Solicitacao/Home';


const App = createStackNavigator();

const SolicitacaoRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <App.Screen
      name="HomeSolicitacao"
      component={Home}
    />
  </App.Navigator>
);

export default SolicitacaoRoutes;
