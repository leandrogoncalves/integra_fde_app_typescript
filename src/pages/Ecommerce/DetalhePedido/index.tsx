import React from "react";
import { View, ScrollView } from "react-native";

import currency from "../../../utils/formatNumber";

import { Container } from "../../../components/Layout/Container";
import { Title } from "../../../components/Typography/Title";
import TopBar from "../../../components/Layout/TopBar";
import Card from "../../../components/Layout/Card";
import ListItem from "../../../components/Layout/ListItem";

import { ListTitle, ListText } from "./styles";

const styles = {
  marginBottom: 5,
};

const labelStyles = {
  width: 110,
};

const textStyles = {
  width: 210,
};

const DetalhePedido: React.FC = ({ route }) => {
  const { order } = route.params;

  return (
    <Container>
      <TopBar title="Detalhes do pedido" iconBack />
      <ScrollView keyboardShouldPersistTaps="handled">
        <Title>Detalhes do pedido</Title>
        <Card>
          <ListItem
            dense
            divider
            leftElement={
              <View style={labelStyles}>
                <ListTitle>Número:</ListTitle>
              </View>
            }
            centerElement={(
              <View style={textStyles}>
                <ListText>{order.number}</ListText>
              </View>
            )}
            style={styles}
          />
          <ListItem
            dense
            divider
            leftElement={
              <View style={labelStyles}>
                <ListTitle>Data:</ListTitle>
              </View>
            }
            centerElement={(
              <View style={textStyles}>
                <ListText>{order.date}</ListText>
              </View>
            )}
            style={styles}
          />
          <ListItem
            dense
            divider
            leftElement={
              <View style={labelStyles}>
                <ListTitle>Solicitante:</ListTitle>
              </View>
            }
            centerElement={(
              <View style={textStyles}>
                <ListText>{order.user.name}</ListText>
              </View>
            )}
            style={styles}
          />
          <ListItem
            dense
            leftElement={
              <View style={labelStyles}>
                <ListTitle>Escola:</ListTitle>
              </View>
            }
            centerElement={(
              <View style={textStyles}>
                <ListText>{order?.school.name}</ListText>
              </View>
            )}
            style={styles}
          />
          <ListItem
            dense
            leftElement={
              <View style={labelStyles}>
                <ListTitle>Status:</ListTitle>
              </View>
            }
            centerElement={(
              <View style={textStyles}>
                <ListText>Em processamento</ListText>
              </View>
            )}
            style={styles}
          />
        </Card>

        <Title>Produtos</Title>

        <Card>
          <ListItem
            dense
            divider
            leftElement={(
              <View style={labelStyles}>
                <ListTitle>Nome</ListTitle>
              </View>
            )}
            centerElement={
              <View style={{ width: 40 }}>
                <ListTitle>Qtd:</ListTitle>
              </View>
            }
            rightElement={
              <View>
                <ListTitle>Valor Unt:</ListTitle>
              </View>
            }
            style={styles}
          />

          {order.cartOrder &&
            order.cartOrder.map((cartItem, index) => (
              <ListItem
                key={index}
                dense
                divider
                leftElement={
                  <View style={{ width: 180 }}>
                    <ListText>{cartItem?.product?.name} </ListText>
                  </View>
                }
                centerElement={
                  <View style={{ width: 40 }}>
                    <ListText>{cartItem?.amount}</ListText>
                  </View>
                }
                rightElement={
                  <View>
                    <ListText>{currency(cartItem?.product?.price)}</ListText>
                  </View>
                }
                style={styles}
              />
            ))}
        </Card>
      </ScrollView>
    </Container>
  );
};

export default DetalhePedido;
