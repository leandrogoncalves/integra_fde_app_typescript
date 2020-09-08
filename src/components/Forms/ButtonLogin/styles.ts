import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Colors } from '../../../config/ColorsConfig';

export const Container = styled(RectButton)`
  width:100%;
  height: 60px;
  background: ${Colors.button.primary};

  justify-content:center;
  align-items:center;
  border-radius:10px;

  margin-top: 8px
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #fff;
  font-size:20px;
`;

