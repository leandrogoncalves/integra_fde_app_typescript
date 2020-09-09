import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Product,
  ProductImage,
  ProductText,
  ProductName,
  ProductCategory,
  ProductShortDescription,
  ProductPrice,
} from './styles';

const ProductItem: React.FC = ({
  children,
  route,
  name,
  category,
  shotDescription,
  price,
  ...rest
}) => {
  const { navigate } = useNavigation();
  return (
    <Product>
      <TouchableOpacity onPress={() => navigate("ProdutoTabs")}>
        <ProductImage>
          <Text style={{color: 'white'}}>
            Imagem do produto
          </Text>
        </ProductImage>
        <ProductText>
          <ProductName>
            <Ionicons name="bookmark" size={15} />
              {name}
          </ProductName>
          <ProductCategory>
            <FontAwesome name="circle" size={15} style={{marginRight:10}} />
            {category}
          </ProductCategory>
          <ProductShortDescription>
            {shotDescription}
          </ProductShortDescription>
          <ProductPrice>
            <MaterialCommunityIcons name="tag" size={18} style={{marginRight:10}} />
            R$ {price}
          </ProductPrice>
        </ProductText>
      </TouchableOpacity>
    </Product>
  );
}

export default ProductItem;
