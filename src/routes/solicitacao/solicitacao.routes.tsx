import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../pages/Solicitacao/Home';


const Solicitacao = createStackNavigator();

const SolicitacaoRoutes: React.FC = () => (
  <Solicitacao.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Solicitacao.Screen
      name="HomeSolicitacao"
      component={Home}
    />
  </Solicitacao.Navigator>
);

export default SolicitacaoRoutes;
