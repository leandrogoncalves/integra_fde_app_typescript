import React, { useState, useEffect } from "react";
import { StyleSheet, Alert, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements";
import { useSolicitation } from "../../../hooks/solicitation";

import { Container } from "../../../components/Layout/Container";
import { Title } from "../../../components/Typography/Title";
import Card from "../../../components/Layout/Card";
import ListItem from "../../../components/Layout/ListItem";

const FiltroSolicitacao: React.FC = () => {
  const { navigate } = useNavigation();
  const {
    numeroSolicitacao,
    setNumeroSolicitacao,
    situacao,
    setSituacao,
    assunto,
    setAssunto,
  } = useSolicitation();

  return (
    <>
      <Container>
        <Title>Filtrar Por</Title>
        <Card>
          <ListItem
            dense
            divider
            title="Numero da Solicitacao"
            subtitle={numeroSolicitacao}
            chevron
            onPress={() => navigate("FiltroPorNumero")}
          />
          <ListItem
            dense
            divider
            title="Situação"
            subtitle={situacao?.label}
            chevron
            onPress={() => navigate("FiltroPorSituacao")}
          />
          <ListItem
            dense
            divider
            title="Assunto"
            subtitle={assunto?.label}
            chevron
            onPress={() => navigate("FiltroPorAssunto")}
          />
          <ListItem
            dense
            divider
            title="Tipo"
            chevron
            onPress={() => Alert.alert("Tipo")}
          />
          <ListItem
            dense
            title="Periodo"
            chevron
            onPress={() => Alert.alert("Periodo")}
          />
        </Card>
      </Container>
      <View style={styles.bottom}>
        <Button
          containerStyle={styles.button}
          raised
          type="outline"
          title="Limpar"
          onPress={() => {
            setAssunto("");
            setSituacao("");
            setNumeroSolicitacao("");
          }}
        />
        <Button
          containerStyle={styles.button}
          raised
          title="Aplicar"
          onPress={() => Alert.alert("Aplicar")}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  checkBox: { backgroundColor: "white", borderColor: "white" },
  bottom: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    height: 10,
  },
  button: { width: 100 },
});

export default FiltroSolicitacao;
