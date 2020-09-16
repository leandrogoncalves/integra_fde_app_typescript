import React from "react";
import { Alert } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import TopBar from "../../../components/Layout/TopBar";
import Card from "../../../components/Layout/Card";

import ProductListItem from "../../../components/Ecommerce/ProductListItem";
import Solicitante from "../../../components/Ecommerce/Solicitante";
import { Container } from "../../../components/Layout/Container";
import { Title } from "../../../components/Typography/Title";
import ListItem from "../../../components/Layout/ListItem";

import { Subtotal, Continue, ContinueText } from "./styles";

const Carrinho: React.FC = () => {
  return (
    <Container>
      <TopBar title="Carrinho" drawerMenuLink />

      <Solicitante />

      <Title>Detalhes</Title>
      <Card>
        <ProductListItem
          name="Nome do produto"
          category="Categoria"
          price="199,00"
        />

        <ProductListItem
          name="Nome do produto"
          category="Categoria"
          price="199,00"
        />

        <ProductListItem
          name="Nome do produto"
          category="Categoria"
          price="199,00"
        />

        <ListItem
          leftElement={<Subtotal>Subtotal</Subtotal>}
          rightElement={<Subtotal>R$ 598,00</Subtotal>}
        />
      </Card>

      <Continue
        onPress={() => {
          Alert.alert("Confirmação", "Deseja finalizar a compra?", [
            {
              text: "Ok",
              onPress: () => Alert.alert("Compra finalizada com sucesso"),
            },
            {
              text: "Cancelar",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
          ]);
        }}
      >
        <MaterialIcons name="navigate-next" size={25} color="white" />
        <ContinueText style={{ marginLeft: 10 }}>Finalizar compra</ContinueText>
      </Continue>
    </Container>
  );
};

export default Carrinho;
