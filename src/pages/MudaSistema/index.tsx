import React from "react";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { Container } from "../../components/Layout/Container";
import TopBar from "../../components/Layout/TopBar";
import { Title } from "../../components/Typography/Title";
import Card from "../../components/Layout/Card";

import { ButtomSystem, TextSystem, styles } from "./styles";

const MudaSistema: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <TopBar title="Muda Sistema" iconExit />
      <Title>Selecione o sistema desejado:</Title>
      <Card style={styles.card}>
        <ButtomSystem onPress={() => navigate("SolicitacaoRoutes")}>
          <FontAwesome5 name="hands-helping" size={35} color="green" />
          <TextSystem>Solicitação</TextSystem>
        </ButtomSystem>
        <ButtomSystem
          onPress={() =>
            navigate("EcommerceRoutes", { screen: "SelecionaPerfil" })
          }
        >
          <Feather name="shopping-cart" size={35} color="red" />
          <TextSystem>E-commerce</TextSystem>
        </ButtomSystem>
      </Card>
    </Container>
  );
};

export default MudaSistema;
