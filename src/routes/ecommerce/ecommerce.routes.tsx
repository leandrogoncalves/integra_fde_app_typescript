import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Colors } from "../../config/ColorsConfig";
import { EcommerceProvider } from "../../hooks/ecommerce";

import BottomTabsRoutes from "./bottomTabs.routes";
import HistoricoBusca from "../../pages/Ecommerce/HistoricoBusca";
import TopTabsProduct from "./topTabsProduct.routes";
import SelecionaPerfil from "../../pages/Ecommerce/SelecionaPerfil";
import ResultadoBusca from "../../pages/Ecommerce/ResultadoBusca";
import Categoria from "../../pages/Ecommerce/Categoria";
import Subcategoria from "../../pages/Ecommerce/Subcategoria";
import CompraFinalizada from "../../pages/Ecommerce/CompraFinalizada";
import Pedidos from "../../pages/Ecommerce/Pedidos";
import DetalhePedido from "../../pages/Ecommerce/DetalhePedido";

const Ecommerce = createStackNavigator();

const topNavOptions = {
  headerTintColor: "#fff",
  headerStyle: {
    backgroundColor: Colors.header.primary,
  },
  headerTitleAlign: "left",
  cardStyle: { backgroundColor: "#fff" },
};

const EcommerceRoutes: React.FC = () => (
  <EcommerceProvider>
    <Ecommerce.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Ecommerce.Screen name="BottomTabsRoutes" component={BottomTabsRoutes} />
      <Ecommerce.Screen name="HistoricoBusca" component={HistoricoBusca} />
      <Ecommerce.Screen
        name="ProdutoTabs"
        component={TopTabsProduct}
        options={{
          headerShown: true,
          title: "Detalhes",
          ...topNavOptions,
        }}
      />
      <Ecommerce.Screen name="SelecionaPerfil" component={SelecionaPerfil} />
      <Ecommerce.Screen name="Categoria" component={Categoria} />
      <Ecommerce.Screen name="Subcategoria" component={Subcategoria} />
      <Ecommerce.Screen name="ResultadoBusca" component={ResultadoBusca} />
      <Ecommerce.Screen name="CompraFinalizada" component={CompraFinalizada} />
      <Ecommerce.Screen name="Pedidos" component={Pedidos} />
      <Ecommerce.Screen name="DetalhePedido" component={DetalhePedido} />
    </Ecommerce.Navigator>
  </EcommerceProvider>
);

export default EcommerceRoutes;
