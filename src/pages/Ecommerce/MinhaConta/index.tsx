import React from "react";
import { Alert } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Container } from "../../../components/Layout/Container";
import TopBar from "../../../components/Layout/TopBar";
import ListItem from "../../../components/Layout/ListItem";
import { useAuth } from "../../../hooks/auth";

const MinhaConta: React.FC = () => {
  const { user } = useAuth();
  const { navigate } = useNavigation();

  return (
    <Container>
      <TopBar title="Minha Conta" drawerMenuLink />
      <ListItem
        divider
        icon={{ name: "person-pin" }}
        title={user.name}
        subtitle={user.department}
        onPress={() => Alert.alert("Perfil")}
      />
      {/* <ListItem
        divider
        dense
        icon={{ name: "message" }}
        title="Mensagens"
        style={{
          marginTop: 10,
        }}
        onPress={() => Alert.alert("Mensagens")}
      /> */}
      <ListItem
        divider
        dense
        style={{
          marginTop: 10,
        }}
        icon={{ name: "move-to-inbox" }}
        title="Pedidos"
        onPress={() => navigate("Pedidos")}
      />
      {/* <ListItem
        divider
        dense
        icon={{ name: "pin-drop" }}
        title="Endereços"
        onPress={() => Alert.alert("Endereços")}
      />
      <ListItem
        divider
        dense
        icon={{ name: "person" }}
        title="Dados pessoais"
        onPress={() => Alert.alert("Dados pessoais")}
      /> */}
    </Container>
  );
};

export default MinhaConta;
