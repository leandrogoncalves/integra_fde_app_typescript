import React from "react";
import { Image, TouchableOpacity, Text } from "react-native";

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

const ProductItem: React.FC = ({
  children,
  route,
  name,
  category,
  images,
  shotDescription,
  price,
  product,
  ...rest
}) => {
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
          {!images ? (
            <Text style={{ color: "white" }}>Imagem do produto</Text>
          ) : (
            <Image
              source={{ uri: images[0] }}
              style={{ width: 250, height: 250 }}
            />
          )}
        </ProductImage>
        <ProductText>
          <ProductName>
            <Ionicons name="bookmark" size={15} />
            {name}
          </ProductName>
          <ProductCategory>
            <FontAwesome name="circle" size={15} style={{ marginRight: 10 }} />
            {category}
          </ProductCategory>
          <ProductShortDescription>{shotDescription}</ProductShortDescription>
          <ProductPrice>
            <MaterialCommunityIcons
              name="tag"
              size={18}
              style={{ marginRight: 10 }}
            />
            {currency(price)}
          </ProductPrice>
        </ProductText>
      </TouchableOpacity>
    </Product>
  );
};

export default ProductItem;
