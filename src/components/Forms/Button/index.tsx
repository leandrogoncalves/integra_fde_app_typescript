import React from 'react';
import { Button as ButtonElement } from 'react-native-elements';

// import { Container } from './styles';

const Button: React.FC = ({children, ...rest}) => {
  return (
    <ButtonElement {...rest} />
  );
}

export default Button;
