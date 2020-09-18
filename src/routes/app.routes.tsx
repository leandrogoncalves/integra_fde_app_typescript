import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import EcommerceRoutes from "./ecommerce/ecommerce.routes";
import SolicitacaoRoutes from "./solicitacao/solicitacao.routes";
import DrawerMenuMudaSistema from "./geral/drawerMenuMudaSistema.routes";

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <App.Screen
      name="DrawerMenuMudaSistema"
      component={DrawerMenuMudaSistema}
    />
    <App.Screen name="EcommerceRoutes" component={EcommerceRoutes} />
    <App.Screen name="SolicitacaoRoutes" component={SolicitacaoRoutes} />
  </App.Navigator>
);

export default AppRoutes;
