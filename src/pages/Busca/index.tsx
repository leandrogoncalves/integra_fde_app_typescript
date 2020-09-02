import React from 'react';
import { Text } from 'react-native';

import { Container } from './styles';
import TopBar from '../../components/TopBar';

const Busca: React.FC = () => {
  return (
    <Container>
      <TopBar />
      <Text>Busca</Text>
    </Container>
  )
}

export default Busca;
