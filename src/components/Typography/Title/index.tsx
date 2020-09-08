import styled from 'styled-components/native';
import { Colors } from '../../../config/ColorsConfig';
import { Fonts } from '../../../config/FontConfig';

export const Title = styled.Text`
  font-family: ${Fonts.family.default};
  font-size: ${Fonts.size.title};
  color: ${Colors.highlight.primary};
  margin-left: 10px;
  margin-top: 10px;
`;
