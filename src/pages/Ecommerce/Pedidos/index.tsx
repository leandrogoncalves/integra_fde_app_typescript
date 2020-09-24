import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import currency from "../../../utils/formatNumber";
import { useEcommerce } from "../../../hooks/ecommerce";

import { Title } from "../../../components/Typography/Title";
import { Container } from "../../../components/Layout/Container";
import { Subtitle } from "../../../components/Typography/Subtitle";
import ListItem from "../../../components/Layout/ListItem";
import TopBar from "../../../components/Layout/TopBar";
import Card from "../../../components/Layout/Card";

import { ListText, ListTitle } from "./styles";

const styles = {
  marginBottom: 5,
};

const Pedidos: React.FC = () => {
  const { navigate } = useNavigation();
  const { orders } = useEcommerce();

  return (
    <Container>
      <TopBar title="Pedidos" iconBack />
      <Title>Meus Pedidos</Title>
      <Card>
        {orders.length === 0 ? (
          <Subtitle>Nenhum pedido encontrado</Subtitle>
        ) : (
          orders.map((order) => (
            <ListItem
              dense
              divider
              icon={{ name: "move-to-inbox" }}
              title={`Pedido Nº ${order.number}`}
              subtitle={`data: ${order.date}`}
              rightElement={
                <View>
                  <ListTitle>Valor Total:</ListTitle>
                  <ListText>R$ {currency(order.totalValue)}</ListText>
                </View>
              }
              chevron
              style={styles}
              onPress={() => navigate("DetalhePedido", { order })}
            />
          ))
        )}
      </Card>
    </Container>
  );
};

export default Pedidos;
