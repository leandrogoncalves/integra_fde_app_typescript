import React from 'react';
import { Text } from 'react-native';

import { Container } from './styles';
import TopBar from '../../components/TopBar';

const Perfil: React.FC = () => {
  return (
    <Container>
      <TopBar />
      <Text>Perfil</Text>
    </Container>
  );
}

export default Perfil;
