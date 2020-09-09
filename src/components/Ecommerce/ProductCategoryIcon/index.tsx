import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import {
  Category,
  CategoryIcon,
  CategoryText,
} from './styles';

const ProductCategoryIcon: React.FC = ({
  children,
  route,
  text,
  color,
  size,
  name,
  iconComponent,
  ...rest
}) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigate(route)}>
      <Category>
        <CategoryIcon>
        {!name?null:(
          <Ionicons name={name} color={color||"white"} size={size||30} />
        )}
        {!iconComponent?null:(iconComponent)}
        </CategoryIcon>
        <CategoryText>
          {text}
        </CategoryText>
      </Category>
    </TouchableOpacity>
  );
}

export default ProductCategoryIcon;
