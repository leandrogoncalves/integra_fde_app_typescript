import React, { useEffect } from "react";
import { BackHandler, View, Alert, ScrollView } from "react-native";
import { DateTime } from "luxon";

import { useNavigation } from "@react-navigation/native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import currency from "../../../utils/formatNumber";
import { useAuth } from "../../../hooks/auth";
import { useEcommerce } from "../../../hooks/ecommerce";

import { Container } from "../../../components/Layout/Container";
import { Title } from "../../../components/Typography/Title";
import TopBar from "../../../components/Layout/TopBar";
import Card from "../../../components/Layout/Card";
import ListItem from "../../../components/Layout/ListItem";

import { ListTitle, ListText, GoToOrder, GoToOrderText } from "./styles";

const styles = {
  marginBottom: 5,
};

const labelStyles = {
  width: 170,
};

const textStyles = {
  width: 170,
};

function backButtonHandler() {}
BackHandler.addEventListener("hardwareBackPress", backButtonHandler);

const CompraFinalizada: React.FC = ({ navigation }) => {
  const { order } = useEcommerce();
  const { navigate } = useNavigation();

  const handleGoToOrder = () => {
    navigate("DrawerMenuMinhaConta");
  };

  useEffect(() => {
    console.log("====================================");
    console.log("ORDER V1", order);
    console.log("====================================");
    Alert.alert("Atenção!", "Sua compra foi finalizada com sucesso");
  }, []);

  return (
    <Container>
      <TopBar title="Compra Finalizada" drawerMenuLink />
      <ScrollView keyboardShouldPersistTaps="handled">
        <Title>Detalhes do pedido</Title>

        <Card>
          <ListItem
            dense
            divider
            leftElement={
              <View style={labelStyles}>
                <ListTitle>Número de pedido:</ListTitle>
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
            divider
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
        </Card>

        <Title>Produtos</Title>

        <Card>
          <ListItem
            dense
            divider
            leftElement={
              <View style={labelStyles}>
                <ListTitle>Nome</ListTitle>
              </View>
            }
            centerElement={(
              <View style={{ width: 40 }}>
                <ListTitle>Qtd:</ListTitle>
              </View>
            )}
            rightElement={(
              <View>
                <ListTitle>Valor Unt:</ListTitle>
              </View>
            )}
            style={styles}
          />

          {order.cartOrder &&
            order.cartOrder.map((cartItem, index) => (
              <ListItem
                key={index}
                dense
                divider
                leftElement={(
                  <View style={{ width: 180 }}>
                    <ListText>{cartItem?.product?.name} </ListText>
                  </View>
                )}
                centerElement={(
                  <View style={{ width: 40 }}>
                    <ListText>{cartItem?.amount}</ListText>
                  </View>
                )}
                rightElement={(
                  <View>
                    <ListText>{currency(cartItem?.product?.price)}</ListText>
                  </View>
                )}
                style={styles}
              />
            ))}
        </Card>

        <Card>
          <ListItem
            leftElement={<ListTitle>Total</ListTitle>}
            rightElement={<ListText>{currency(order.totalValue)}</ListText>}
          />
        </Card>

        <GoToOrder onPress={() => handleGoToOrder()}>
          <MaterialIcons name="navigate-next" size={25} color="white" />
          <GoToOrderText>Ir para Conta</GoToOrderText>
        </GoToOrder>
      </ScrollView>
    </Container>
  );
};

export default CompraFinalizada;
