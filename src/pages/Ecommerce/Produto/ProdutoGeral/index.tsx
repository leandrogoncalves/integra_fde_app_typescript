import React from "react";
import { ScrollView, Alert, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Solicitante from "../../../../components/Ecommerce/Solicitante";
import { Container } from "../../../../components/Layout/Container";
import Card from "../../../../components/Layout/Card";
import ProductItem from "../../../../components/Ecommerce/ProductItem";

import {
  ProductContainer,
  AddToCart,
  AddToCartText,
  BoxAddToCart,
} from "./styles";
import { useEcommerce } from "../../../../hooks/ecommerce";
import ProductQuantity from "../../../../components/Ecommerce/ProductQuantity";

const ProdutoGeral: React.FC = () => {
  const { navigate } = useNavigation();
  const { productDetail } = useEcommerce();

  const handleClick = () => {
    Alert.alert("Confirmação", "Deseja adicionar a sacola?", [
      {
        text: "Ok",
        onPress: () => navigate("DrawerMenuPedidos"),
      },
      {
        text: "Cancelar",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
    ]);
  };

  return (
    <Container>
      <Solicitante />

      <ScrollView keyboardShouldPersistTaps="handled">
        <Card>
          <ProductContainer>
            <ProductItem
              name={productDetail?.name}
              category={productDetail?.category}
              shotDescription={productDetail?.shotDescription}
              price={productDetail?.price}
              images={productDetail?.images}
            />
            <BoxAddToCart>
              <ProductQuantity />
              <AddToCart onPress={() => handleClick()}>
                <MaterialCommunityIcons name="cart" size={25} color="white" />
                <AddToCartText style={{ marginLeft: 10 }}>
                  Adicionar
                </AddToCartText>
              </AddToCart>
            </BoxAddToCart>
          </ProductContainer>
        </Card>
      </ScrollView>
    </Container>
  );
};

export default ProdutoGeral;
