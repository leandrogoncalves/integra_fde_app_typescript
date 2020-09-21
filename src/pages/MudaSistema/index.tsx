import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";

import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/auth";

import { Container } from "../../components/Layout/Container";
import { Title } from "../../components/Typography/Title";
import TopBar from "../../components/Layout/TopBar";
import Loader from "../../components/Layout/Loader";
import Card from "../../components/Layout/Card";

import { ButtomSystem, TextSystem, styles } from "./styles";

const MudaSistema: React.FC = () => {
  const { navigate } = useNavigation();
  const { logout } = useAuth();

  const [loading, setLoading] = useState(true);

  /**
   * Lança um evento assim que o componente for renderizado
   */
  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const token = await AsyncStorage.getItem("@Integra:token");

      if (!token) {
        logout();
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  return (
    <Container>
      {!loading ? null : <Loader />}

      <TopBar title="Muda Sistema" drawerMenuLink />
      <Title>Selecione o sistema desejado:</Title>
      <Card style={styles.card}>
        <ButtomSystem onPress={() => navigate("SolicitacaoRoutes")}>
          <FontAwesome5 name="hands-helping" size={35} color="green" />
          <TextSystem>Solicitação</TextSystem>
        </ButtomSystem>
        <ButtomSystem
          onPress={() =>
            navigate("EcommerceRoutes", { screen: "SelecionaPerfil" })}
        >
          <Feather name="shopping-cart" size={35} color="red" />
          <TextSystem>E-commerce</TextSystem>
        </ButtomSystem>
      </Card>
    </Container>
  );
};

export default MudaSistema;
