import React, { useCallback, useRef } from 'react';
import { Image, View, ScrollView, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { useAuth } from '../../hooks/auth';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Title, Footer, FooterText } from './styles';
import logoImg from '../../assets/logo-fde.png';

interface LoginFormData {
  usuario:string;
  senha:string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  // formRef.current?.setFieldValue

  const passwordInputRef = useRef<TextInput>(null);


  // const { login, user } = useAuth();

  // console.log(user);


  const handleLogin = useCallback(
    async (data:LoginFormData) => {

      console.log(data);

      // await login({
      //   user: data.login,
      //   pass: data.senha,
      // });
    },
    []
  );

  const submitForm = () => {
    formRef.current?.submitForm();
  };

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

            <Form ref={formRef} onSubmit={handleLogin} style={{width:'100%'}}>
              <Input
                name="login"
                icon="user"
                placeholder="Usuário"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={()=>{
                  passwordInputRef.current?.focus();
                }}
              />
              <Input
                ref={passwordInputRef}
                name="senha"
                icon="lock"
                placeholder="Senha"
                secureTextEntry={true}
                returnKeyType="send"
                onSubmitEditing={submitForm}
              />

              <Button onPress={submitForm}>Entrar</Button>
            </Form>
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
