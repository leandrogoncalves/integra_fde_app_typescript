import styled from "styled-components/native";
import { Colors } from "../../../../config/ColorsConfig";
import { Fonts } from "../../../../config/FontConfig";

export const ProductContainer = styled.View`
  margin: 5px;
`;

export const ProductGalery = styled.View`
  height: 250px;
  width: 100%;
  background-color: ${Colors.highlight.primary};

  justify-content: center;
  align-items: center;
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
  font-size: 18px;
  color: ${Colors.highlight.primary};
  margin-top: 5px;
`;

export const AddToCart = styled.TouchableOpacity`
  width: 60%;
  height: 50px;
  background-color: ${Colors.button.primary};

  justify-content: center;
  align-items: center;
  flex-direction: row;

  border-radius: 10px;
  margin-top: 8px;
  margin-left: 25px;
`;

export const AddToCartText = styled.Text`
  font-family: ${Fonts.family.bold};
  color: white;
  font-size: 20px;
`;

export const BoxAddToCart = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const FavoriteProduct = styled.View`
  position: absolute;
  width: 40px;
  height: 40px;
  right: 10px;
  top: -40px;

  align-items: center;
  justify-content: center;
`;
