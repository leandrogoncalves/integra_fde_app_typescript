import styled from 'styled-components/native';
import { Colors } from '../../../config/ColorsConfig';
import { Fonts } from '../../../config/FontConfig';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.background.default};
`;

export const Title = styled.Text`
  font-family: ${Fonts.family.default};
  font-size: ${Fonts.size.title};
  color: ${Colors.highlight.primary};
  margin-left: 10px;
  margin-top: 10px;
`;

export const Category = styled.View`
  width: 80px;
  height: 90px;
  margin: 10px;

  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

`;

export const CategoryIcon = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${Colors.highlight.primary};
  width: 50px;
  height: 50px;
  border-radius: 80px;
  margin-bottom: 5px;
`;

export const CategoryText = styled.Text`
  font-family: ${Fonts.family.default};
  font-size: 12px;
  color: ${Colors.highlight.primary};
  text-align: center;
`;

export const VerticalDivider = styled.View`
  width: 1px;
  height: 100%;
  border-left-width: 1px;
  border-left-color: #ccc;
  margin: 0 15px;
`;

export const HorizontalDivider = styled.View`
  width: 100%;
  height: 1px;
  border-top-width: 1px;
  border-top-color: #ccc;
  margin: 10px 0;
`;

export const ProductContainer = styled.View`
  flex:1;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 5px;
  padding: 10px;
`;

export const Product = styled.View`
  width: 46%;
  height: 300px;
`;

export const ProductImage = styled.View`
  height: 150px;
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

