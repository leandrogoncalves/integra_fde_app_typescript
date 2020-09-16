/* eslint-disable react/jsx-indent-props */
import React, { useState, useEffect } from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

import { useAuth } from "../../../hooks/auth";
import { useSolicitation } from "../../../hooks/solicitation";
import { ISolicitation } from "../../../interfaces/ISolicitations";
import { solicitationService } from "../../../services/solicitationService";

import Card from "../../../components/Layout/Card";
import { Container } from "../../../components/Layout/Container";
import ListItem from "../../../components/Layout/ListItem";
import { Title } from "../../../components/Typography/Title";
import { Subtitle } from "../../../components/Typography/Subtitle";
import Loader from "../../../components/Layout/Loader";

const Realizadas: React.FC = () => {
  const { token } = useAuth();
  solicitationService.token = token;
  const { navigate } = useNavigation();
  const { setsolicitationDetail } = useSolicitation();
  const [loader, setLoader] = useState(true);
  const [solicitations, setSolicitations] = useState<ISolicitation[]>([]);

  async function loadSolicitations() {
    const { data } = await solicitationService.getSolicitations();

    if (data) {
      setSolicitations(data);
    }
  }

  const handleClick = (solicitation) => {
    setsolicitationDetail(solicitation);
    navigate("homeSolicitacao");
  };

  useEffect(() => {
    loadSolicitations();

    if (solicitations.length > 0) {
      setLoader(false);
    }
  }, [solicitations]);

  return (
    <Container>
      {!loader ? null : <Loader />}
      <ScrollView keyboardShouldPersistTaps="handled">
        <Title>Solitações realizadas</Title>
        <Card>
          {solicitations.length === 0 ? (
            <Subtitle>Carregando...</Subtitle>
          ) : (
            solicitations.map((solicitation, index) => (
              // eslint-disable-next-line react/jsx-indent
              <ListItem
                key={index}
                divider
                dense
                icon={{ name: "event" }}
                title={`${solicitation.slonumero} - ${solicitation.tipo_objeto} `}
                subtitle={`${solicitation.assunto} - ${solicitation.data_formatada}`}
                // eslint-disable-next-line react/jsx-indent-props
                rightElement={
                  // eslint-disable-next-line react/jsx-wrap-multilines
                  <TouchableOpacity
                    onPress={() => handleClick(solicitation)}
                    style={{ paddingRight: 5 }}
                  >
                    <FontAwesome name="eye" size={25} color="#999" />
                  </TouchableOpacity>
                }
                style={{
                  marginBottom: 5,
                }}
              />
            ))
          )}
        </Card>
      </ScrollView>
    </Container>
  );
};

export default Realizadas;
