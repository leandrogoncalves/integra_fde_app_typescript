import styled from 'styled-components/native';
import { Colors } from '../../../../config/ColorsConfig';
import { Fonts } from '../../../../config/FontConfig';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.background.default};
`;

export const ProductText = styled.View`
  padding: 10px;
`;

export const ProductName = styled.Text`
  font-size: 20px;
  color: ${Colors.highlight.primary};
  font-family: ${Fonts.family.bold};
`;

export const ProductCategory = styled.Text`
  color: ${Colors.highlight.secundary};
  font-family: ${Fonts.family.bold};
`;

export const ProductDescription = styled.Text`
  color: ${Colors.text.primary};
  font-family: ${Fonts.family.default};
  margin-top: 5px;
`;

export const ProductPrice = styled.Text`
  font-family: ${Fonts.family.bold};
  font-size:18px;
  color: ${Colors.highlight.primary};
  margin-top: 5px;
`;
