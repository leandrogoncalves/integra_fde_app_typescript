import React from 'react';
// import { View } from 'react-native';
import { Card as MaterialCard } from 'react-native-material-ui';

// import { Container } from './styles';

const Card: React.FC = ({children, ...rest}) => {
  return (
    <MaterialCard {...rest}>
      {children}
    </MaterialCard>
  );
}

export default Card;
