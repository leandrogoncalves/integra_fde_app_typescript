import React, { useState, useEffect } from "react";
import { Alert, ScrollView } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { useEcommerce } from "../../../hooks/ecommerce";
import groupByArray from "../../../utils/groupByArray";
import currency from "../../../utils/formatNumber";

import Card from "../../../components/Layout/Card";
import TopBar from "../../../components/Layout/TopBar";
import ProductListItem from "../../../components/Ecommerce/ProductListItem";
import ListItem from "../../../components/Layout/ListItem";
import Balance from "../../../components/Ecommerce/Balance";
import { Container } from "../../../components/Layout/Container";
import { Title } from "../../../components/Typography/Title";
import { HorizontalDivider } from "../../../components/Layout/HorizontalDivider";

import { Subtotal, Continue, ContinueText } from "./styles";

const Carrinho: React.FC = () => {
  const { cart } = useEcommerce();
  const [cartGrouped, setCartGrouped] = useState();
  const [cartTotal, setCartTotal] = useState(0);

  const handleClickContinue = () => {
    if (cart.length === 0) {
      Alert.alert(
        "Atenção!",
        "Seu carrinho está vazio, adicione produtos para finalizar sua compra"
      );
      return;
    }

    Alert.alert("Confirmação", "Deseja finalizar a compra?", [
      {
        text: "Ok",
        onPress: () => Alert.alert("Compra finalizada com sucesso"),
      },
      {
        text: "Cancelar",
        style: "cancel",
      },
    ]);
  };

  useEffect(() => {
    let total = 0;
    const cartItensGrouped = groupByArray(cart, "category");
    Object.keys(cartItensGrouped).map((key, index) => {
      cartItensGrouped[key].map(({ product, amount }) => {
        cartItensGrouped[key].subtotal =
          (cartItensGrouped[key].subtotal || 0) + product.price * amount;
        total += cartItensGrouped[key].subtotal;
      });
    });
    setCartGrouped(cartItensGrouped);
    setCartTotal(total);
  }, [cart]);

  return (
    <Container>
      <TopBar title="Carrinho" drawerMenuLink />

      <Balance />

      <ScrollView keyboardShouldPersistTaps="handled">
        <Title>Detalhes</Title>

        {cartGrouped &&
          Object.keys(cartGrouped).map((key, index) => (
            <Card>
              <Title>{key}</Title>
              <HorizontalDivider />
              {cartGrouped[key] &&
                cartGrouped[key].map(({ product, amount }) => (
                  <ProductListItem
                    name={product.name}
                    images={product.images}
                    price={product.price}
                    productId={product.id}
                    buttonSize={10}
                  />
                ))}
              <ListItem
                leftElement={<Subtotal>Subtotal</Subtotal>}
                rightElement={
                  <Subtotal>{currency(cartGrouped[key].subtotal)}</Subtotal>
                }
              />
            </Card>
          ))}

        <Card>
          <ListItem
            leftElement={<Subtotal>Total</Subtotal>}
            rightElement={<Subtotal>{currency(cartTotal)}</Subtotal>}
          />
        </Card>

        <Continue onPress={() => handleClickContinue()}>
          <MaterialIcons name="navigate-next" size={25} color="white" />
          <ContinueText style={{ marginLeft: 10 }}>
            Finalizar compra
          </ContinueText>
        </Continue>
      </ScrollView>
    </Container>
  );
};

export default Carrinho;
