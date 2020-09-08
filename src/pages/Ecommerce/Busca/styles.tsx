import styled from 'styled-components/native';
import { Colors } from '../../../config/ColorsConfig';
import { Fonts } from '../../../config/FontConfig';

export const ProductContainer = styled.View`
  flex:1;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 5px;
  padding: 10px;
`;

export const Product = styled.View`
  width: 99%;
`;

export const ProductImage = styled.View`
  height: 200px;
  width: 100%;
  background: ${Colors.highlight.primary};

  align-items: center;
  justify-content: center;
`;

export const ProductText = styled.View`
  padding: 5px;
`;

export const ProductName = styled.Text`
  font-size: 16px;
  color: ${Colors.highlight.primary};
  font-family: ${Fonts.family.bold};
`;

export const ProductCategory = styled.Text`
  color: ${Colors.highlight.secundary};
  font-family: ${Fonts.family.bold};
`;

export const ProductShortDescription = styled.Text`
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

export const SeeMore = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  justify-content:center;
  padding-left: 10px;
  padding-bottom: 10px;
`;

export const SeeMoreText = styled.Text`
  color: ${Colors.link.primary};
`;
