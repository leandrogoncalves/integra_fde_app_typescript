import React, { useEffect, useState, useMemo } from "react";
import { ScrollView, View, Alert } from "react-native";

import { useSolicitation } from "../../../hooks/solicitation";
import solicitationService from "../../../services/solicitationService";

import { Container } from "../../../components/Layout/Container";
import { Subtitle } from "../../../components/Typography/Subtitle";
import { Title } from "../../../components/Typography/Title";
import Card from "../../../components/Layout/Card";
import ListItem from "../../../components/Layout/ListItem";
import Loader from "../../../components/Layout/Loader";

import { ListText, ListTitle } from "./styles";

const Detalhes: React.FC = () => {
  const { solicitationDetail } = useSolicitation();
  const [loader, setLoader] = useState(true);
  const [solicitation, setSolicitation] = useState();

  const styles = {
    marginBottom: 5,
  };

  const labelStyles = {
    width: 110,
  };

  const textStyles = {
    width: 210,
  };

  const entidadeSolicitante = useMemo(() => {
    if (solicitation) {
      let nivel = -1;
      const { entidadeSolicitante } = solicitation;
      entidadeSolicitante.map((entidade) => {
        if (entidade.nivel >= nivel) {
          nivel = entidade.nivel;
        }
      });

      return entidadeSolicitante.find((entidade) => entidade.nivel === nivel);
    }
    return "";
  }, solicitation);

  useEffect(() => {
    (async () => {
      const { data } = await solicitationService.getDetails(
        solicitationDetail.sloid
      );

      if (!data) {
        setLoader(false);
        Alert.alert(
          "Erro",
          "Não foi possivel obter detalhes da solicitação no momento, por favor tente mais tarde!"
        );
      }

      const { solicitacao } = data;

      setSolicitation(solicitacao);
      setLoader(false);
    })();
  }, []);

  return (
    <Container>
      {loader && <Loader />}
      <ScrollView keyboardShouldPersistTaps="handled">
        <Title>Detalhes da solicitação</Title>

        {!solicitation ? (
          <Card>
            <Subtitle>
              {loader ? "Carregando..." : "Nenhum resultado encontrado"}
            </Subtitle>
          </Card>
        ) : (
          <Card>
            <ListItem
              dense
              leftElement={(
                <View style={labelStyles}>
                  <ListTitle>Número:</ListTitle>
                </View>
              )}
              centerElement={
                <View style={textStyles}>
                  <ListText>{solicitation.slonumero}</ListText>
                </View>
              }
              style={styles}
            />
            <ListItem
              dense
              divider
              leftElement={(
                <View style={labelStyles}>
                  <ListTitle>Data:</ListTitle>
                </View>
              )}
              centerElement={
                <View style={textStyles}>
                  <ListText>{solicitationDetail.data_formatada}</ListText>
                </View>
              }
              style={styles}
            />
            <ListItem
              dense
              divider
              leftElement={(
                <View style={labelStyles}>
                  <ListTitle>Entidade da Solicitação:</ListTitle>
                </View>
              )}
              centerElement={
                <View style={textStyles}>
                  <ListText>{entidadeSolicitante.nome_entidade}</ListText>
                </View>
              }
              style={styles}
            />
            <ListItem
              dense
              divider
              leftElement={(
                <View style={labelStyles}>
                  <ListTitle>Tipo de Entidade:</ListTitle>
                </View>
              )}
              centerElement={
                <View style={textStyles}>
                  <ListText>{entidadeSolicitante.funcao}</ListText>
                </View>
              }
              style={styles}
            />
            <ListItem
              dense
              divider
              leftElement={(
                <View style={labelStyles}>
                  <ListTitle>Solicitante:</ListTitle>
                </View>
              )}
              centerElement={(
                <View style={textStyles}>
                  <ListText>
                    {solicitation?.usuario_solicitante?.usunome}
                  </ListText>
                </View>
              )}
              style={styles}
            />
            <ListItem
              dense
              divider
              leftElement={(
                <View style={labelStyles}>
                  <ListTitle>Assunto:</ListTitle>
                </View>
              )}
              centerElement={
                <View style={textStyles}>
                  <ListText>{solicitationDetail.assunto}</ListText>
                </View>
              }
              style={styles}
            />
            <ListItem
              dense
              divider
              leftElement={(
                <View style={labelStyles}>
                  <ListTitle>Objeto:</ListTitle>
                </View>
              )}
              centerElement={
                <View style={textStyles}>
                  <ListText>{solicitationDetail.tipo_objeto}</ListText>
                </View>
              }
              style={styles}
            />
            <ListItem
              dense
              divider
              leftElement={(
                <View style={labelStyles}>
                  <ListTitle>Tipo:</ListTitle>
                </View>
              )}
              centerElement={
                <View style={textStyles}>
                  <ListText>{solicitationDetail.tipo}</ListText>
                </View>
              }
              style={styles}
            />
            <ListItem
              dense
              divider
              leftElement={(
                <View style={labelStyles}>
                  <ListTitle>Motivo:</ListTitle>
                </View>
              )}
              centerElement={
                <View style={textStyles}>
                  <ListText>{solicitationDetail.motivo}</ListText>
                </View>
              }
              style={styles}
            />
            <ListItem
              dense
              leftElement={(
                <View style={labelStyles}>
                  <ListTitle>Criticidade:</ListTitle>
                </View>
              )}
              centerElement={
                <View style={textStyles}>
                  <ListText>{solicitation?.criticidade?.favdescricao}</ListText>
                </View>
              }
              style={styles}
            />
            <ListItem
              dense
              leftElement={(
                <View style={labelStyles}>
                  <ListTitle>Situação:</ListTitle>
                </View>
              )}
              centerElement={
                <View style={textStyles}>
                  <ListText>{solicitationDetail.estadoDocumetno}</ListText>
                </View>
              }
              style={styles}
            />
          </Card>
        )}
      </ScrollView>
    </Container>
  );
};

export default Detalhes;
