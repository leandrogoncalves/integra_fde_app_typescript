import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Colors } from "../../config/ColorsConfig";
import RelatorioObras from "../../pages/Obras/RelatorioObras";

const Obras = createStackNavigator();

const ObrasRoutes: React.FC = () => (
  <Obras.Navigator
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
    <Obras.Screen
      name="RelatorioObras"
      options={{ title: "Obras" }}
      component={RelatorioObras}
    />
  </Obras.Navigator>
);

export default ObrasRoutes;
