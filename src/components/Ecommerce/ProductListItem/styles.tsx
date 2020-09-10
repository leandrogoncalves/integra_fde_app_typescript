import styled from 'styled-components/native';
import { Colors } from '../../../config/ColorsConfig';
import { Fonts } from '../../../config/FontConfig';

export const ProductImage = styled.View`
  width: 50px;
  height: 50px;
  background-color: ${Colors.highlight.primary};

  justify-content:center;
  align-items:center;
`;

export const ProductPrice = styled.Text`
  color: ${Colors.highlight.primary};
`;

export const RemoveItem = styled.Text`
  color: red;
`;
