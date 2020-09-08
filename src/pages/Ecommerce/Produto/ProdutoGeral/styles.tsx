import styled from 'styled-components/native';
import { Colors } from '../../../../config/ColorsConfig';
import { Fonts } from '../../../../config/FontConfig';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.background.default};
`;

export const ProductContainer = styled.View`
  margin: 5px;
`;

export const ProductGalery = styled.View`
  height: 250px;
  width: 100%;
  background-color: ${Colors.highlight.primary};

  justify-content:center;
  align-items:center;
`;

export const ProductText = styled.View`
  padding: 5px;
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

export const AddToCart = styled.TouchableOpacity`
  width:100%;
  height: 50px;
  background-color: ${Colors.button.primary};

  justify-content:center;
  align-items:center;
  flex-direction: row;

  border-radius:10px;
  margin-top: 8px
`;

export const AddToCartText = styled.Text`
  font-family: ${Fonts.family.bold};
  color: white;
  font-size: 20px;
`;