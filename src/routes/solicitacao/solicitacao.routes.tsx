import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Colors } from "../../config/ColorsConfig";
import TopTabsSolicitacao from "./topTabsSolicitacao.routes";
import Detalhes from "../../pages/Solicitacao/Detalhes";
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
        name="DetalhesSolciitacao"
        options={{ title: "Solicitação" }}
        component={Detalhes}
      />
    </Solicitacao.Navigator>
  </SolicitationProvider>
);

export default SolicitacaoRoutes;
