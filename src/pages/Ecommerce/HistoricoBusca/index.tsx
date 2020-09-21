import React, { useState, useEffect } from "react";
import { Alert, TextInput, TouchableOpacity, ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import { IProduct } from "../../../interfaces/IProduct";
import ProductService from "../../../services/productService";
import { useAuth } from "../../../hooks/auth";

import { Container } from "../../../components/Layout/Container";
import ListItem from "../../../components/Layout/ListItem";
import { useEcommerce } from "../../../hooks/ecommerce";

const HistoricoBusca: React.FC = () => {
  const { token } = useAuth();
  ProductService.setToken(token);
  const { goBack, navigate } = useNavigation();
  const {
    searchInputValue,
    setSearchInputValue,
    setProductDetail,
  } = useEcommerce();
  const [productsFound, setProductsFound] = useState<IProduct[]>([]);

  const handleClick = () => {
    navigate("ResultadoBusca");
  };

  const handleInputChange = async (text) => {
    setSearchInputValue(text);
    if (text.length > 2) {
      const { data } = await ProductService.getProducts(text);
      setProductsFound(data);
    }
  };

  const handleClickItemList = (product) => {
    setProductDetail(product);
    navigate("ProdutoTabs", { screen: "Produto" });
  };

  useEffect(() => {
    if (searchInputValue.length === 0) {
      setProductsFound([]);
    }
  }, [searchInputValue]);

  return (
    <Container>
      <ListItem
        divider
        dense
        margin={{ top: 20 }}
        padding={{ bottom: 0 }}
        leftElement={
          <>
            <TouchableOpacity onPress={() => goBack()}>
              <MaterialIcons name="keyboard-backspace" size={24} color="gray" />
            </TouchableOpacity>
          </>
        }
        rightElement={
          <>
            <TouchableOpacity onPress={() => handleClick()}>
              <Ionicons name="search" size={24} color="gray" />
            </TouchableOpacity>
          </>
        }
        centerElement={
          <TextInput
            placeholder="Buscar"
            style={{ width: "80%", fontSize: 18 }}
            onChangeText={(text) => handleInputChange(text)}
          />
        }
      />
      <ScrollView keyboardShouldPersistTaps="handled">
        {productsFound.length > 0
          ? productsFound.map((product) => (
              <ListItem
                divider
                dense
                title={product.name}
                onPress={() => handleClickItemList(product)}
                chevron
              />
            ))
          : null}
      </ScrollView>
    </Container>
  );
};

export default HistoricoBusca;
