import React, { useCallback, useRef } from 'react';
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert
} from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

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

  const { login, user } = useAuth();

  console.log('user', user);


  const handleLogin = useCallback(
    async (data:LoginFormData) => {

      console.log(data);
      try{

        const schema = Yup.object().shape({
          login: Yup.string()
            .required('O campo usuário é obrigatório')
            .min(4, 'O campo login deve ter no mínimo 3 caracteres'),
          senha: Yup.string()
            .min(3, 'O campo senha deve ter no mínimo 3 caracteres')
        });

        await schema.validate(data,{
          abortEarly: false
        });

      await login({
        usuario: data.login,
        senha: data.senha,
      });

      }catch(err){
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }

        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, verifique seu login e senha'
        );
        return false;
      }

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
