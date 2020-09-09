import React from 'react';
import { Text } from 'react-native';

import { Container } from '../../../components/Layout/Container';
import TopBar from '../../../components/Layout/TopBar';
import { Title } from '../../../components/Typography/Title';

const Home: React.FC = () => {
  return (
    <Container>
      <TopBar title="Solicitacao" titleMarginLeft={40} iconExit={true} iconBack={true} />
      <Title>
        Em construção
      </Title>
    </Container>
  );
}

export default Home;
