import React, { useState, useEffect, useCallback } from "react";
import { ScrollView, Alert, TouchableOpacity } from "react-native";
import Toast from "react-native-simple-toast";
import { useNavigation } from "@react-navigation/native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import AsyncStorage from "@react-native-community/async-storage";
import { useEcommerce } from "../../../../hooks/ecommerce";
import { useAuth } from "../../../../hooks/auth";

import { Container } from "../../../../components/Layout/Container";
import Balance from "../../../../components/Ecommerce/Balance";
import Card from "../../../../components/Layout/Card";
import ProductItem from "../../../../components/Ecommerce/ProductItem";
import ProductQuantity from "../../../../components/Ecommerce/ProductQuantity";

import { ICartItem } from "../../../../interfaces/ICartItem";

import {
  ProductContainer,
  AddToCart,
  AddToCartText,
  BoxAddToCart,
  FavoriteProduct,
} from "./styles";
import { Title } from "../../../../components/Typography/Title";

const ProdutoGeral: React.FC = () => {
  const { navigate } = useNavigation();
  const { user } = useAuth();
  const {
    productDetail,
    favoriteProducts,
    setFavoriteProducts,
    productQuantity,
    setProductQuantity,
    addToCart,
  } = useEcommerce();
  const [favoriteSelected, setFavoriteSelected] = useState<boolean>(false);
  const [favoriteColor, setFavoriteColor] = useState<string>("black");
  const [favoriteIcon, setFavoriteIcon] = useState<string>("heart-o");

  const handleAddToCart = () => {
    const cartItem = {
      product: productDetail,
      amount: productQuantity,
      category: productDetail?.category,
    } as ICartItem;

    addToCart(cartItem);
    navigate("DrawerMenuCarrinho");
  };

  const setUserFavoriteProducts = useCallback(async () => {
    await AsyncStorage.setItem(
      `@Integra:${user.username}:favoriteProducts`,
      JSON.stringify(favoriteProducts)
    );
  }, []);

  const handleClickFavorite = () => {
    if (!favoriteSelected) {
      setFavoriteProducts([...favoriteProducts, productDetail]);
      setFavoriteColor("red");
      setFavoriteIcon("heart");
      setFavoriteSelected(true);
      Toast.showWithGravity(
        "Produto adicionado aos fatoritos",
        Toast.LONG,
        Toast.TOP
      );
    } else {
      const newfavoriteProducts = favoriteProducts.filter((product) => {
        return product?.id !== productDetail?.id;
      });

      setFavoriteColor("black");
      setFavoriteIcon("heart-o");
      setFavoriteProducts(newfavoriteProducts);
      setFavoriteSelected(false);
      Toast.showWithGravity(
        "Produto removido dos fatoritos",
        Toast.LONG,
        Toast.TOP
      );
    }
  };

  useEffect(() => {
    if (!productDetail) {
      Alert.alert(
        "Produto temporariamente indisponivel!",
        "Não foi possivel acessar o produto no momento, por favor tente novamente mais tarde"
      );
      navigate("DrawerMenuHome");
    }

    setProductQuantity(1);

    const productFound = favoriteProducts.find(({ id }) => {
      return id === productDetail?.id;
    });

    if (productFound) {
      setFavoriteSelected(true);
      setFavoriteColor("red");
      setFavoriteIcon("heart");
    }

    setUserFavoriteProducts();
  }, [favoriteProducts, productDetail]);

  return (
    <Container>
      <Balance />

      <ScrollView keyboardShouldPersistTaps="handled">
        <Card>
          {!productDetail ? (
            <Title>Produto não encontrado</Title>
          ) : (
            <ProductContainer>
              <ProductItem product={productDetail} />
              <BoxAddToCart>
                <FavoriteProduct>
                  <TouchableOpacity onPress={() => handleClickFavorite()}>
                    <FontAwesome
                      color={favoriteColor}
                      name={favoriteIcon}
                      size={30}
                    />
                  </TouchableOpacity>
                </FavoriteProduct>
                <ProductQuantity />
                <AddToCart onPress={() => handleAddToCart()}>
                  <MaterialCommunityIcons name="cart" size={25} color="white" />
                  <AddToCartText style={{ marginLeft: 10 }}>
                    Adicionar
                  </AddToCartText>
                </AddToCart>
              </BoxAddToCart>
            </ProductContainer>
          )}
        </Card>
      </ScrollView>
    </Container>
  );
};

export default ProdutoGeral;
