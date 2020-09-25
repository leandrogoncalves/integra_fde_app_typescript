import React, { useState } from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";

import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import currency from "../../../utils/formatNumber";
import { useEcommerce } from "../../../hooks/ecommerce";

import {
  Product,
  ProductImage,
  ProductText,
  ProductName,
  ProductCategory,
  ProductShortDescription,
  ProductPrice,
} from "./styles";
import { IProduct } from "../../../interfaces/IProduct";

const ProductItem: React.FC = ({ children, product, ...rest }) => {
  const { navigate } = useNavigation();
  const { setProductDetail } = useEcommerce();

  const handleClick = () => {
    setProductDetail(product);
    navigate("ProdutoTabs", { screen: "Produto" });
  };

  return (
    <Product>
      <TouchableOpacity onPress={() => handleClick()}>
        <ProductImage>
          {!product?.images ? (
            <Text style={{ color: "white" }}>Imagem do produto</Text>
          ) : (
            <Image
              source={{ uri: product?.images[0] }}
              style={{ width: 250, height: 250 }}
              PlaceholderContent={<ActivityIndicator />}
              placeholderStyle={{ backgroundColor: "white" }}
            />
          )}
        </ProductImage>
        <ProductText>
          <ProductName>
            <Ionicons name="bookmark" size={15} />
            {product?.name}
          </ProductName>
          <ProductCategory>
            <FontAwesome name="circle" size={15} style={{ marginRight: 10 }} />
            {product?.category}
          </ProductCategory>
          <ProductShortDescription>
            {product?.shotDescription}
          </ProductShortDescription>
          <ProductPrice>
            <MaterialCommunityIcons
              name="tag"
              size={18}
              style={{ marginRight: 10 }}
            />
            {currency(product?.price)}
          </ProductPrice>
        </ProductText>
      </TouchableOpacity>
    </Product>
  );
};

export default ProductItem;
