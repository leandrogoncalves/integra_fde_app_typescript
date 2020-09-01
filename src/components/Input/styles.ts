import styled, {css} from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { bool } from 'prop-types';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #fff;

  flex-direction: row;
  align-items: center;

  ${(props) => props.isFocused && css`
    border-color:#ccc;
  `}
`;

export const TextInput = styled.TextInput`
  flex:1;
  color: #000;
  font-family: 'RobotoSlab-Regular';
  font-size:20px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right:16px
`;

