import React, { useContext, useCallback } from 'react';
import { Image, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

// import AuthContext from '../../context/AuthContext';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Title, Footer, FooterText } from './styles';
import logoImg from '../../assets/logo-fde.png';

interface LoginFormData {
  usuario:string;
  senha:string;
}

const Login: React.FC = () => {

  // const login = useContext(AuthContext);

  // const handleLogin = useCallback(
  //   async (data:LoginFormData) => {
  //     Login({
  //       user: data.usuario,
  //       pass: data.senha,
  //     })
  //   },
  //   []
  // );

  return (
    <>
      <KeyboardAvoidingView
        style={{flex:1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          contentContainerStyle={{ flex:1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <Image source={logoImg} />
            <View>
              <Title>Login</Title>
            </View>

            <Input name="login" icon="user" placeholder="Usuário" />
            <Input name="senha" icon="lock" placeholder="Senha" secureTextEntry={true} />

            <Button onPress={()=>{}}>Entrar</Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <Footer>
        <FooterText>Versão 1.0</FooterText>
      </Footer>
    </>
  );
}

export default Login;
