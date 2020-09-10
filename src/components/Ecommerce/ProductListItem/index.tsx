import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import ListItem from '../../../components/Layout/ListItem';

import {
  ProductImage,
  ProductPrice,
  RemoveItem
} from './styles';

const ProductListItem: React.FC = ({
  children,
  name,
  category,
  price,
  ...rest
}) => {
  return (
    <ListItem
      divider
      leftElement={
        <ProductImage>
          <Text style={{color:'white'}}>Foto</Text>
        </ProductImage>
      }
      title={name}
      subtitle={category}
      rightElement={
        <>
          <View>
            <ProductPrice>
              R$ {price}
            </ProductPrice>
            <TouchableOpacity onPress={() => {
              Alert.alert(
                'Confirmação',
                'Deseja realmente remover este item',
                [
                  {
                    text: "Ok",
                    onPress: () => Alert.alert('Produto removido com sucesso')
                  },
                  {
                    text: "Cancelar",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                ]
                )
              }
            }>
              <RemoveItem>Remover</RemoveItem>
            </TouchableOpacity>
          </View>
        </>
      }
    />
  );
}

export default ProductListItem;
