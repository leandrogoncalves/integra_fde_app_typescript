import React from 'react';
import { Button, Text } from 'react-native';

import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

const Home: React.FC = () => {
  const {logout} = useAuth();

  return (
    <Container >
      <Text>
        Teste
      </Text>
      <Button title='Sair' onPress={logout}/>
    </Container>
  );
}

export default Home;
