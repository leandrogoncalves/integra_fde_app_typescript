import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EcommerceRoutes from './ecommerce/ecommerce.routes';
import SolicitacaoRoutes from './solicitacao/solicitacao.routes';
import MudaSistema from '../pages/MudaSistema';


const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <App.Screen
      name="MudaSistema"
      component={MudaSistema}
    />
    <App.Screen
      name="Ecommerce"
      component={EcommerceRoutes}
    />
    <App.Screen
      name="Solicitacao"
      component={SolicitacaoRoutes}
    />
  </App.Navigator>
);

export default AppRoutes;
