import styled from "styled-components/native";
import { Colors } from "../../../config/ColorsConfig";
import { Fonts } from "../../../config/FontConfig";

export const Product = styled.View`
  width: 99%;
`;

export const ProductImage = styled.View`
  height: 250px;
  width: 100%;
  background: #fff;

  align-items: center;
  justify-content: center;
`;

export const ProductText = styled.View`
  padding: 5px;
`;

export const ProductName = styled.Text`
  font-size: 22px;
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
  font-size: 20px;
  color: ${Colors.highlight.primary};
  margin-top: 5px;
`;
