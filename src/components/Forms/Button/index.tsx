import React from 'react';
import { View } from 'react-native';
import { Button as MaterialButton } from 'react-native-material-ui';

// import { Container } from './styles';

const Button: React.FC = ({children, ...rest}) => {
  return <MaterialButton {...rest} />;
}

export default Button;
