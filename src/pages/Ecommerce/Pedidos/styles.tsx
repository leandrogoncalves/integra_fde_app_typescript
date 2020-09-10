import styled from 'styled-components/native';
import { Colors } from '../../../config/ColorsConfig';
import { Fonts } from '../../../config/FontConfig';

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
