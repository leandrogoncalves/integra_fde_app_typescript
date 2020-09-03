import styled from 'styled-components/native';
import { Colors } from '../../config/ColorsConfig';
import { Fonts } from '../../config/FontConfig';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 100px 30px;
  background-color: ${Colors.background.default};
`;

export const Title = styled.Text`
  font-size: 30px;
  color: #000;
  font-family: ${Fonts.family.default};
  margin: 44px 0 24px;
`;

export const Footer = styled.View`
  background-color: ${Colors.background.default};
  align-items:center;
`;

export const FooterText = styled.Text`
  color: #ccc;
`;

