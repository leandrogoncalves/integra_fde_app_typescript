import React, { useState, useEffect } from "react";
import { Alert, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { useEcommerce } from "../../../hooks/ecommerce";
import groupByArray from "../../../utils/groupByArray";
import currency from "../../../utils/formatNumber";
import { Colors } from "../../../config/ColorsConfig";

import Card from "../../../components/Layout/Card";
import TopBar from "../../../components/Layout/TopBar";
import ProductListItem from "../../../components/Ecommerce/ProductListItem";
import ListItem from "../../../components/Layout/ListItem";
import Balance from "../../../components/Ecommerce/Balance";
import Loader from "../../../components/Layout/Loader";
import { HorizontalDivider } from "../../../components/Layout/HorizontalDivider";
import { Container } from "../../../components/Layout/Container";
import { Subtitle } from "../../../components/Typography/Subtitle";
import { Title } from "../../../components/Typography/Title";

import { Subtotal, Continue, ContinueText } from "./styles";

const Carrinho: React.FC = () => {
  const { navigate } = useNavigation();
  const {
    cart,
    cartTotalItens,
    cartTotal,
    setCartTotal,
    createOrder,
    totalBalance,
    setTotalBalance,
  } = useEcommerce();
  const [cartGrouped, setCartGrouped] = useState();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [textButton, setTextButton] = useState("Finalizar compra");

  const handleClickContinue = () => {
    if (buttonDisabled) {
      return;
    }

    if (cart.length === 0) {
      Alert.alert(
        "Atenção!",
        "Seu carrinho está vazio, adicione produtos para finalizar sua compra"
      );
      return;
    }

    setTextButton("Aguarde, Processando...");
    setButtonDisabled(true);

    Alert.alert("Confirmação", "Deseja finalizar a compra?", [
      {
        text: "Ok",
        onPress: async () => {
          createOrder();
          navigate("CompraFinalizada");
        },
      },
      {
        text: "Continar comprando",
        style: "cancel",
        onPress: async () => {
          setTextButton("Finalizar compras");
          setButtonDisabled(false);
        },
      },
    ]);
  };

  useEffect(() => {
    if (!cart) return;

    setTextButton("Finalizar compra");
    setButtonDisabled(false);

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
    setTotalBalance(totalBalance - totalValue);
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
                    key={product.id}
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

        <Continue
          disabled={buttonDisabled}
          onPress={() => (buttonDisabled ? null : handleClickContinue())}
          style={{
            backgroundColor: buttonDisabled ? "#BAFFF1" : Colors.button.primary,
          }}
        >
          <MaterialIcons
            name="navigate-next"
            size={25}
            color={buttonDisabled ? "#ccc" : "white"}
          />
          <ContinueText
            style={{ marginLeft: 10, color: buttonDisabled ? "#ccc" : "#fff" }}
          >
            {textButton}
          </ContinueText>
        </Continue>
      </ScrollView>
    </Container>
  );
};

export default Carrinho;
