/* eslint-disable react/jsx-indent-props */
import React, { useState, useEffect } from "react";
import { Text, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useAuth } from "../../../hooks/auth";
import { useSolicitation } from "../../../hooks/solicitation";
import { ISolicitation } from "../../../interfaces/ISolicitations";
import solicitationService from "../../../services/solicitationService";

import ListItem from "../../../components/Layout/ListItem";
import Loader from "../../../components/Layout/Loader";
import Card from "../../../components/Layout/Card";
import { Container } from "../../../components/Layout/Container";
import { Subtitle } from "../../../components/Typography/Subtitle";
import { Title } from "../../../components/Typography/Title";

const Realizadas: React.FC = () => {
  const { token } = useAuth();
  solicitationService.setToken(token);

  const { navigate } = useNavigation();
  const { setSolicitationDetail } = useSolicitation();
  const [loader, setLoader] = useState(true);
  const [solicitations, setSolicitations] = useState<ISolicitation[]>(
    undefined
  );

  async function loadSolicitations() {
    const { data } = await solicitationService.getSolicitations();
    setSolicitations(data);
    setLoader(false);
  }

  const handleClick = (solicitation: ISolicitation) => {
    setSolicitationDetail(solicitation);
    navigate("DetalhesSolciitacao");
  };

  useEffect(() => {
    loadSolicitations();
  }, []);

  return (
    <Container>
      {!loader ? null : <Loader />}
      <ScrollView keyboardShouldPersistTaps="handled">
        <Title>Solitações realizadas</Title>
        <Card>
          {!solicitations || solicitations?.length === 0 ? (
            <Subtitle>
              {loader ? "Carregando..." : "Nenhum resultado encontrado"}
            </Subtitle>
          ) : (
            solicitations.map((solicitation, index) => (
              <ListItem
                key={solicitation.slonumero}
                divider
                dense
                icon={{ name: "event" }}
                centerElement={(
                  <View style={{ flexDirection: "column", width: 290 }}>
                    <Text style={{ fontSize: 16 }}>
                      {`${solicitation.slonumero} - ${solicitation.data_formatada} `}
                    </Text>
                    <Text>{`${solicitation.tipo_objeto} - ${solicitation.assunto}`}</Text>
                    <Text>{`Status: ${solicitation.estadoDocumetno}`}</Text>
                  </View>
                )}
                style={{
                  marginBottom: 5,
                }}
                chevron
                onPress={() => handleClick(solicitation)}
              />
            ))
          )}
        </Card>
      </ScrollView>
    </Container>
  );
};

export default Realizadas;
