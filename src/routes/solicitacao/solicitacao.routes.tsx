import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Colors } from "../../config/ColorsConfig";
import TopTabsSolicitacao from "./topTabsSolicitacao.routes";
import Home from "../../pages/Solicitacao/Home";
import { SolicitationProvider } from "../../hooks/solicitation";

const Solicitacao = createStackNavigator();

const SolicitacaoRoutes: React.FC = () => (
  <SolicitationProvider>
    <Solicitacao.Navigator
      screenOptions={{
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerStyle: {
          backgroundColor: Colors.header.primary,
        },
        headerTitleAlign: "center",
        cardStyle: { backgroundColor: "#fff" },
      }}
    >
      <Solicitacao.Screen
        name="topTabsSolicitacao"
        options={{ title: "Solicitações" }}
        component={TopTabsSolicitacao}
      />
      <Solicitacao.Screen
        name="homeSolicitacao"
        options={{ title: "Solicitação" }}
        component={Home}
      />
    </Solicitacao.Navigator>
  </SolicitationProvider>
);

export default SolicitacaoRoutes;
