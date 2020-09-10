import React from 'react';
import { Button as ReactNativeButton } from 'react-native';
// import { Button as ButtonElement } from 'react-native-elements';

// import { Container } from './styles';

const Button: React.FC = ({children, ...rest}) => {
  return (
    <ReactNativeButton {...rest} />
  );
}

export default Button;
