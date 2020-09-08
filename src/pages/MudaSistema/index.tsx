import React from 'react';
import { Text } from 'react-native';

import { Container } from '../../components/Layout/Container';
import TopBar from '../../components/Layout/TopBar';
import { Title } from '../../components/Typography/Title';
import Card from '../../components/Layout/Card';

const MudaSistema: React.FC = () => {
  return (
    <Container>
      <TopBar title="Muda Sistema" titleMarginLeft={40} iconExit={true} />
      <Title>
        Selecione o sistema desejado:
      </Title>
      <Card>
        <Text>
          Teste
        </Text>
      </Card>
    </Container>
  );
}

export default MudaSistema;
