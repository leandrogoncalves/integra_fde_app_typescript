import React, { useCallback, useRef, useState } from "react";
import "../../config/ReactotronConfig";
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
} from "react-native";
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";

import * as Yup from "yup";
import getValidationErrors from "../../utils/getValidationErrors";

import { useAuth } from "../../hooks/auth";

import InputLogin from "../../components/Forms/InputLogin";
import ButtonLogin from "../../components/Forms/ButtonLogin";

import { Container, Title, Footer, FooterText } from "./styles";
import logoImg from "../../assets/geral/logo-fde.png";
import Loader from "../../components/Layout/Loader";

interface LoginFormData {
  usuario: string;
  senha: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [loader, setLoader] = useState(false);
  // formRef.current?.setFieldValue

  const passwordInputRef = useRef<TextInput>(null);

  const { login, user } = useAuth();

  const handleLogin = useCallback(async (data: LoginFormData) => {
    setLoader(true);
    try {
      const schema = Yup.object().shape({
        login: Yup.string()
          .required("O campo usuário é obrigatório")
          .min(4, "O campo login deve ter no mínimo 3 caracteres"),
        senha: Yup.string().min(
          3,
          "O campo senha deve ter no mínimo 3 caracteres"
        ),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await login({
        usuario: data.login,
        senha: data.senha,
      });
    } catch (err) {
      // console.log("====================================");
      // console.log("err", err);
      // console.log("====================================");
      setLoader(false);
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }

      Alert.alert(
        "Erro na autenticação",
        "Ocorreu um erro ao fazer login, verifique seu login e senha"
      );
      return false;
    }
  }, []);

  const submitForm = () => {
    formRef.current?.submitForm();
  };

  return (
    <>
      {!loader ? null : <Loader />}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <Image source={logoImg} />
            <View>
              <Title>Login</Title>
            </View>

            <Form
              ref={formRef}
              onSubmit={handleLogin}
              style={{ width: "100%" }}
            >
              <InputLogin
                name="login"
                icon="user"
                placeholder="Usuário"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />
              <InputLogin
                ref={passwordInputRef}
                name="senha"
                icon="lock"
                placeholder="Senha"
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={submitForm}
              />

              <ButtonLogin onPress={submitForm}>Entrar</ButtonLogin>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <Footer>
        <FooterText>Versão 1.0</FooterText>
      </Footer>
    </>
  );
};

export default Login;
