import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Colors } from "../../config/ColorsConfig";
import Realizadas from "../../pages/Solicitacao/Realizadas";
import ParaAnalise from "../../pages/Solicitacao/ParaAnalise";

const TopTabs = createMaterialTopTabNavigator();

const TopTabsSolicitacao: React.FC = () => (
  <TopTabs.Navigator
    initialRouteName="Feed"
    tabBarOptions={{
      activeTintColor: "#FFFFFF",
      inactiveTintColor: "#F8F8F8",
      style: {
        backgroundColor: Colors.header.secundary,
      },
      labelStyle: {
        textAlign: "center",
      },
      indicatorStyle: {
        borderBottomColor: "#ccc",
        borderBottomWidth: 2,
      },
    }}
  >
    <TopTabs.Screen
      name="Realizadas"
      component={Realizadas}
      options={{
        tabBarLabel: "Realizadas",
      }}
    />
    <TopTabs.Screen
      name="ParaAnalise"
      component={ParaAnalise}
      options={{
        tabBarLabel: "Para análise",
      }}
    />
  </TopTabs.Navigator>
);

export default TopTabsSolicitacao;
