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

export const HorizontalDivider = styled.View`
  width: 100%;
  height: 1px;
  border-top-width: 1px;
  border-top-color: #ccc;
  margin: 10px 0;
`;

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

export const Subtotal = styled.Text`
  color: ${Colors.highlight.primary};
  font-family: ${Fonts.family.bold};
  font-size: 18px;
`;

export const Continue = styled.TouchableOpacity`
  width:95%;
  height: 50px;
  background-color: ${Colors.button.primary};

  justify-content:center;
  align-items:center;
  flex-direction: row;

  border-radius:10px;
  margin: 8px 10px 0 10px;
`;

export const ContinueText = styled.Text`
  font-family: ${Fonts.family.bold};
  color: white;
  font-size: 20px;
`;

export const RemoveItem = styled.Text`
  color: red;
`;
