import React from "react";
import { Text, ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Solicitante from "../../../../components/Ecommerce/Solicitante";
import { Container } from "../../../../components/Layout/Container";
import Card from "../../../../components/Layout/Card";
import ProductItem from "../../../../components/Ecommerce/ProductItem";

import { ProductContainer, AddToCart, AddToCartText } from "./styles";
import { useEcommerce } from "../../../../hooks/ecommerce";

const ProdutoGeral: React.FC = () => {
  const { navigate } = useNavigation();
  const { productDetail } = useEcommerce();

  return (
    <Container>
      <Solicitante />

      <ScrollView keyboardShouldPersistTaps="handled">
        <Card>
          <ProductContainer>
            <ProductItem
              name={productDetail?.name}
              category={productDetail?.category}
              shotDescription={productDetail?.category}
              price={productDetail?.price}
              images={productDetail?.images}
            />

            <AddToCart
              onPress={() => {
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
              }}
            >
              <FontAwesome name="shopping-bag" size={25} color="white" />
              <AddToCartText style={{ marginLeft: 10 }}>
                Adicionar a sacola
              </AddToCartText>
            </AddToCart>
          </ProductContainer>
        </Card>
      </ScrollView>
    </Container>
  );
};

export default ProdutoGeral;
