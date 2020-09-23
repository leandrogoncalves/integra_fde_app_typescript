import React, { useState, useEffect, useMemo } from "react";
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
import { HorizontalDivider } from "../../../components/Layout/HorizontalDivider";
import { Container } from "../../../components/Layout/Container";
import { Subtitle } from "../../../components/Typography/Subtitle";
import { Title } from "../../../components/Typography/Title";

import { Subtotal, Continue, ContinueText } from "./styles";

const Carrinho: React.FC = () => {
  const { cart, cartTotal, setCartTotal } = useEcommerce();
  const [cartGrouped, setCartGrouped] = useState();

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

  const cartTotalItens = useMemo(() => {
    return cart.reduce((total, cartItem) => {
      return (total += cartItem.amount);
    }, 0);
  }, [cart]);

  useEffect(() => {
    if (!cart) return;

    const cartItensGrouped = groupByArray(cart, "category");
    Object.keys(cartItensGrouped).map((key, index) => {
      cartItensGrouped[key].map(({ product, amount }) => {
        cartItensGrouped[key].subtotal =
          (cartItensGrouped[key].subtotal || 0) + product.price * amount;
      });
    });

    const totalValue = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount * cartItem.product.price);
    }, 0);

    setCartGrouped(cartItensGrouped);
    setCartTotal(totalValue);
  }, [cart]);

  return (
    <Container>
      <TopBar title="Carrinho" drawerMenuLink />

      <Balance />

      <ScrollView keyboardShouldPersistTaps="handled">
        <Title>Quantidade de Produtos: {cart.length}</Title>
        <Subtitle>Quantidade de Itens: {cartTotalItens}</Subtitle>

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
                    amount={amount}
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
