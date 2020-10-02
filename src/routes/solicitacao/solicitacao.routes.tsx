import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Colors } from "../../config/ColorsConfig";
import TopTabsSolicitacao from "./topTabsSolicitacao.routes";
import Detalhes from "../../pages/Solicitacao/Detalhes";
import { SolicitationProvider } from "../../hooks/solicitation";
import FiltroSolicitacao from "../../pages/Solicitacao/FiltroSolicitacao";
import FiltroPorNumero from "../../pages/Solicitacao/Filtros/FiltroPorNumero";
import FiltroPorAssunto from "../../pages/Solicitacao/Filtros/FiltroPorAssunto";
import FiltroPorSituacao from "../../pages/Solicitacao/Filtros/FiltroPorSituacao";
import FiltroPorTipo from "../../pages/Solicitacao/Filtros/FiltroPorTipo";
import FiltroPorPeriodo from "../../pages/Solicitacao/Filtros/FiltroPorPeriodo";

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
      <Solicitacao.Screen
        name="FiltroSolicitacao"
        options={{ title: "Filtro" }}
        component={FiltroSolicitacao}
      />
      <Solicitacao.Screen
        name="FiltroPorNumero"
        options={{ title: "Número da solicitação" }}
        component={FiltroPorNumero}
      />
      <Solicitacao.Screen
        name="FiltroPorSituacao"
        options={{ title: "Situação" }}
        component={FiltroPorSituacao}
      />
      <Solicitacao.Screen
        name="FiltroPorAssunto"
        options={{ title: "Assunto" }}
        component={FiltroPorAssunto}
      />
      <Solicitacao.Screen
        name="FiltroPorTipo"
        options={{ title: "Tipo" }}
        component={FiltroPorTipo}
      />
      <Solicitacao.Screen
        name="FiltroPorPeriodo"
        options={{ title: "Período" }}
        component={FiltroPorPeriodo}
      />
    </Solicitacao.Navigator>
  </SolicitationProvider>
);

export default SolicitacaoRoutes;
