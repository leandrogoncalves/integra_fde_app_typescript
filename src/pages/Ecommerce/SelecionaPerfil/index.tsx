import React from 'react';
import { Text } from 'react-native';
import { Container } from '../../../components/Layout/Container';
import TopBar from '../../../components/Layout/TopBar';

const SelecionaPerfil: React.FC = () => {
  return (
    <Container>
      <TopBar title="Perfil" titleMarginLeft={40} iconExit={true} />
      <Text>
        Seleciona Perfil
      </Text>
    </Container>
  );
}

export default SelecionaPerfil;
