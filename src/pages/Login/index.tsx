import React from 'react';
import { View, Text, TextInput, Button, Alert, Image } from 'react-native';

import { Container, Title } from './styles';

import logoImg from '../../assets/logo-fde.png';

const Login: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Title>Login</Title>
    </Container>
  );
}

export default Login;
