import React from "react";
import { View, Text, Alert, TouchableHighlight } from "react-native";
import { Image } from "react-native-elements";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import ListItem from "../../Layout/ListItem";
import ProductQuantity from "../ProductQuantity";

import { ProductImage, ProductPrice, RemoveItem } from "./styles";

const ProductListItem: React.FC = ({
  children,
  name,
  category,
  price,
  images,
  buttonSize,
  productId,
  ...rest
}) => {
  const handleClick = () => {
    Alert.alert("Confirmação", "Deseja realmente remover este item", [
      {
        text: "Ok",
        onPress: () => Alert.alert("Produto removido com sucesso"),
      },
      {
        text: "Cancelar",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
    ]);
  };

  return (
    <ListItem
      divider
      leftElement={(
        <ProductImage>
          {!images ? (
            <Text style={{ color: "white" }}>Foto</Text>
          ) : (
            <Image
              source={{ uri: images[0] }}
              style={{ width: 70, height: 70 }}
            />
          )}
        </ProductImage>
      )}
      title={name}
      subtitle={category}
      rightElement={(
        <>
          <View style={{ alignItems: "flex-end" }}>
            <View style={{ flexDirection: "row" }}>
              <ProductPrice>R$ {price}</ProductPrice>
              <TouchableHighlight onPress={() => handleClick()}>
                <FontAwesome name="trash-o" size={20} color="red" />
              </TouchableHighlight>
            </View>
            <ProductQuantity productId={productId} buttonSize={buttonSize} />
          </View>
        </>
      )}
    />
  );
};

export default ProductListItem;
