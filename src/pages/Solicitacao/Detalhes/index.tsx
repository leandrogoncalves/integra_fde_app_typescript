import React from "react";
import { ScrollView, View } from "react-native";

import { useSolicitation } from "../../../hooks/solicitation";

import { Container } from "../../../components/Layout/Container";
import { Title } from "../../../components/Typography/Title";
import Card from "../../../components/Layout/Card";
import ListItem from "../../../components/Layout/ListItem";

import { ListText, ListTitle } from "./styles";

const Detalhes: React.FC = () => {
  const { solicitationDetail } = useSolicitation();

  const styles = {
    marginBottom: 5,
  };

  const containerStyles = {
    width: 85,
  };

  return (
    <Container>
      <ScrollView keyboardShouldPersistTaps="handled">
        <Title>Detalhes da solicitação</Title>
        <Card>
          <ListItem
            dense
            leftElement={(
              <View style={containerStyles}>
                <ListTitle>Número:</ListTitle>
              </View>
            )}
            centerElement={<ListText>{solicitationDetail.slonumero}</ListText>}
            style={styles}
          />
          <ListItem
            dense
            divider
            leftElement={(
              <View style={containerStyles}>
                <ListTitle>Data:</ListTitle>
              </View>
            )}
            centerElement={
              <ListText>{solicitationDetail.data_formatada}</ListText>
            }
            style={styles}
          />
          <ListItem
            dense
            divider
            leftElement={(
              <View style={containerStyles}>
                <ListTitle>Objeto:</ListTitle>
              </View>
            )}
            centerElement={
              <ListText>{solicitationDetail.tipo_objeto}</ListText>
            }
            style={styles}
          />
          <ListItem
            dense
            divider
            leftElement={(
              <View style={containerStyles}>
                <ListTitle>Assunto:</ListTitle>
              </View>
            )}
            centerElement={<ListText>{solicitationDetail.assunto}</ListText>}
            style={styles}
          />
          <ListItem
            dense
            divider
            leftElement={(
              <View style={containerStyles}>
                <ListTitle>Tipo:</ListTitle>
              </View>
            )}
            centerElement={<ListText>{solicitationDetail.tipo}</ListText>}
            style={styles}
          />
          <ListItem
            dense
            divider
            leftElement={(
              <View style={containerStyles}>
                <ListTitle>Motivo:</ListTitle>
              </View>
            )}
            centerElement={<ListText>{solicitationDetail.motivo}</ListText>}
            style={styles}
          />
          <ListItem
            dense
            leftElement={(
              <View style={containerStyles}>
                <ListTitle>Situação:</ListTitle>
              </View>
            )}
            centerElement={
              <ListText>{solicitationDetail.estadoDocumetno}</ListText>
            }
            style={styles}
          />
        </Card>
      </ScrollView>
    </Container>
  );
};

export default Detalhes;
