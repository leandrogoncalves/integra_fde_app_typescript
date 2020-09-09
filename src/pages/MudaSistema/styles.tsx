import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '../../config/ColorsConfig';
import { Fonts } from '../../config/FontConfig';

export const ButtomSystem = styled.TouchableOpacity`
  width: 125px;
  height: 125px;
  background-color:#fff;
  margin-top: 30px;
  margin-bottom: 30px;

  border-width: 1px;
  border-radius: 2px;
  border-color: #ddd;
  border-top-width: 1px;
  border-bottom-width: 2px;
  shadow-color: #000;
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  shadow-offset: 0 2px;
  justify-content: center;
  align-items: center;
  elevation:1
`;

export const TextSystem = styled.Text`
  font-family: ${Fonts.family.default};
  font-size: 16px;
`;

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});
