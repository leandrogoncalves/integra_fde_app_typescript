import React, { useState, useEffect } from "react";
import { StyleSheet, Alert, View } from "react-native";
import { Button } from "react-native-elements";
import { Container } from "../../../components/Layout/Container";
import { Title } from "../../../components/Typography/Title";
import Card from "../../../components/Layout/Card";
import ListItem from "../../../components/Layout/ListItem";

const FiltroSolicitacao: React.FC = () => {
  return (
    <>
      <Container>
        <Title>Filtrar Por</Title>
        <Card>
          <ListItem
            dense
            divider
            title="Numero da Solicitacao"
            chevron
            onPress={() => Alert.alert("Numero da Solicitacao")}
          />
          <ListItem
            dense
            divider
            title="Situação"
            chevron
            onPress={() => Alert.alert("Situação")}
          />
          <ListItem
            dense
            divider
            title="Assunto"
            chevron
            onPress={() => Alert.alert("Assunto")}
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
          onPress={() => Alert.alert("Limpar")}
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
    flex: 0.13,
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
