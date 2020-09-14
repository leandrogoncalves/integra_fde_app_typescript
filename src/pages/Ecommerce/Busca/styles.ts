import styled from 'styled-components/native';
import { Colors } from '../../../config/ColorsConfig';
import { Fonts } from '../../../config/FontConfig';

export const ProductContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 5px;
  padding: 10px;
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
