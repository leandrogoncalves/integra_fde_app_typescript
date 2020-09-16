import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import ListItem from "../../Layout/ListItem";

import { ProductImage, ProductPrice, RemoveItem } from "./styles";

const ProductListItem: React.FC = ({
  children,
  name,
  category,
  price,
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
          <Text style={{ color: "white" }}>Foto</Text>
        </ProductImage>
      )}
      title={name}
      subtitle={category}
      rightElement={(
        <>
          <View>
            <ProductPrice>R$ {price}</ProductPrice>
            <TouchableOpacity onPress={() => handleClick()}>
              <RemoveItem>Remover</RemoveItem>
            </TouchableOpacity>
          </View>
        </>
      )}
    />
  );
};

export default ProductListItem;
