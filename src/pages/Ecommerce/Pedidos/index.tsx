import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";

import currency from "../../../utils/formatNumber";
import { useAuth } from "../../../hooks/auth";
import { IOrder } from "../../../interfaces/IOrder";

import { Title } from "../../../components/Typography/Title";
import { Container } from "../../../components/Layout/Container";
import { Subtitle } from "../../../components/Typography/Subtitle";
import ListItem from "../../../components/Layout/ListItem";
import Loader from "../../../components/Layout/Loader";
import TopBar from "../../../components/Layout/TopBar";
import Card from "../../../components/Layout/Card";

import { ListText, ListTitle } from "./styles";

const styles = {
  marginBottom: 5,
};

const Pedidos: React.FC = () => {
  const { navigate } = useNavigation();
  const { user } = useAuth();
  const [loader, setLoader] = useState(true);
  const [orders, setOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    console.log("orders", orders);
    console.log("loader", loader);

    (async () => {
      let localOrders = await AsyncStorage.getItem(
        `@Integra:${user?.username}:orders`
      );
      localOrders = JSON.parse(localOrders);
      if (localOrders && localOrders.length > 0) {
        setOrders(localOrders);
      }
    })();
    setTimeout(() => setLoader(false), 1000);
  }, []);

  return (
    <Container>
      {!loader ? null : <Loader />}

      <TopBar title="Pedidos" iconBack />
      <ScrollView keyboardShouldPersistTaps="handled">
        <Title>Meus Pedidos</Title>
        <Card>
          {orders.length === 0 && (
            <Subtitle>
              {loader ? "Carregando..." : "Nenhum pedido encontrado"}
            </Subtitle>
          )}

          {orders.length > 0 &&
            orders.map((order) => (
              <ListItem
                key={order.number}
                dense
                divider
                icon={{ name: "move-to-inbox" }}
                title={`Pedido Nº ${order.number}`}
                subtitle={`data: ${order.date}`}
                rightElement={(
                  <View>
                    <ListTitle>Valor Total:</ListTitle>
                    <ListText>R$ {currency(order.totalValue)}</ListText>
                  </View>
                )}
                chevron
                style={styles}
                onPress={() => navigate("DetalhePedido", { order })}
              />
            ))}
        </Card>
      </ScrollView>
    </Container>
  );
};

export default Pedidos;
