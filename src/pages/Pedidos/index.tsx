import React from 'react';
import { Text } from 'react-native';

import { Container } from './styles';
import TopBar from '../../components/TopBar';

const Pedidos: React.FC = () => {
  return (
    <Container>
      <TopBar />
      <Text>Pedidos</Text>
    </Container>
  );
}

export default Pedidos;
